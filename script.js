var options = INSTALL_OPTIONS;

var message = options.message;
var title = document.title;

window.addEventListener("blur", function () { document.title = message; })
window.addEventListener("focus", function () { document.title = title; })