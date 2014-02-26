var express = require('express');
var mincer  = require('mincer');

var app = express();
app.use(express.static('public'));

app.configure(function() {
    mincerEnv = new mincer.Environment()
    mincerEnv.appendPath('vendor')
    mincerEnv.appendPath('assets/images')
    mincerEnv.appendPath('assets/scripts')
    mincerEnv.appendPath('assets/stylesheets')

    app.use('/assets', mincer.createServer(mincerEnv));
});

app.listen(3000);