function Snowflake() {
    this.createElement('snowflake');
    this.restart();
    this.moveElement();

    this.dx = Math.random() - 0.5;
    this.dy = 0.5 + Math.random() / 2;
}

Snowflake.prototype = new WeatherElement();

Snowflake.prototype.moveInternal = function(d) {
    this.x += this.dx * d;
    this.y += this.dy * d;
}