import * as Http from "http"; //Es wird ein Http Objekt erstellt.

namespace L05_Server { //namespace kriegt den Namen "L05_Server"
	console.log("Starting server"); //Konsolenausgabe "Starting server"
	let port: number = Number(process.env.PORT); // die Variable Port wird als Number deklariert. (process.env.PORT) sagt aus, auf welchem Port der Server hören muss.
	if (!port) //wenn die Variable nicht Port ist dann:
		port = 8100; //port wird in 8100 geändert 

	let server: Http.Server = Http.createServer(); //die Variable server wird als http.Server deklariet. Server wird erstellt
	server.addListener("request", handleRequest); //Variable Server kriegt Listener. Wenn eine Anforderung kommt, wird die Funktion handleRequest aufgerufen. 
	server.addListener("listening", handleListen); //Variable Server kriegt Listener vom Typ Listening, diese ruft Funktion handleListen auf. 
	server.listen(port); //Listener wird auf Variable Port instaliert.

	function handleListen(): void { // function handleListen wird erstellt. Keine Übergabeparameter.
		console.log("Listening"); // Konsoloenausgabe "Listening"
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //function handleRequest wird erstellt. Übergabeparameter werden deklariert. Die Funktion bekommt durch die Variable _request die eingegangen Anfrage mit und durch die Variable _response die Serverantwort.
		console.log(_request.url); //Konsolenausgabe "I hear voices!"

		_response.setHeader("content-type", "text/html; charset=utf-8"); // Formatierung der Serverantwort. 
		_response.setHeader("Access-Control-Allow-Origin", "*"); // "Access-Control-Allow-Origin" gibt an von welchen Quellen der Server Anfragen empfangen darf. Der Stern bedeutet, es gibt keine Einschränkungen, jede Quelle hat die Erlaubnis.

		_response.write(_request.url); // gibt eingegangene URL aus.

		_response.end(); //Serverantwort zu Ende
	}
}