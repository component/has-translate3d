
var prop = require('transform-property');
if (!prop) return module.exports = false;

// from: https://gist.github.com/lorenzopolidori/3794226
var el = document.createElement('p');
el.style[prop] = 'translate3d(1px,1px,1px)';
var has3d = window.getComputedStyle(el).getPropertyValue(prop);
module.exports = null != has3d && has3d.length && 'none' != has3d;
