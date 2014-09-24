// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');
var Surface = require('famous/core/surface');
var fs = require('fs');

// create the main context
var mainContext = Engine.createContext();

var title = new Surface({
  content: '<h1>Buttmarklet</h1>',
  properties: {
    textAlign: 'center'
  }
});

var bookmarklet = fs.readFileSync(__dirname + '/content/buttmarklet.js', 'utf8');

var link = ['<a href="', bookmarklet, '">', '<div id="wideload"></div></a>'].join(' ');

var link = new Surface({
  size: [200, 200],
  content: link,
  classes: ['backfaceVisibility']
});


var logo = new ImageSurface({
  size: [200, 200],
  content: 'images/buttmarklet.jpg',
  classes: ['backfaceVisibility']
});

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
  align: [0.5, 0.5],
  origin: [0.5, 0.5],
  transform : function() {
    return Transform.rotateY(.0005 * (Date.now() - initialTime));
  }
});

var centerModifier = new Modifier({
  align: [0.5, 0.5],
  origin: [0.5, 0.5]
});

mainContext.add(title);
mainContext.add(centerSpinModifier).add(logo);
mainContext.add(centerModifier).add(link);
