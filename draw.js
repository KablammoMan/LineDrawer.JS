// Object Class
class obj {
    constructor(radius, speed, size) {
        this.radius = radius;
        this.speed = speed;
        this.size = size;
        this.deg = 0;
    }
    update_pos() {
        this.rad = this.deg * Math.PI / 180;
        this.x = Math.cos(this.rad);
        this.y = Math.sin(this.rad);
        this.deg += (1 * this.speed);
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

var obs = [];

function update() {
    for (let ob of obs) {
        ob.update_pos();
        draw_area.ctx.fillStyle = "#fff";
        draw_area.ctx.fillRect(ob.x - ob.size/2, ob.y - ob.size/2, ob.size, ob.size)
    }
    for (let i = 0; i < obs.length; i++) {
        for (let j = 0; j < obs.length-i; i++) {
            draw_area.ctx.strokeStyle = "#eee";
            draw_area.ctx.lineWidth = "2px";
            draw_area.ctx.moveTo(obs[i].x, obs[i].y);
            draw_area.ctx.lineTo(obs[j].x, obs[j].y);
            draw_area.ctx.stroke();
        }
    }
}


const draw_area = new area();

window.addEventListener("load", e => {
    draw_area.update_size();
});

window.addEventListener("resize", e => {
    draw_area.update_size();
});

window.addEventListener("mousemove", e => {
    draw_area.update_size();
});

