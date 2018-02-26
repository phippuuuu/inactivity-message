var options = INSTALL_OPTIONS;

var message = options.message;
var title;

window.addEventListener("blur", function () {
  title = document.title;
  document.title = message;
  
	var i = 0;
	
	function myLoop () {
		setTimeout(function () {
			document.title = message.substr(i, message.length - i) + " " + message.substr(0, i);
			if(i + 1 == message.length) {
				i = 0;
			} else {
				i++;
			}
			myLoop();
		}, 500)
	}
	
	if(!window.blur){
		myLoop();
	}
})

window.addEventListener("focus", function () {
  if (title && document.title === message)
    document.title = title;
})
