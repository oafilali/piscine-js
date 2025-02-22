export function pick() {
    // Create display elements
    const hslDiv = document.createElement('div');
    hslDiv.className = 'hsl';
    Object.assign(hslDiv.style, {
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    });
    document.body.appendChild(hslDiv);

    const hueDiv = document.createElement('div');
    hueDiv.className = 'hue';
    Object.assign(hueDiv.style, {
        position: 'fixed',
        top: '10px',
        right: '10px',
        color: 'white'
    });
    document.body.appendChild(hueDiv);

    const lumDiv = document.createElement('div');
    lumDiv.className = 'luminosity';
    Object.assign(lumDiv.style, {
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        color: 'white'
    });
    document.body.appendChild(lumDiv);

    // Create SVG crosshairs
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    Object.assign(svg.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
    });
    document.body.appendChild(svg);

    const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.id = 'axisX';
    axisX.setAttribute('stroke', 'white');
    axisX.setAttribute('stroke-width', '1');
    svg.appendChild(axisX);

    const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.id = 'axisY';
    axisY.setAttribute('stroke', 'white');
    axisY.setAttribute('stroke-width', '1');
    svg.appendChild(axisY);

    // Update on mouse move
    document.addEventListener('mousemove', (e) => {
        const hue = Math.round((e.clientX / window.innerWidth) * 360);
        const lightness = Math.round((e.clientY / window.innerHeight) * 100);

        document.body.style.backgroundColor = `hsl(${hue}, 50%, ${lightness}%)`;
        hslDiv.textContent = `hsl(${hue}, 50%, ${lightness}%)`;
        hueDiv.textContent = hue;
        lumDiv.textContent = `${lightness}%`;

        axisX.setAttribute('x1', e.clientX);
        axisX.setAttribute('x2', e.clientX);
        axisX.setAttribute('y1', '0');
        axisX.setAttribute('y2', '100%');

        axisY.setAttribute('y1', e.clientY);
        axisY.setAttribute('y2', e.clientY);
        axisY.setAttribute('x1', '0');
        axisY.setAttribute('x2', '100%');
    });

    // Copy on click
    document.addEventListener('click', (e) => {
        const hue = Math.round((e.clientX / window.innerWidth) * 360);
        const lightness = Math.round((e.clientY / window.innerHeight) * 100);
        navigator.clipboard.writeText(`hsl(${hue}, 50%, ${lightness}%)`).catch(() => {});
    });
}