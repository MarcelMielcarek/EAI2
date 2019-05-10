namespace AssocEisSorten2 {
	// Heterogenes assoziatives Array mit vordefinierten Schlüsseln
	export interface Zutat {
		name: string;
		value: number;
		truth: boolean;
    }

    // Homogenes assoziatives Array mit variablen Schlüsseln, 
	// ein String wird abgebildet auf ein Array mit Objekten von obigen Typ 
	export interface Angebot {
        [key: string]: Zutats[];
        
	}



	// Beispieldaten auf Basis der oben angegebenen Strukturen
	export let data2: Angebot = {
		"eis": [
            {name: "Nuss", value: 1.2, truth: true},
            {name: "Banane", value: 1.2, truth: true},
            {name: "Melone", value: 1.2, truth: true},
            {name: "Schokolade", value: 1.2, truth: true},
            {name: "Vanille", value: 1.2, truth: true},
            {name: "Mocca", value: 1.2, truth: true},
            {name: "Zitrone", value: 1.2, truth: true},
            {name: "Erdbeere", value: 1.2, truth: true}
        ],
        "behaelter": [
            {name: "Waffel", value: 0, truth: true},
            {name: "Becher", value: 0, truth: true},
            {name: "Auf die Hand", value: 0, truth: true}
        ],
        "topping": [
            {name: "Schokostreusel", value: 3, truth: false},
            {name: "Walnüsse", value: 3, truth: false},
            {name: "Sahne", value: 3, truth: false},
            {name: "Marmelade", value: 3, truth: false},
            {name: "Maultaschen", value: 3, truth: false},
            {name: "Krokant", value: 3, truth: false}
        ]
    };

 let darreichung: HTMLElement;
 let eissorten: HTMLElement;
 let toppings: HTMLElement;

    
 document.addEventListener("DOMContentLoaded", init);

 function init(): void {
    darreichung = document.getElementById("darreichung");
    behaelter();
    eissorten = document.getElementById("eissorten");
    eis();
    toppings = document.getElementById("toppings");
    topping();

 }

function behaelter2 (): void {

    
}

 function behaelter (): void {
     for (let i: number = 0; i < data["behaelter"].inhalt.length; i++) {      
        // Label zusammenbauen
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", data["behaelter"].inhalt[i]);
        label.innerText = data["behaelter"].inhalt[i];

        // Input-Element zusammenbauen
        let element: HTMLInputElement = document.createElement("input");
        element.setAttribute("id", data["behaelter"].inhalt[i]);
        element.setAttribute("type", "radio");
        element.setAttribute("name", "behälter");
        element.setAttribute("value", data["behaelter"].inhalt[i]);

        // Elemente an DOM anhängen
        darreichung.appendChild(label);
        darreichung.appendChild(element);
     }
            
    }
 function eis (): void {
    for (let i: number = 0; i < data["eis"].inhalt.length; i++) {      
        // Label zusammenbauen
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", data["eis"].inhalt[i]);
        label.innerText = data["eis"].inhalt[i];

        // Input-Element zusammenbauen
        let element: HTMLInputElement = document.createElement("input");
        element.setAttribute("id", data["eis"].inhalt[i]);
        element.setAttribute("type", "checkbox");
        element.setAttribute("name", "eissorte");
        element.setAttribute("value", data["eis"].inhalt[i]);

        // Elemente an DOM anhängen
        eissorten.appendChild(label);
        eissorten.appendChild(element);
    }
            
    }
 function topping (): void {
        for (let i: number = 0; i < data["topping"].inhalt.length; i++) {      
            // Label zusammenbauen
            let label: HTMLElement = document.createElement("label");
            label.setAttribute("for", data["topping"].inhalt[i]);
            label.innerText = data["topping"].inhalt[i];
    
            // Input-Element zusammenbauen
            let element: HTMLInputElement = document.createElement("input");
            element.setAttribute("id", data["topping"].inhalt[i]);
            element.setAttribute("type", "checkbox");
            element.setAttribute("name", "zusatz");
            element.setAttribute("value", data["topping"].inhalt[i]);
    
            // Elemente an DOM anhängen
            toppings.appendChild(label);
            toppings.appendChild(element);
        }
                
        }

}
