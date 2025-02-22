export const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const container = document.createElement('div');
    document.body.appendChild(container);

    for (let i = 0; i < 120; i++) {
        const letterDiv = document.createElement('div');
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        letterDiv.textContent = randomLetter;
        letterDiv.style.fontSize = `${11 + i}px`;

        if (i < 40) {
            letterDiv.style.fontWeight = '300';
        } else if (i < 80) {
            letterDiv.style.fontWeight = '400';
        } else {
            letterDiv.style.fontWeight = '600';
        }

        container.appendChild(letterDiv);
    }
};