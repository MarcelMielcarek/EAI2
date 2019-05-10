namespace MarcelderHund {
	// Heterogenes assoziatives Array mit vordefinierten Schlüsseln
	export interface Zutat {
		name: string;
		value: number;
		truth: boolean;
		inhalt: string[];
    }
    
    // Homogenes assoziatives Array mit variablen Schlüsseln, 
	// ein String wird abgebildet auf ein Array mit Objekten von obigen Typ 
	export interface Angebot {
        [key: string]: Zutat;
        
	}



	// Beispieldaten auf Basis der oben angegebenen Strukturen
	export let data: Angebot = {
		"eis": {
			name: "Eissorten", value: 2, truth: true, inhalt: ["Nuss", "Banane", "Melone", "Schokolade", "Vanille", "Mocca", "Zitrone", "Erdbeere" ]
        },
        "behaelter": {
            name: "Behälter", value: 1, truth: true, inhalt: ["Waffel", "Becher", "Auf die Hand"]
        },
        "topping": {
            name: "Toppings", value: 3, truth: false, inhalt: ["Schokostreusel", "Walnüsse", "Sahne", "Marmelade", "Maultaschen", "Krokant"] 
        }
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