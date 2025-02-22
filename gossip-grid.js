import { gossips } from "./gossip-grid.data.js";

export function grid() {
  // Create range controls
  const rangesDiv = document.createElement("div");
  rangesDiv.className = "ranges";

  const widthInput = createRange("width", 200, 800, 500);
  const fontSizeInput = createRange("fontSize", 20, 40, 30);
  const backgroundInput = createRange("background", 20, 75, 50);

  rangesDiv.append(widthInput, fontSizeInput, backgroundInput);
  document.body.appendChild(rangesDiv);

  // Create the gossip grid container
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

  // Helper: Update style of a gossip card
  function updateCardStyle(card) {
    card.style.width = widthInput.value + "px";
    card.style.fontSize = fontSizeInput.value + "px";
    card.style.backgroundColor = `hsl(200, 50%, ${backgroundInput.value}%)`;
  }

  // Add an initial gossip card (appended in order)
  function addInitialGossip(text) {
    const card = document.createElement("div");
    card.className = "gossip";
    card.textContent = text;
    updateCardStyle(card);
    gridContainer.appendChild(card);
  }

  // Add a user-submitted gossip card (inserted at the beginning among div.gossip elements)
  function addUserGossip(text) {
    const card = document.createElement("div");
    card.className = "gossip";
    card.textContent = text;
    updateCardStyle(card);
    // Insert before the first div.gossip (ignoring the form)
    const firstDiv = gridContainer.querySelector("div.gossip");
    if (firstDiv) {
      gridContainer.insertBefore(card, firstDiv);
    } else {
      gridContainer.appendChild(card);
    }
  }

  // Handle form submission to add a new gossip
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (text !== "") {
      addUserGossip(text);
      textarea.value = "";
    }
  });

  // Append initial gossips from the data file
  gossips.forEach(text => addInitialGossip(text));

  // Update styles for all gossip cards (only div.gossip) when a range input changes
  function updateAllCards() {
    gridContainer.querySelectorAll("div.gossip").forEach(card => {
      updateCardStyle(card);
    });
  }

  widthInput.addEventListener("input", updateAllCards);
  fontSizeInput.addEventListener("input", updateAllCards);
  backgroundInput.addEventListener("input", updateAllCards);
}

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
