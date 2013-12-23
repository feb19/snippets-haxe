(function () { "use strict";
var SnippetConsole = function() {
	console.log("constructor");
};
SnippetConsole.prototype = {
	log: function(message) {
		console.log(message);
		console.log(3);
		this.recentMessage = message;
	}
}
var SnippetConsoleMain = function() { }
SnippetConsoleMain.main = function() {
	console.log("Hello World !");
	var snippet = new SnippetConsole();
	snippet.log("hello world");
}
SnippetConsoleMain.main();
})();
