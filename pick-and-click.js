export const pick = (event) => {
    const body = document.body;
    const hslDiv = document.querySelector('.hsl');
    const hueDiv = document.querySelector('.hue');
    const luminosityDiv = document.querySelector('.luminosity');
    const axisX = document.getElementById('axisX');
    const axisY = document.getElementById('axisY');

    const hue = Math.round((event.clientX / window.innerWidth) * 360);
    const luminosity = Math.round((event.clientY / window.innerHeight) * 100);
    const hsl = `hsl(${hue}, 50%, ${luminosity}%)`;

    body.style.backgroundColor = hsl;
    hslDiv.textContent = hsl;
    hueDiv.textContent = hue;
    luminosityDiv.textContent = luminosity;

    axisX.setAttribute('x1', event.clientX);
    axisX.setAttribute('x2', event.clientX);
    axisY.setAttribute('y1', event.clientY);
    axisY.setAttribute('y2', event.clientY);
};

document.addEventListener('mousemove', pick);

document.addEventListener('click', () => {
    const hslDiv = document.querySelector('.hsl');
    const range = document.createRange();
    range.selectNode(hslDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
});