var AssocEisSorten2;
(function (AssocEisSorten2) {
    // Beispieldaten auf Basis der oben angegebenen Strukturen
    AssocEisSorten2.data2 = {
        "eis": [
            { name: "Nuss", value: 1.2, truth: true },
            { name: "Banane", value: 1.2, truth: true },
            { name: "Melone", value: 1.2, truth: true },
            { name: "Schokolade", value: 1.2, truth: true },
            { name: "Vanille", value: 1.2, truth: true },
            { name: "Mocca", value: 1.2, truth: true },
            { name: "Zitrone", value: 1.2, truth: true },
            { name: "Erdbeere", value: 1.2, truth: true }
        ],
        "behaelter": [
            { name: "Waffel", value: 0, truth: true },
            { name: "Becher", value: 0, truth: true },
            { name: "Auf die Hand", value: 0, truth: true }
        ],
        "topping": [
            { name: "Schokostreusel", value: 3, truth: false },
            { name: "Walnüsse", value: 3, truth: false },
            { name: "Sahne", value: 3, truth: false },
            { name: "Marmelade", value: 3, truth: false },
            { name: "Maultaschen", value: 3, truth: false },
            { name: "Krokant", value: 3, truth: false }
        ]
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
    function behaelter2() {
    }
    function behaelter() {
        for (let i = 0; i < data["behaelter"].inhalt.length; i++) {
            // Label zusammenbauen
            let label = document.createElement("label");
            label.setAttribute("for", data["behaelter"].inhalt[i]);
            label.innerText = data["behaelter"].inhalt[i];
            // Input-Element zusammenbauen
            let element = document.createElement("input");
            element.setAttribute("id", data["behaelter"].inhalt[i]);
            element.setAttribute("type", "radio");
            element.setAttribute("name", "behälter");
            element.setAttribute("value", data["behaelter"].inhalt[i]);
            // Elemente an DOM anhängen
            darreichung.appendChild(label);
            darreichung.appendChild(element);
        }
    }
    function eis() {
        for (let i = 0; i < data["eis"].inhalt.length; i++) {
            // Label zusammenbauen
            let label = document.createElement("label");
            label.setAttribute("for", data["eis"].inhalt[i]);
            label.innerText = data["eis"].inhalt[i];
            // Input-Element zusammenbauen
            let element = document.createElement("input");
            element.setAttribute("id", data["eis"].inhalt[i]);
            element.setAttribute("type", "checkbox");
            element.setAttribute("name", "eissorte");
            element.setAttribute("value", data["eis"].inhalt[i]);
            // Elemente an DOM anhängen
            eissorten.appendChild(label);
            eissorten.appendChild(element);
        }
    }
    function topping() {
        for (let i = 0; i < data["topping"].inhalt.length; i++) {
            // Label zusammenbauen
            let label = document.createElement("label");
            label.setAttribute("for", data["topping"].inhalt[i]);
            label.innerText = data["topping"].inhalt[i];
            // Input-Element zusammenbauen
            let element = document.createElement("input");
            element.setAttribute("id", data["topping"].inhalt[i]);
            element.setAttribute("type", "checkbox");
            element.setAttribute("name", "zusatz");
            element.setAttribute("value", data["topping"].inhalt[i]);
            // Elemente an DOM anhängen
            toppings.appendChild(label);
            toppings.appendChild(element);
        }
    }
})(AssocEisSorten2 || (AssocEisSorten2 = {}));
//# sourceMappingURL=eissorteBanane.js.map