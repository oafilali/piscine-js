function compose(event) {
    const container = document.querySelector('.container');

    if (event.key >= 'a' && event.key <= 'z') {
        const div = document.createElement("div");
        div.classList.add("note");
        div.style.backgroundColor = `#${event.key.charCodeAt(0).toString(16)}`;
        div.textContent = event.key;
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