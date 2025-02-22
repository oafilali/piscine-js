import { styles } from "./pimp-my-style.data.js";

let counter = 0;

export const pimp = () => {
    const button = document.querySelector("button.button");

    if (!button.classList.contains("unpimp")) {
        button.classList.add(styles[counter]);
        counter++;
        if (counter === styles.length) {
            button.classList.add("unpimp");
        }
    } else {
        counter--;
        button.classList.remove(styles[counter]);
        if (counter === 0) {
            button.classList.remove("unpimp");
        }
    }
};

document.addEventListener('click', pimp);