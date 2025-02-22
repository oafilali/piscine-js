const styles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

let index = 0;
let adding = true;

export const pimp = () => {
    const button = document.querySelector('.button');

    if (adding) {
        button.classList.remove('unpimp');
        button.classList.add(styles[index]);
        index++;
        if (index === styles.length) {
            adding = false;
            button.classList.add('unpimp');
        }
    } else {
        button.classList.add('unpimp');
        index--;
        button.classList.remove(styles[index]);
        if (index === 0) {
            adding = true;
            button.classList.remove('unpimp');
        }
    }
};

document.addEventListener('click', pimp);