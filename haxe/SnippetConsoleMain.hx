
class SnippetConsole {
    public var recentMessage:String;
    public function new() {
        trace("constructor");
    }
    public function log(message:String) {
        trace(message);
        trace(3);
        recentMessage = message;
    }
}

class SnippetConsoleMain {
    static function main() {
        trace("Hello World !");
        var snippet:SnippetConsole = new SnippetConsole();
        snippet.log("hello world");
    }
}