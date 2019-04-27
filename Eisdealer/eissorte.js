var AssocEisSorten;
(function (AssocEisSorten) {
    // Beispieldaten auf Basis der oben angegebenen Strukturen
    AssocEisSorten.data = {
        "eis": {
            name: "Eissorten", value: 2, truth: true, inhalt: ["Nuss", "Banane", "Melone", "Schokolade", "Vanille", "Mocca", "Zitrone", "Erdbeere"]
        },
        "behaelter": {
            name: "Behälter", value: 1, truth: true, inhalt: ["Waffel", "Becher", "Auf die Hand"]
        },
        "topping": {
            name: "Toppings", value: 3, truth: false, inhalt: ["Schokostreusel", "Walnüsse", "Sahne", "Marmelade", "Maultaschen", "Krokant"]
        }
    };
    let darreichung;
    let eissorten;
    let toppings;
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        darreichung = document.getElementById("darreichung");
        behaelter();
        eissorten = document.getElementById("eissorten");
        eis();
        toppings = document.getElementById("toppings");
        topping();
    }
    function behaelter() {
        for (let i = 0; i < AssocEisSorten.data["behaelter"].inhalt.length; i++) {
            // Label zusammenbauen
            let label = document.createElement("label");
            label.setAttribute("for", AssocEisSorten.data["behaelter"].inhalt[i]);
            label.innerText = AssocEisSorten.data["behaelter"].inhalt[i];
            // Input-Element zusammenbauen
            let element = document.createElement("input");
            element.setAttribute("id", AssocEisSorten.data["behaelter"].inhalt[i]);
            element.setAttribute("type", "radio");
            element.setAttribute("name", "behälter");
            element.setAttribute("value", AssocEisSorten.data["behaelter"].inhalt[i]);
            // Elemente an DOM anhängen
            darreichung.appendChild(label);
            darreichung.appendChild(element);
        }
    }
    function eis() {
        for (let i = 0; i < AssocEisSorten.data["eis"].inhalt.length; i++) {
            // Label zusammenbauen
            let label = document.createElement("label");
            label.setAttribute("for", AssocEisSorten.data["eis"].inhalt[i]);
            label.innerText = AssocEisSorten.data["eis"].inhalt[i];
            // Input-Element zusammenbauen
            let element = document.createElement("input");
            element.setAttribute("id", AssocEisSorten.data["eis"].inhalt[i]);
            element.setAttribute("type", "checkbox");
            element.setAttribute("name", "eissorte");
            element.setAttribute("value", AssocEisSorten.data["eis"].inhalt[i]);
            // Elemente an DOM anhängen
            eissorten.appendChild(label);
            eissorten.appendChild(element);
        }
    }
    function topping() {
        for (let i = 0; i < AssocEisSorten.data["topping"].inhalt.length; i++) {
            // Label zusammenbauen
            let label = document.createElement("label");
            label.setAttribute("for", AssocEisSorten.data["topping"].inhalt[i]);
            label.innerText = AssocEisSorten.data["topping"].inhalt[i];
            // Input-Element zusammenbauen
            let element = document.createElement("input");
            element.setAttribute("id", AssocEisSorten.data["topping"].inhalt[i]);
            element.setAttribute("type", "checkbox");
            element.setAttribute("name", "zusatz");
            element.setAttribute("value", AssocEisSorten.data["topping"].inhalt[i]);
            // Elemente an DOM anhängen
            toppings.appendChild(label);
            toppings.appendChild(element);
        }
    }
})(AssocEisSorten || (AssocEisSorten = {}));
//# sourceMappingURL=eissorte.js.map