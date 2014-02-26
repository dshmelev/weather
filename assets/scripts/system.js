var RAINDROP_COUNT = 10;
var SNOWFLAKE_COUNT = 10;

var elements = []

window.onload = function() {
    for (var i = 0; i < RAINDROP_COUNT; i++) {
        elements.push(new Raindrop());
    }
    for (var i = 0; i < SNOWFLAKE_COUNT; i++) {
        elements.push(new Snowflake());
    }

    var last = new Date();
    setInterval(function() {
        var now = new Date();
        var d = now.getTime() - last.getTime();
        last = now;
        for (var i = 0; i < elements.length; i++) {
            elements[i].move(d);
        }
    });
}