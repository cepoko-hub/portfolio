const carouselSmokeCanvas = document.getElementById("carouselSmokeCanvas");
const carouselCtx = carouselSmokeCanvas.getContext("2d");

carouselSmokeCanvas.width = window.innerWidth;
carouselSmokeCanvas.height = window.innerHeight;

let carouselParticlesArray = [];

class CarouselParticle {
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
        carouselCtx.fillStyle = `rgba(200, 200, 200, ${this.alpha})`;
        carouselCtx.beginPath();
        carouselCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        carouselCtx.closePath();
        carouselCtx.fill();
    }
}

function initCarouselParticles() {
    carouselParticlesArray = [];
    for (let i = 0; i < 30; i++) {
        const x = Math.random() * carouselSmokeCanvas.width;
        const y = Math.random() * carouselSmokeCanvas.height;
        const size = Math.random() * 50 + 10;
        const speedX = Math.random() * 0.3 - 0.15;
        const speedY = Math.random() * 0.3 - 0.15;
        carouselParticlesArray.push(new CarouselParticle(x, y, size, speedX, speedY));
    }
}

function animateCarouselSmoke() {
    carouselCtx.clearRect(0, 0, carouselSmokeCanvas.width, carouselSmokeCanvas.height);
    for (let i = 0; i < carouselParticlesArray.length; i++) {
        carouselParticlesArray[i].update();
        carouselParticlesArray[i].draw();

        if (carouselParticlesArray[i].alpha <= 0) {
            carouselParticlesArray[i].x = Math.random() * carouselSmokeCanvas.width;
            carouselParticlesArray[i].y = Math.random() * carouselSmokeCanvas.height;
            carouselParticlesArray[i].size = Math.random() * 50 + 10;
            carouselParticlesArray[i].speedX = Math.random() * 0.3 - 0.15;
            carouselParticlesArray[i].speedY = Math.random() * 0.3 - 0.15;
            carouselParticlesArray[i].alpha = 1;
            carouselParticlesArray[i].lifeSpan = Math.random() * 0.005 + 0.002;
        }
    }
    requestAnimationFrame(animateCarouselSmoke);
}

initCarouselParticles();
animateCarouselSmoke();

const image3D = document.querySelector('.image-3d');

document.addEventListener('mousemove', (event) => {

    const x = (window.innerWidth / 2 - event.pageX) / 50;
    const y = (window.innerHeight / 2 - event.pageY) / 50;
    
    image3D.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
