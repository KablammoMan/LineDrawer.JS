// Object Class
class obj {
    constructor(radius, speed) {
        this.radius = radius;
        this.speed = speed;
        this.deg = 0;
    }
    update_pos() {
        this.rad = this.deg * Math.PI / 180
        this.x = Math.cos(this.rad);
        this.y = Math.sin(this.rad);
    }
}

class area {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.ctx = this.canvas.getContext("2d");
    }
    update_size() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

const draw_area = new area();

window.addEventListener("load", e => {
    draw_area.start();
    draw_area.update_size();
});

window.addEventListener("resize", e => {
    draw_area.update_size();
});

window.addEventListener("mousemove", e => {
    draw_area.update_size();
});