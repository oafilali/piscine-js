import { colors } from './fifty-shades-of-cold.data.js';

export const generateClasses = () => {
    const styleTag = document.createElement('style');
    document.head.appendChild(styleTag);

    colors.forEach(color => {
        styleTag.sheet.insertRule(`.${color} { background: ${color}; }`, styleTag.sheet.cssRules.length);
    });
};

export const generateColdShades = () => {
    const coldKeywords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
    const container = document.createElement('div');
    document.body.appendChild(container);

    colors.forEach(color => {
        if (coldKeywords.some(keyword => color.includes(keyword))) {
            const div = document.createElement('div');
            div.className = color;
            div.textContent = color;
            div.addEventListener('click', () => choseShade(color));
            container.appendChild(div);
        }
    });
};

export const choseShade = (shade) => {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.className = shade;
    });
};