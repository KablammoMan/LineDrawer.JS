// Object Class
class obj {
    constructor(radius, speed) {
        this.radius = radius;
        this.speed = speed;
    }
}

const canvas = document.createElement("canvas");

window.addEventListener("load", e => {
    let all_elems = document.querySelectorAll("*");
    for (let elem of all_elems) {
        elem.style.margin = "0";
        elem.style.padding = "0";
    }
    canvas.style.width = window.innerWidth;
    canvas.style.height = window.innerHeight;
    canvas.style.backgroundColor = "#aaa";
    document.body.appendChild(canvas);
});

window.addEventListener("resize", e => {
    canvas.style.width = window.innerWidth;
    canvas.style.height = window.innerHeight;
});

window.addEventListener("mousemove", e => {
    
});