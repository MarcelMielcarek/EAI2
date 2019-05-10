namespace MarcelderHund {
    window.addEventListener("load", clickButton);
    let address: string = "https://eia3.herokuapp.com";
        //let address:string = "http://localhost:8100";
    
    function clickButton(_event: Event): void {
            let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("check");
            button.addEventListener("click", sendRequest);
        }
    
    export  function sendRequest(_event: Event): void {
            let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
            let getString: string = "?";
            for (let i: number = 0; i < input.length; i++) {
                if (input[i].value != "" && input[i].value != "0") {
                    getString += input[i].name + "=" + input[i].value + "&";
                }
            }
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("GET", address + getString, true);
            xhr.addEventListener("readystatechange", handleStateChange);
            xhr.send();
        }
    
    function handleStateChange(_event: ProgressEvent): void {
            let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
            if (xhr.readyState == XMLHttpRequest.DONE) {
                console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
                console.log("response: " + xhr.response);
                //let order: HTMLParagraphElement = document.createElement("p");
                let bestellungDiv: HTMLDivElement = document.createElement("div");
                bestellungDiv.innerHTML = "Deine Bestellung:" + `${xhr.response}`;
                document.getElementById("Bestellung").appendChild(bestellungDiv);
                
            }       
        }
    }
    