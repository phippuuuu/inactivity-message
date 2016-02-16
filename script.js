var options = INSTALL_OPTIONS;

var message = options.message;
var title = document.title;

window.onblur = function () { document.title = message; }
window.onfocus = function () { document.title = title; }