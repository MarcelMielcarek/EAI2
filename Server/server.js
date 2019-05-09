"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Es wird ein Http Objekt erstellt.
const Url = require("url");
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); //Konsolenausgabe "Starting server"
    let port = Number(process.env.PORT); // die Variable Port wird als Number deklariert. (process.env.PORT) sagt aus, auf welchem Port der Server hören muss.
    if (!port) //wenn die Variable nicht Port ist dann:
        port = 8100; //port wird in 8100 geändert 
    let server = Http.createServer(); //die Variable server wird als http.Server deklariet. Server wird erstellt
    server.addListener("request", handleRequest); //Variable Server kriegt Listener. Wenn eine Anforderung kommt, wird die Funktion handleRequest aufgerufen. 
    server.addListener("listening", handleListen); //Variable Server kriegt Listener vom Typ Listening, diese ruft Funktion handleListen auf. 
    server.listen(port); //Listener wird auf Variable Port instaliert.
    function handleListen() {
        console.log("Listening"); // Konsoloenausgabe "Listening"
    }
    function handleRequest(_request, _response) {
        console.log(_request.url); //Konsolenausgabe "I hear voices!"
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Formatierung der Serverantwort. 
        _response.setHeader("Access-Control-Allow-Origin", "*"); // "Access-Control-Allow-Origin" gibt an von welchen Quellen der Server Anfragen empfangen darf. Der Stern bedeutet, es gibt keine Einschränkungen, jede Quelle hat die Erlaubnis.
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
        _response.write(_request.url); // gibt eingegangene URL aus.
        _response.end(); //Serverantwort zu Ende
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=server.js.map