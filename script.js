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
    ctx.globalAlpha = glow;
    ctx.shadowcolor = 'silver';
    ctx.shadowBlur = 15;
    ctx.drawImage(starImage, x - size / 2, y - size / 2, size, size);
    ctx.restore();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hazeParticles.forEach(p => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, 'rgba(180, 120, 255, ${p.alpha})');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < -p.radius) p.x = canvas.width + p.radius;
        if (p.x > canvas.width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = canvas.height + p.radius;
        if (p.y > canvas.height + p.radius) p.y = -p.radius;
    });

    stars.forEach (s => {
        drawStar(s.x, s.y, s.size, s.glow);
        s.x += s.speedX;
        s.y += s.speedY;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;
    });

    requestAnimationFrame(draw);
}

starImage.onload = () => {
    draw();
};