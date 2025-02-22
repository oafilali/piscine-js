function compose(event) {
    if (event === undefined) {
        return;
    }

    const container = document.querySelector('.container');

    if ([...Array(26).keys()].map((i) => i + 97).includes(event.key.charCodeAt(0))) {
        const div = document.createElement("div");
        div.classList.add("note");
        div.style.backgroundColor = `rgb(${
            (255 / 26) * (event.key.charCodeAt(0) - 97)
        }, ${(255 / 26) * (event.key.charCodeAt(0) - 97)}, ${
            (255 / 26) * (event.key.charCodeAt(0) - 97)
        })`;
        div.innerHTML = event.key;
        container.appendChild(div);
    } else if (event.key === "Backspace") {
        const notes = document.getElementsByClassName("note");
        if (notes.length > 0) {
            notes[notes.length - 1].remove();
        }
    } else if (event.key === "Escape") {
        const notes = document.getElementsByClassName("note");
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}

document.addEventListener("keydown", compose);

export { compose };