import { A } from "@solidjs/router";
import { createSignal, createEffect, onMount } from "solid-js";
import "./Navbar.css";

type FontChoice = "mono" | "serif";

export default function Navbar() {
  const [font, setFont] = createSignal<FontChoice>("mono");
  const [dropdownOpen, setDropdownOpen] = createSignal(false);

  onMount(() => {
    const saved = localStorage.getItem("font-preference") as FontChoice | null;
    if (saved) {
      setFont(saved);
      applyFont(saved);
    }
  });

  createEffect(() => {
    const current = font();
    localStorage.setItem("font-preference", current);
    applyFont(current);
  });

  const applyFont = (choice: FontChoice) => {
    document.body.classList.remove("font-mono", "font-serif");
    document.body.classList.add(`font-${choice}`);
  };

  const toggleFont = () => {
    setFont((prev) => (prev === "mono" ? "serif" : "mono"));
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav class="nav">
      <div class="nav-brand">
        <A href="/">Erik Scholtz</A>
      </div>
      <ul class="nav-links">
        <li>
          <A href="/" end>
            Home
          </A>
        </li>
        <li>
          <A href="/about">About</A>
        </li>
        <li>
          <A href="/projects">Projects</A>
        </li>
        <li>
          <A href="/blog">Blog</A>
        </li>
      </ul>
      <div class="nav-dropdown">
        <button
          class="nav-dropdown-trigger"
          onClick={toggleDropdown}
          type="button"
        >
          <span>⚙️</span>
        </button>
        {dropdownOpen() && (
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-item">
              <span class="nav-dropdown-label">Font</span>
              <button
                class="nav-toggle-switch"
                onClick={toggleFont}
                type="button"
                aria-label={`Switch to ${font() === "mono" ? "serif" : "monospace"} font`}
              >
                <span
                  class="nav-toggle-option"
                  classList={{ active: font() === "mono" }}
                >
                  Mono
                </span>
                <span
                  class="nav-toggle-slider"
                  style={{
                    left: font() === "mono" ? "0.25rem" : "calc(50% + 0.25rem)",
                  }}
                ></span>
                <span
                  class="nav-toggle-option"
                  classList={{ active: font() === "serif" }}
                >
                  Serif
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
