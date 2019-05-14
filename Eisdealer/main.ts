namespace MarcelderHund {

    window.addEventListener("load", init);
    let address: string = "http://localhost:8100";

    function init(_event: Event): void {
        
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("check").addEventListener("click", checkVolstaendig);

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        bestellen(_event);
        berechnePreis(_event);
    }

    let bestellung: String[] = [];

    function bestellen(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        
        if (target.type == "checkbox" && target.checked) {

            document.getElementById("BestellungServer").innerHTML = "";
            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("BestellungServer").appendChild(prodElement);
            bestellung.push(target.value);
            let wahl: string = `
            <p id="${target.id}">${bestellung}</p>`;
            prodElement.innerHTML = wahl;
        }

        if (target.name == "liefern") {
            document.getElementById("lieferung").innerHTML = "";
            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("lieferung").appendChild(prodElement);
            let wahl2: string = `
            <p id="${target.id}">${target.value}</p>`;
            prodElement.innerHTML = wahl2;
        }

        if (target.name == "behälter") {
            document.getElementById("behaelter").innerHTML = "";
            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("behaelter").appendChild(prodElement);
            let wahl2: string = `
            <p id="${target.id}">${target.value}</p>`;
            prodElement.innerHTML = wahl2;
        }

        if (target.type == "checkbox" && target.checked == false) {

            for (let u: number = 0; u < bestellung.length; u++) {
                if (bestellung[u] == target.value) {
                    document.getElementById("BestellungServer").innerHTML = "";
                    bestellung.splice(u, 1);
                    let prodElement: HTMLDivElement = document.createElement("div");
                    document.getElementById("BestellungServer").appendChild(prodElement);
                    let gewählt: string = `
                    <p id="${target.id}">${bestellung}</p>`;
                    prodElement.innerHTML = gewählt;
                }
            }
        }
        console.log(bestellung);
    }

    let eis: string[] = [];
    let topping: string[] = [];
    let liefern: string[] = [];

    function berechnePreis(_event: Event): void {
        let currentEventtarget: HTMLInputElement = <HTMLInputElement>_event.currentTarget;
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

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
            liefern = [] ;
        }

        if (target.checked == false) {
            for (let r: number = 0; r < eis.length; r++) {
                if (target.value == eis[r]) {
                    eis.splice(r, 1);
                }
            }
            for (let g: number = 0; g < topping.length; g++) {
                if (target.value == topping[g]) {
                    topping.splice(g, 1);
                }
            }
        }

        let PREISEIS: number = eis.length * 1.2;
        let PREISTOPPING: number = topping.length * 0.5;
        let LIEFERKOSTEN: number = liefern.length * 1;

        let prodElement: HTMLDivElement = document.createElement("div");

        document.getElementById("rechnung").innerHTML = "";
        document.getElementById("rechnung").appendChild(prodElement);

        let ergebnis: string = `
            <p id="${target.id}">Preis: ${PREISEIS + PREISTOPPING + LIEFERKOSTEN} €</p>`;
        prodElement.innerHTML = ergebnis;
    }

    function checkVolstaendig(): void {

        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let adresse: HTMLInputElement = <HTMLInputElement>document.getElementById("adresse");
        let PLZ: HTMLInputElement = <HTMLInputElement>document.getElementById("PLZ");

        let pruefen: HTMLElement;

        if (name.value == "" || adresse.value == "" ||  PLZ.value == "" ) {
                document.getElementById("pruefeEinfuegen").innerHTML = "";
                pruefen = document.getElementById("pruefeEinfuegen");
                pruefen.innerHTML += "Bitte füllen sie die fehlenden Daten aus";
            }
            
            else {
                 sendRequest();
        } 
        
    




}}