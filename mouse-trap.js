let lastCircle = null;

export const createCircle = (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.backgroundColor = 'white';
    circle.style.position = 'absolute';
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
    document.body.appendChild(circle);
    lastCircle = circle;
};

export const moveCircle = (event) => {
    if (lastCircle) {
        lastCircle.style.left = `${event.clientX}px`;
        lastCircle.style.top = `${event.clientY}px`;
        checkIfInsideBox(lastCircle);
    }
};

export const setBox = () => {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.position = 'absolute';
    box.style.left = '50%';
    box.style.top = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(box);
};

const checkIfInsideBox = (circle) => {
    const box = document.querySelector('.box');
    if (!box) return;

    const boxRect = box.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();

    if (
        circleRect.left >= boxRect.left + 1 &&
        circleRect.right <= boxRect.right - 1 &&
        circleRect.top >= boxRect.top + 1 &&
        circleRect.bottom <= boxRect.bottom - 1
    ) {
        circle.style.backgroundColor = 'var(--purple)';
        lastCircle = null; // Stop moving the circle once it's inside the box
    }
};

document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);
document.addEventListener('DOMContentLoaded', setBox);