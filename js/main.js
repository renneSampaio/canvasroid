var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var numAsteroids = 30;
var asteroidField = [];

for (var i = 0; i < numAsteroids; i++) {
    var pos = [(Math.random() * canvas.width), (Math.random() * canvas.height)];
    var vel = [(Math.random() * 5) + 5, (Math.random() * 5) + 5];
    var radius = (Math.random() * 50) + 20;
    var numVertices = (Math.random() * 8) + 5;
    var maxVariance = (Math.random() * 30) + 20;
    asteroidField.push(new Asteroid(pos, vel, radius, numVertices, maxVariance));
}

function updateAndDrawField() {

    ctx.fillStyle = "rgba(0, 0, 0,.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    asteroidField.forEach(function (ast) {
        ast.update();
        ast.draw(ctx);
    });
    requestAnimationFrame(updateAndDrawField);
}

updateAndDrawField();
