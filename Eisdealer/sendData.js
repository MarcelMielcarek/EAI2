var L04_AssocArraysAndExport;
(function (L04_AssocArraysAndExport) {
    window.addEventListener("load", clickButton);
    let address = "https://eia3.herokuapp.com";
    //let address:string = "http://localhost:8100";
    function clickButton(_event) {
        let button = document.getElementById("check");
        button.addEventListener("click", sendRequest);
    }
    function sendRequest(_event) {
        let input = document.getElementsByTagName("input");
        let getString = "?";
        for (let i = 0; i < input.length; i++) {
            if (input[i].value != "" && input[i].value != "0") {
                getString += input[i].name + "=" + input[i].value + "&";
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + getString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            let order = document.createElement("p");
            let heading = document.createElement("h2");
            heading.innerHTML = "Deine Bestellung:";
            document.getElementById("Bestellung").appendChild(heading);
            order.innerHTML = `${xhr.response}`;
            document.getElementById("Bestellung").appendChild(order);
        }
    }
})(L04_AssocArraysAndExport || (L04_AssocArraysAndExport = {}));
//# sourceMappingURL=sendData.js.map