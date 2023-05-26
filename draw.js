// Object Class
class obj {
    constructor(radius, speed, size, col) {
        this.radius = radius * 100;
        this.speed = speed;
        this.size = size;
        this.col = col;
        this.deg = 0;
        this.updates = 0;
        this.x = radius * 100;
        this.y = 0;
        this.px = this.x;
        this.py = this.y;
    }
    update_pos() {
        this.rad = this.deg * Math.PI / 180;
        this.px = this.x;
        this.py = this.y;
        this.x = Math.cos(this.rad) * this.radius;
        this.y = Math.sin(this.rad) * this.radius;
        this.deg += this.speed;
        this.updates++;
    }
}

// Canvas Class
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
    clear() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
}

var obs = [];

function update() {
    if (actualdone) {
        clearInterval(update_int);
        setTimeout(() => {alert("Done")}, 1000);
        // window.location.reload();
    }
    for (let i = 0; i < obs.length; i++) {
        for (let j = 0; j < obs.length-i; j++) {
            draw_area.ctx.strokeStyle = obs[i].col;
            draw_area.ctx.lineWidth = "2px";
            draw_area.ctx.moveTo(window.innerWidth/2 + obs[i].x, window.innerHeight/2 + obs[i].y);
            draw_area.ctx.lineTo(window.innerWidth/2 + obs[obs.length-j-1].x, window.innerHeight/2 + obs[obs.length-j-1].y);
            draw_area.ctx.stroke();
        }
    }
    for (let ob of obs) {
        ob.update_pos();
        draw_area.ctx.strokeStyle = "#ccc";
        draw_area.ctx.lineWidth = "2px";
        draw_area.ctx.moveTo(window.innerWidth / 2 + ob.px, window.innerHeight / 2 + ob.py)
        draw_area.ctx.lineTo(window.innerWidth / 2 + ob.x, window.innerHeight / 2 + ob.y)
        // draw_area.ctx.fillStyle = "#000";
        // draw_area.ctx.fillRect(window.innerWidth / 2 + (ob.x - ob.size/2), window.innerHeight / 2 + (ob.y - ob.size/2), ob.size, ob.size)
    }
    if (done) {
        actualdone = true;
    }
    done = true;
    for (let ob of obs) {
        if (ob.x != ob.radius || ob.updates == 1) {
            done = false;
        }
    }
}


const draw_area = new area();
const start_button = document.createElement("button");
var update_int;
var started = false;
var done = false;
var actualdone = false;
const amount = 3;
const sped = 2;

window.addEventListener("load", e => {
    draw_area.update_size();
    start_button.id = "start";
    start_button.innerText = "Start";
    start_button.style.width = "50%";
    start_button.style.position = "absolute";
    start_button.style.bottom = "50px";
    start_button.style.left = "50%"
    start_button.style.transform = "translate(-50%, 0)"
    start_button.style.padding = "20px";
    document.body.appendChild(start_button);
    // start();
});

window.addEventListener("resize", e => {
    if (!started) {
        draw_area.update_size();
    }
});

window.addEventListener("mousemove", e => {
    if (!started) {
        draw_area.update_size();
    }
});

window.addEventListener("click", e => {
    if (e.target.id == "start") {
        start();
    }
});


function start() {
    started = true;
        let random = Math.floor(Math.random() * 6);
        for (let i = 0; i<amount; i++) {
            let colour = null;
            switch(random) {
                case 0:
                    colour = `#${i}${i*3}${i*4}`;
                    break;
                case 1:
                    colour = `#${i}${i*4}${i*3}`;
                    break;
                case 2:
                    colour = `#${i*3}${i}${i*4}`;
                    break;
                case 3:
                    colour = `#${i*3}${i*4}${i}`;
                    break;
                case 4:
                    colour = `#${i*4}${i}${i*3}`;
                    break;
                case 5:
                    colour = `#${i*4}${i*3}${i}`;
                    break;
            }
            obs.push(new obj(i+1, Math.ceil(Math.random() * (amount*sped*2)-amount*sped), 5, colour));
        }
        document.getElementById("start").classList.add("hidden");
        update_int = setInterval(update, 10);
}