const canvas = document.getElementById('cosmicCanvas');
const ctx = canvas.getContext('2d');
let stars = {};
let hazeParicles = [];

const starImage = new Image();
starImage.src = "star.png";

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 100; i+) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 5,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        glow: Math.random() * 0.8 + 0.2
    });
}

for (let i = 0; i < 30; i+) {
    hazeParicles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 150 + 50,
        speedX: (Math.random() * 150 + 50),
        speedY: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.15 + 0.05
    });
}

function drawStar(x, y, size, glow) {
    ctx.save();
}