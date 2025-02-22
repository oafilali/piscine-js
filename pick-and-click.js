// Listen for mousemove to update color and crosshairs
document.addEventListener("mousemove", (e) => {
    pick(e);
  });
  
  // Listen for clicks to update color and copy the HSL value to the clipboard
  document.addEventListener("click", (e) => {
    pick(e);
    copyHSL();
  });
  
  // Create and append the display elements
  const hslDiv = document.createElement("div");
  hslDiv.classList.add("hsl");
  document.body.appendChild(hslDiv);
  
  const hueDiv = document.createElement("div");
  hueDiv.classList.add("hue", "text");
  document.body.appendChild(hueDiv);
  
  const luminosityDiv = document.createElement("div");
  luminosityDiv.classList.add("luminosity", "text");
  document.body.appendChild(luminosityDiv);
  
  // Create an SVG to hold the crosshair lines
  const svgns = "http://www.w3.org/2000/svg";
  const svg = document.createElement("svg");
  svg.id = "svg";
  // Setting viewBox with window dimensions for proper scaling
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);
  svg.setAttribute("preserveAspectRatio", "none");
  
  // Create the horizontal line (axisX)
  const axisX = document.createElementNS(svgns, "line");
  axisX.id = "axisX";
  axisX.setAttribute("x1", "0");
  axisX.setAttribute("y1", "0");
  axisX.setAttribute("x2", "0");
  axisX.setAttribute("y2", window.innerHeight);
  axisX.setAttribute("stroke", "red");
  axisX.setAttribute("stroke-width", "3");
  svg.appendChild(axisX);
  
  // Create the vertical line (axisY)
  const axisY = document.createElementNS(svgns, "line");
  axisY.id = "axisY";
  axisY.setAttribute("x1", "0");
  axisY.setAttribute("y1", "0");
  axisY.setAttribute("x2", window.innerWidth);
  axisY.setAttribute("y2", "0");
  axisY.setAttribute("stroke", "red");
  axisY.setAttribute("stroke-width", "3");
  svg.appendChild(axisY);
  
  // Append the SVG element to the body
  document.body.appendChild(svg);
  
  // The pick function computes the HSL values based on the mouse position
  function pick(e) {
    if (!e) return;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // Map X (0 to window.innerWidth) to hue (0 to 360)
    const hue = Math.round((mouseX / window.innerWidth) * 360);
    // Map Y (0 to window.innerHeight) to luminosity (0 to 100)
    const luminosity = Math.round((mouseY / window.innerHeight) * 100);
    // Use a fixed saturation of 50% (as per instructions)
    const hsl = `hsl(${hue}, 50%, ${luminosity}%)`;
    
    // Update the body's background color
    document.body.style.background = hsl;
    // Update the displayed values
    hslDiv.textContent = hsl;
    hueDiv.textContent = hue;
    luminosityDiv.textContent = luminosity;
    // Update the SVG crosshairs to follow the cursor
    drawLines(mouseX, mouseY);
  }
  
  // Update the SVG lines to cross at the current mouse position
  function drawLines(x, y) {
    axisX.setAttribute("x1", x);
    axisX.setAttribute("x2", x);
    axisY.setAttribute("y1", y);
    axisY.setAttribute("y2", y);
  }
  
  // Copy the current HSL value to the clipboard on click
  async function copyHSL() {
    try {
      await navigator.clipboard.writeText(hslDiv.textContent);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
  
  export { pick };
  