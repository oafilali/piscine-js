const circles = [];
let box;

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.isTrapped = false;
        this.HTML = document.createElement("div");
        this.HTML.classList.add("circle");
        this.HTML.style.position = "absolute";
        this.HTML.style.left = `${this.x}px`;
        this.HTML.style.top = `${this.y}px`;
        this.HTML.style.background = "white";
        document.body.appendChild(this.HTML);
        circles.push(this);
    }

    move(x, y) {
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.HTML.style.left = `${this.x}px`;
            this.HTML.style.top = `${this.y}px`;
            this.trapped();
        }
    }

    trapped() {
        if (
            this.x > box.x &&
            this.x + this.diameter < box.x + box.width &&
            this.y > box.y &&
            this.y + this.diameter < box.y + box.height
        ) {
            this.isTrapped = true;
            this.HTML.style.background = "var(--purple)";
        }
    }
}

class Box {
    constructor() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("box");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = "50%";
        this.HTML.style.left = "50%";
        this.HTML.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(this.HTML);
        this.x = this.HTML.offsetLeft - this.HTML.offsetWidth / 2 - 1;
        this.y = this.HTML.offsetTop - this.HTML.offsetHeight / 2 - 1;
        this.width = this.HTML.offsetWidth + 1;
        this.height = this.HTML.offsetHeight + 1;
    }
}

document.body.addEventListener("click", (e) => {
    new Circle(e.clientX - 25, e.clientY - 25); // Adjust for circle center
});

document.body.addEventListener("mousemove", (e) => {
    if (circles.length > 0) {
        circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25); // Adjust for circle center
    }
});

const setBox = () => {
    box = new Box();
};

export { setBox, circles };