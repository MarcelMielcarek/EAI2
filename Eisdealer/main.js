var MarcelderHund;
(function (MarcelderHund) {
    window.addEventListener("load", init);
    let address = "http://localhost:8100";
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("check").addEventListener("click", checkVolstaendig);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        bestellen(_event);
        berechnePreis(_event);
    }
    let bestellung = [];
    function bestellen(_event) {
        let target = _event.target;
        if (target.type == "checkbox" && target.checked) {
            document.getElementById("BestellungServer").innerHTML = "";
            let prodElement = document.createElement("div");
            document.getElementById("BestellungServer").appendChild(prodElement);
            bestellung.push(target.value);
            let wahl = `
            <p id="${target.id}">${bestellung}</p>`;
            prodElement.innerHTML = wahl;
        }
        if (target.name == "liefern") {
            document.getElementById("lieferung").innerHTML = "";
            let prodElement = document.createElement("div");
            document.getElementById("lieferung").appendChild(prodElement);
            let wahl2 = `
            <p id="${target.id}">${target.value}</p>`;
            prodElement.innerHTML = wahl2;
        }
        if (target.name == "behälter") {
            document.getElementById("behaelter").innerHTML = "";
            let prodElement = document.createElement("div");
            document.getElementById("behaelter").appendChild(prodElement);
            let wahl2 = `
            <p id="${target.id}">${target.value}</p>`;
            prodElement.innerHTML = wahl2;
        }
        if (target.type == "checkbox" && target.checked == false) {
            for (let u = 0; u < bestellung.length; u++) {
                if (bestellung[u] == target.value) {
                    document.getElementById("BestellungServer").innerHTML = "";
                    bestellung.splice(u, 1);
                    let prodElement = document.createElement("div");
                    document.getElementById("BestellungServer").appendChild(prodElement);
                    let gewählt = `
                    <p id="${target.id}">${bestellung}</p>`;
                    prodElement.innerHTML = gewählt;
                }
            }
        }
        console.log(bestellung);
    }
    let eis = [];
    let topping = [];
    let liefern = [];
    function berechnePreis(_event) {
        let currentEventtarget = _event.currentTarget;
        let target = _event.target;
        if (currentEventtarget.id == "eissorten" && target.checked) {
            eis.push(target.value);
            console.log(eis.length * 1.2);
        }
        if (currentEventtarget.id == "toppings" && target.checked) {
            topping.push(target.value);
            console.log(topping.length * 0.5);
        }
        if (target.id == "ja") {
            liefern.push(target.value);
            console.log(target);
        }
        if (target.id == "nein") {
            liefern = [];
        }
        if (target.checked == false) {
            for (let r = 0; r < eis.length; r++) {
                if (target.value == eis[r]) {
                    eis.splice(r, 1);
                }
            }
            for (let g = 0; g < topping.length; g++) {
                if (target.value == topping[g]) {
                    topping.splice(g, 1);
                }
            }
        }
        let PREISEIS = eis.length * 1.2;
        let PREISTOPPING = topping.length * 0.5;
        let LIEFERKOSTEN = liefern.length * 1;
        let prodElement = document.createElement("div");
        document.getElementById("rechnung").innerHTML = "";
        document.getElementById("rechnung").appendChild(prodElement);
        let ergebnis = `
            <p id="${target.id}">Preis: ${PREISEIS + PREISTOPPING + LIEFERKOSTEN} €</p>`;
        prodElement.innerHTML = ergebnis;
    }
    function checkVolstaendig() {
        let name = document.getElementById("name");
        let adresse = document.getElementById("adresse");
        let PLZ = document.getElementById("PLZ");
        let pruefen;
        if (name.value == "" || adresse.value == "" || PLZ.value == "") {
            document.getElementById("pruefeEinfuegen").innerHTML = "";
            pruefen = document.getElementById("pruefeEinfuegen");
            pruefen.innerHTML += "Bitte füllen sie die fehlenden Daten aus";
        }
        else {
            MarcelderHund.sendRequest();
        }
    }
})(MarcelderHund || (MarcelderHund = {}));
//# sourceMappingURL=main.js.map