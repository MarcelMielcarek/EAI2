interface Card {
    value: string;
    color: string;
    position: string;
    id: number;
}

let cards: Card[] = [
    { value: "7", color: "Herz", position: "aa", id: 1 }, { value: "8", color: "Herz", position: "ab", id: 2 }, { value: "9", color: "Herz", position: "ac", id: 3 }, { value: "10", color: "Herz", position: "ad", id: 4 }, { value: "Bube", color: "Herz", position: "ae", id: 5 }, { value: "Dame", color: "Herz", position: "af", id: 6 }, { value: "Koenig", color: "Herz", position: "ag", id: 7 }, { value: "As", color: "Herz", position: "ah", id: 8 },
    { value: "7", color: "Kreuz", position: "ai", id: 9 }, { value: "8", color: "Kreuz", position: "aj", id: 10 }, { value: "9", color: "Kreuz", position: "ak", id: 11 }, { value: "10", color: "Kreuz", position: "al", id: 12 }, { value: "Bube", color: "Kreuz", position: "am", id: 13 }, { value: "Dame", color: "Kreuz", position: "an", id: 14 }, { value: "Koenig", color: "Kreuz", position: "ao", id: 15 }, { value: "As", color: "Kreuz", position: "ap", id: 16 },   
    { value: "7", color: "Karo", position: "aq", id: 17 }, { value: "8", color: "Karo", position: "ar", id: 18 }, { value: "9", color: "Karo", position: "as", id: 19 }, { value: "10", color: "Karo", position: "at", id: 20 }, { value: "Bube", color: "Karo", position: "au", id: 21 }, { value: "Dame", color: "Karo", position: "av", id: 22 }, { value: "Koenig", color: "Karo", position: "aw", id: 23  }, { value: "As", color: "Karo", position: "ax", id: 24 },
    { value: "7", color: "Pik", position: "ay", id: 25 }, { value: "8", color: "Pik", position: "az", id: 26 }, { value: "9", color: "Pik", position: "ba", id: 27 }, { value: "10", color: "Pik", position: "bb", id: 28 }, { value: "Bube", color: "Pik", position: "bc", id: 29}, { value: "Dame", color: "Pik", position: "bd", id: 30 }, { value: "Koenig", color: "Pik", position: "be", id: 31 }, { value: "As", color: "Pik", position: "bf" , id: 32}
     
];
// console.table(cards);
let hand: Card[] = [];
let spielfeld: Card[] = [];

document.addEventListener("DOMContentLoaded", init);

function init(): void {
    document.getElementById("kartenSortieren").addEventListener("click", sortieren);
    document.getElementById("stapel").addEventListener("click", addieren);
    document.getElementById("hand").addEventListener("click", karteAblegen);
    document.addEventListener("keydown", spacebar);
    
    console.log ("los");
    // Nutzereingabe Kartenanzahl
    let eingabe: number = parseInt(prompt("Wie viele Karten?", "4-9"));
    if (eingabe > 9)
        eingabe = 9;

    if (eingabe < 4)
        eingabe = 4;

    // Karten verteilen
    verteilen(eingabe);

    // Karten anzeigen
    anzeigen();

}

function verteilen(_eingabe: number): void {
    for (let i: number = 0; i < _eingabe; i++) {
        let index: number = Math.floor(Math.random() * cards.length);
        let card: Card = cards[index];
        cards.splice(index, 1);
        hand.push(card);
    }
    
    console.table(hand);
}
function addieren(): void {
    // let i: number = 1;
    let index: number = Math.floor(Math.random() * cards.length);
    let card: Card = cards[index];
    hand.push(card);
    cards.splice(index, 1);

    let cardx: HTMLElement = document.createElement("div");
    cardx.innerText = hand[hand.length - 1].color + " " + hand[hand.length - 1].value;
    cardx.setAttribute("class", "cards");
    cardx.setAttribute("id", "" + hand[hand.length - 1].id);
    // Karte dem DOM Tree hinzufügen
    document.getElementById("hand").appendChild(cardx);
    console.log(index);
}

function anzeigen(): void {
    document.getElementById("hand").innerHTML = "";
    for (let i: number = 0; i < hand.length; i++) {
        // Karte erstellen
        let card: HTMLElement = document.createElement("div");
        card.innerText = hand[i].color + " " + hand[i].value;
        card.setAttribute("class", "cards");
        card.setAttribute("id", "" + hand[i].id);
        // Karte dem DOM Tree hinzufügen
        document.getElementById("hand").appendChild(card);
    }
}

function anzeigenSpielfeld(): void {
    console.log ("yay");
    document.getElementById("spielfeld").innerHTML = "";
    let i: number = 0; 
        // Karte erstellen
    let card: HTMLElement = document.createElement("div");
    card.innerText = spielfeld[i].color + " " + spielfeld[i].value;
    card.setAttribute("class", "cards");
    card.setAttribute("id", "" + spielfeld[i].id);
        // Karte dem DOM Tree hinzufügen
    document.getElementById("spielfeld").appendChild(card);
    spielfeld.splice(i, 1);
    
}

function sortieren(): void {
    hand.sort(compareFunction);
    anzeigen();
}
function compareFunction(a: Card, b: Card): number {
    if (a.position < b.position)
        return -1;
    
    if (a.position > b.position)
        return 1;

    return 0;
} 

function spacebar(_event: KeyboardEvent): void {
    if (_event.code == "Space") {
        _event.preventDefault();
        addieren();
    }
}

function karteAblegen(_event: Event): void {
    console.log("es tut");
    let domCard: HTMLElement = <HTMLElement>_event.target;
    
    for (let i: number = 0; i < hand.length; i++) {
    console.log(hand[i].id + domCard.id);
    console.log(domCard);
    if (hand[i].id == Number(domCard.id)) {
    console.log ("spaß" + spielfeld + " " + hand);
    
    spielfeld.push(hand[i]);
    hand.splice(i, 1);
    anzeigenSpielfeld();
    anzeigen();
}
        
        }
        
    }