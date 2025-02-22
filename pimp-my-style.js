const styles = ["style1", "style2", "style3", "style4", "style5", "style6", "style7", "style8", "style9", "style10"];

let index = 0;
let adding = true;

export const pimp = () => {
    const button = document.querySelector('.button');

    if (adding) {
        button.classList.add(styles[index]);
        index++;
        if (index === styles.length) {
            adding = false;
            button.classList.toggle('unpimp');
        }
    } else {
        index--;
        button.classList.remove(styles[index]);
        if (index === 0) {
            adding = true;
            button.classList.toggle('unpimp');
        } else {
            button.classList.toggle('unpimp');
        }
    }
};

document.addEventListener('click', pimp);