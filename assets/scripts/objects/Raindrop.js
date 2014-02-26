function Raindrop() {
    this.createElement('raindrop');
    this.restart();
    this.moveElement();

    this.dy = 0.5 + Math.random() / 2;
}

extend(Raindrop, WeatherElement);

Raindrop.prototype.moveInternal = function(d) {
    this.y += this.dy * d;
}