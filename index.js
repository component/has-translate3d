
var prefix = require('prefix')
	, prop = prefix('transform');

if (!prop) return module.exports = false;

// from: https://gist.github.com/lorenzopolidori/3794226
var el = document.createElement('div');
el.style[prop] = 'translate3d(1px,1px,1px)';
document.body.insertBefore(el, null);
var val = window.getComputedStyle(el).getPropertyValue(prefix('transform', true));
document.body.removeChild(el);
module.exports = null != val && val.length && 'none' != val;
