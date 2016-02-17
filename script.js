var options = INSTALL_OPTIONS;

var message = options.message;
var title;

window.addEventListener("blur", function () {
  title = document.title;
  document.title = message;
})

window.addEventListener("focus", function () {
  if (title && document.title === message)
    document.title = title;
})
