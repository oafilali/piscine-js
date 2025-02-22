import { gossips } from "./gossip-grid.data.js";

export function grid() {
  // Create range controls container
  const rangesDiv = document.createElement("div");
  rangesDiv.className = "ranges";

  // Create range inputs
  const widthInput = createRange("width", 200, 800, 500);
  const fontSizeInput = createRange("fontSize", 20, 40, 30);
  const backgroundInput = createRange("background", 20, 75, 50);

  rangesDiv.append(widthInput, fontSizeInput, backgroundInput);
  document.body.appendChild(rangesDiv);

  // Create gossip grid container
  const gridContainer = document.createElement("div");
  gridContainer.className = "gossip-grid";
  document.body.appendChild(gridContainer);

  // Create the first gossip card as a form
  const form = document.createElement("form");
  form.className = "gossip";
  const textarea = document.createElement("textarea");
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Share gossip!";
  form.append(textarea, submitBtn);
  gridContainer.appendChild(form);

  // On form submission, add a new gossip card
  form.addEventListener("submit", e => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (text !== "") {
      addGossip(text);
      textarea.value = "";
    }
  });

  // Display provided gossips
  gossips.forEach(text => addGossip(text));

  // Helper: Add a gossip card and apply current styles
  function addGossip(text) {
    const card = document.createElement("div");
    card.className = "gossip";
    card.textContent = text;
    gridContainer.appendChild(card);
    updateCardStyle(card);
  }

  // Helper: Update the style of a card based on range inputs
  function updateCardStyle(card) {
    card.style.width = widthInput.value + "px";
    card.style.fontSize = fontSizeInput.value + "px";
    card.style.backgroundColor = `hsl(200, 50%, ${backgroundInput.value}%)`;
  }

  // Update styles for all cards when any range input changes
  function updateAllCards() {
    document.querySelectorAll(".gossip").forEach(card => updateCardStyle(card));
  }

  widthInput.addEventListener("input", updateAllCards);
  fontSizeInput.addEventListener("input", updateAllCards);
  backgroundInput.addEventListener("input", updateAllCards);
}

// Helper to create a range input element
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
