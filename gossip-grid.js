import { gossips } from "./gossip-grid.data.js";

export function grid() {
  // --- Create Range Controls ---
  const rangesDiv = document.createElement("div");
  rangesDiv.className = "ranges";

  const widthInput = createRange("width", 200, 800, 500);
  const fontSizeInput = createRange("fontSize", 20, 40, 30);
  const backgroundInput = createRange("background", 20, 75, 50);

  rangesDiv.append(widthInput, fontSizeInput, backgroundInput);
  document.body.appendChild(rangesDiv);

  // --- Create the Gossip Grid Container ---
  const gridContainer = document.createElement("div");
  gridContainer.className = "gossip-grid";
  document.body.appendChild(gridContainer);

  // --- Create the First Gossip Card as a Form ---
  const form = document.createElement("form");
  form.className = "gossip";
  const textarea = document.createElement("textarea");
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Share gossip!";
  form.append(textarea, submitBtn);
  gridContainer.appendChild(form);

  // When the form is submitted, add a new gossip card (inserted at the beginning of the list of divs)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (text !== "") {
      addGossip(text);
      textarea.value = "";
    }
  });

  // --- Display the Provided Gossips ---
  gossips.forEach((text) => {
    addGossip(text);
  });

  // --- Helper: Create and Insert a Gossip Card ---
  function addGossip(text) {
    const card = document.createElement("div");
    card.className = "gossip";
    card.textContent = text;
    updateCardStyle(card);
    // Insert new gossip card before the first existing div.gossip (if any)
    const firstGossipDiv = gridContainer.querySelector("div.gossip");
    if (firstGossipDiv) {
      gridContainer.insertBefore(card, firstGossipDiv);
    } else {
      gridContainer.appendChild(card);
    }
  }

  // --- Helper: Update the Style of a Gossip Card ---
  function updateCardStyle(card) {
    card.style.width = widthInput.value + "px";
    card.style.fontSize = fontSizeInput.value + "px";
    card.style.backgroundColor = `hsl(200, 50%, ${backgroundInput.value}%)`;
  }

  // --- Update Styles on Range Changes ---
  function updateAllCards() {
    // Only update the style of div elements (exclude the form)
    gridContainer.querySelectorAll("div.gossip").forEach((card) => {
      updateCardStyle(card);
    });
  }

  widthInput.addEventListener("input", updateAllCards);
  fontSizeInput.addEventListener("input", updateAllCards);
  backgroundInput.addEventListener("input", updateAllCards);
}

// --- Helper: Create a Range Input ---
function createRange(id, min, max, value) {
  const input = document.createElement("input");
  input.type = "range";
  input.id = id;
  input.className = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  return input;
}
