import type { Item } from "./types";
import Fuse from "fuse.js";
import { createFilterOptions, createGradeFilter } from "./filter-creation";
import { applyFilters } from "./filter-events";
import helpIcon from "./images/help-support.svg";
import styles from "./style.css?inline";

class SmartCommandPalette extends HTMLElement {
  private bubble!: HTMLElement;

  private searchBar!: HTMLInputElement;
  private searchButton!: HTMLButtonElement;
  private cityFilter!: HTMLSelectElement;
  private locationFilter!: HTMLSelectElement;
  private gradeFilter!: HTMLSelectElement;

  data: Item[] = [];
  fuse!: Fuse<Item>;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async loadData() {
    try {
      // will soon be an api call to the database, right now its stored locally at /public/search-index.json
      const res = await fetch("/U-Community-Page-Data.json");
      const data: Item[] = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async loadDataInit() {
    this.data = await this.loadData();
    // console.log(this.data);

    // fuse object
    this.fuse = new Fuse<Item>(this.data, {
      keys: ["title", "description", "tags"],
      includeScore: true,
    });
    // this.addKeyBoardShortcuts()
    await this.createFilters();
    await this.addFilterEvents();
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `<div style="padding:20px;background:#eee;">Loading Command Palette...</div>`;
    this.render();
    this.cacheSearchElements(); // Get the search elements in shadow DOM
    this.cacheFilters(); // Get filters in shadow DOM
    this.setupBubbleBehaviour();
    this.setupPaletteControls();
    this.addKeyBoardShortcuts();
    this.loadDataInit(); // Fetch JSON data
  }

  setupBubbleBehaviour() {
    this.bubble = this.shadowRoot!.querySelector(
      "#assistant-bubble",
    ) as HTMLElement;

    if (!this.bubble) return;

    const showBubble = () => {
      this.bubble.style.opacity = "1";
      this.bubble.style.transform = "translateY(0)";

      setTimeout(() => {
        this.bubble.style.opacity = "0";
        this.bubble.style.transform = "translateY(6px)";
      }, 5000);
    };

    let idleTimeout: number;

    const resetIdleTimer = () => {
      clearTimeout(idleTimeout);
      idleTimeout = window.setTimeout(showBubble, 10000);
    };

    // detect user activity
    ["mousemove", "keydown", "scroll", "click"].forEach((event) =>
      window.addEventListener(event, resetIdleTimer),
    );

    // start timer initially
    resetIdleTimer();
  }

  // palette open/close logic
  setupPaletteControls() {
    const palette = this.shadowRoot!.querySelector(
      "#command-palette",
    ) as HTMLElement;
    const button = this.shadowRoot!.querySelector(
      "#assistant-btn",
    ) as HTMLElement;
    const closeBtn = this.shadowRoot!.querySelector(
      "#close-btn",
    ) as HTMLElement;

    if (!palette || !button || !closeBtn) return;

    // toggle palette visibility
    const toggleCommandPalette = () => {
      palette.classList.toggle("hidden");
      button.classList.toggle("hidden");
    };

    // close palette
    const closeCommandPalette = () => {
      palette.classList.add("hidden");
      button.classList.toggle("hidden");
    };

    button.addEventListener("click", toggleCommandPalette);
    closeBtn.addEventListener("click", closeCommandPalette);

    // close on ESC key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCommandPalette();
      }
    });
  }

  // Shortcut: ⌘K / Ctrl+K
  addKeyBoardShortcuts() {
    const palette = this.shadowRoot!.querySelector(
      "#command-palette",
    ) as HTMLElement;

    if (!palette) return;

    window.addEventListener("keydown", (e) => {
      // detect ⌘+K on Mac or Ctrl+K on Windows/Linux
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const isShortcutPressed =
        (isMac && e.metaKey && e.key.toLowerCase() === "k") ||
        (!isMac && e.ctrlKey && e.key.toLowerCase() === "k");

      if (isShortcutPressed) {
        e.preventDefault(); // prevent browser default behavior
        palette.classList.toggle("hidden"); // toggle visibility
        const input = this.shadowRoot!.querySelector(
          "#command-input",
        ) as HTMLInputElement;
        if (input && !palette.classList.contains("hidden")) {
          input.focus(); // focus input when palette opens
        }
      }
    });
  }

  private cacheSearchElements() {
    this.searchBar = this.shadowRoot!.getElementById(
      "command-input",
    ) as HTMLInputElement;
    this.searchButton = this.shadowRoot!.getElementById(
      "search-btn",
    ) as HTMLButtonElement;
  }

  private cacheFilters() {
    this.cityFilter = this.shadowRoot!.getElementById(
      "cityFilter",
    ) as HTMLSelectElement;

    this.locationFilter = this.shadowRoot!.getElementById(
      "locationFilter",
    ) as HTMLSelectElement;

    this.gradeFilter = this.shadowRoot!.getElementById(
      "gradeFilter",
    ) as HTMLSelectElement;
  }

  private createFilters() {
    createFilterOptions(this.data, "city", this.cityFilter);
    createFilterOptions(this.data, "location", this.locationFilter);
    createGradeFilter(this.data, this.gradeFilter);
  }

  private addFilterEvents() {
    this.searchBar.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyFilters(this.fuse, this.data);
        this.searchBar.blur();
      }
    });
    this.searchButton.addEventListener("click", () =>
      applyFilters(this.fuse, this.data),
    );
    this.cityFilter.addEventListener("change", () =>
      applyFilters(this.fuse, this.data),
    );
    this.locationFilter.addEventListener("change", () =>
      applyFilters(this.fuse, this.data),
    );
    this.gradeFilter.addEventListener("change", () =>
      applyFilters(this.fuse, this.data),
    );
  }

  private render() {
    this.shadowRoot!.innerHTML = `
      <style>
        ${styles}
      </style>

      <button id="assistant-btn" aria-label="Open Command Palette">
      <img
        src="${helpIcon}"
        alt="Click Me Icon Placeholder"
        draggable="false"
      />
    </button>
    <div id="assistant-bubble">To Open Smart Command Palette: ⌘K / Ctrl+K</div>

    <div id="command-palette" class="hidden">
      <div class="center palette">
        <button id="close-btn" aria-label="Close">X</button>
        <h1 id="palette-title">U+ Quick Search</h1>
        <div id="search-container">
          <div id="search-wrap">
            <span class="icon" aria-hidden="true">🔍</span>
            <input
              id="command-input"
              type="text"
              placeholder="Search programs, pages, or actions ..."
            />
          </div>
          <button id="search-btn">Search</button>
        </div>
        <div id="filters-container">
          <span>Filters:</span>
          <select id="cityFilter">
            <option value="">All Cities</option>
          </select>
          <select id="locationFilter">
            <option value="">All Locations</option>
          </select>
          <select id="gradeFilter">
            <option value="">All Grades</option>
          </select>
        </div>
        <div class="results-counter"></div>
        <div id="results-container">
          <div class="results"></div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("smart-command-palette", SmartCommandPalette);
