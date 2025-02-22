import { places } from "./where-do-we-go.data.js";

export function explore() {
  // Sort places from north (highest latitude) to south
  const sortedPlaces = places.slice().sort((a, b) => b.latitude - a.latitude);

  // Create a full-screen <section> for each place
  sortedPlaces.forEach(place => {
    const section = document.createElement("section");
    section.style.height = "100vh";
    section.style.backgroundImage = `url(./where-do-we-go_images/${formatName(place.name)}.jpg)`;
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
    document.body.appendChild(section);
  });

  // Create the location indicator <a> tag
  const locationIndicator = document.createElement("a");
  locationIndicator.className = "location";
  locationIndicator.style.position = "fixed";
  locationIndicator.style.top = "50%";
  locationIndicator.style.left = "50%";
  locationIndicator.style.transform = "translate(-50%, -50%)";
  // Initialize with the first place
  updateLocationIndicator(sortedPlaces[0], locationIndicator);
  document.body.appendChild(locationIndicator);

  // Create the compass indicator <div>
  const directionIndicator = document.createElement("div");
  directionIndicator.className = "direction";
  directionIndicator.style.position = "fixed";
  directionIndicator.style.top = "10px";
  directionIndicator.style.right = "10px";
  directionIndicator.textContent = "N";
  document.body.appendChild(directionIndicator);

  let lastScrollY = window.scrollY;
  
  // Update indicators on scroll
  window.addEventListener("scroll", () => {
    // Calculate which section is at the middle of the viewport
    const index = Math.floor((window.scrollY + window.innerHeight / 2) / window.innerHeight);
    const currentPlace = sortedPlaces[index] || sortedPlaces[sortedPlaces.length - 1];
    updateLocationIndicator(currentPlace, locationIndicator);

    // Update compass direction based on scroll direction
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      directionIndicator.textContent = "N";
    } else if (currentScrollY > lastScrollY) {
      directionIndicator.textContent = "S";
    }
    lastScrollY = currentScrollY;
  });
}

// Update the location indicator with the current place data
function updateLocationIndicator(place, element) {
  element.textContent = `${place.name}\n${place.latitude}, ${place.longitude}`;
  element.style.color = place.color;
  element.href = `https://www.google.com/maps?q=${place.latitude},${place.longitude}`;
  element.target = "_blank";
}

// Format the place name to match the image file naming convention
function formatName(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}
