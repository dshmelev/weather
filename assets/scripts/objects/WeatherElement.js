function WeatherElement() {}

WeatherElement.prototype.createElement = function(className) {
    var element = document.createElement('div');
    element.setAttribute('class', 'element ' + className);
    document.body.appendChild(element);
    this.element = element;
}

WeatherElement.prototype.moveElement = function() {
    this.element.setAttribute('style', 'left:' + this.x + 'px;top:' + this.y + 'px');
}

WeatherElement.prototype.restart = function() {
    this.x = Math.random() * document.body.offsetWidth;
    this.y = -40;
}

WeatherElement.prototype.move = function(d) {
    this.moveInternal(d);
    if (this.y > 1000 || this.x < 0 || this.x > document.body.offsetWidth) {
        this.restart();
    }
    this.moveElement();
}