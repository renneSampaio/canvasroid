function Asteroid(pos, vel,radius, numVertices, maxVariance) {
    this.pos = pos;
    this.vel = vel;
    this.vertices = [];

    var angleStep = (Math.PI * 2) / numVertices;
    for (var i = 0; i < numVertices; i++) {
        var tempPos = [0, 0];
        tempPos[0] = Math.cos(angleStep * i) * radius + (Math.random() * maxVariance);
        tempPos[1] = Math.sin(angleStep * i) * radius + (Math.random() * maxVariance);

        this.vertices.push(tempPos);
    }
}

Asteroid.prototype.update = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    if (this.pos[0] > window.innerWidth) {
        this.pos[0] -= window.innerWidth;
    }
    if (this.pos[1] > window.innerHeight) {
        this.pos[1] -= window.innerHeight;
    }
}

Asteroid.prototype.draw = function (ctx) {
    ctx.beginPath();

    for (var i = 0; i < this.vertices.length; i++) {

        var nextPos = (i+1) % (this.vertices.length);

        ctx.moveTo(this.pos[0] + this.vertices[i][0]      , this.pos[1] + this.vertices[i][1]);
        ctx.lineTo(this.pos[0] + this.vertices[nextPos][0], this.pos[1] + this.vertices[nextPos][1])
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
    }
    ctx.closePath();
}
