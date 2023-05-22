// Object Class
class obj {
    constructor(radius, speed) {
        this.radius = radius;
        this.speed = speed;
    }
}

class area {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.style.backgroundColor = "#aaa";
        document.body.insertBefore(this.canvas, document.body.firstChild);
    }
    update_size() {
        this.canvas.style.width = window.innerWidth.toString() + "px";
        this.canvas.style.height = window.innerHeight.toString() + "px";
    }
}

const draw_area = new area();

window.addEventListener("load", e => {
    let all_elems = document.querySelectorAll("*");
    for (let elem of all_elems) {
        elem.style.margin = "0";
        elem.style.padding = "0";
    }
    draw_area.update_size();
});

window.addEventListener("resize", e => {
    draw_area.update_size();
});

window.addEventListener("mousemove", e => {
    draw_area.update_size();
});