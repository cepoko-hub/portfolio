const smokeCanvas = document.getElementById("smokeCanvas");
const smokeCtx = smokeCanvas.getContext("2d");

smokeCanvas.width = window.innerWidth;
smokeCanvas.height = window.innerHeight;

let particlesArray = [];
const particleCount = 50;

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.alpha = 1;
        this.lifeSpan = Math.random() * 0.005 + 0.002;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05;
        if (this.alpha > 0) this.alpha -= this.lifeSpan;
    }
    draw() {
        smokeCtx.fillStyle = `rgba(200, 200, 200, ${this.alpha})`;
        smokeCtx.beginPath();
        smokeCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        smokeCtx.closePath();
        smokeCtx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * smokeCanvas.width;
        const y = Math.random() * smokeCanvas.height;
        const size = Math.random() * 50 + 10;
        const speedX = Math.random() * 1 - 0.5;
        const speedY = Math.random() * 1 - 0.5;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
    }
}

function animateSmoke() {
    smokeCtx.clearRect(0, 0, smokeCanvas.width, smokeCanvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].alpha <= 0) {
            particlesArray[i].x = Math.random() * smokeCanvas.width;
            particlesArray[i].y = Math.random() * smokeCanvas.height;
            particlesArray[i].size = Math.random() * 50 + 10;
            particlesArray[i].speedX = Math.random() * 1 - 0.5;
            particlesArray[i].speedY = Math.random() * 1 - 0.5;
            particlesArray[i].alpha = 1;
        }
    }
    requestAnimationFrame(animateSmoke);
}

initParticles();
animateSmoke();
