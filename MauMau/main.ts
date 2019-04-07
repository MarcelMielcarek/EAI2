interface Card {
    value: string;
    color: string;
}

let cards: Card[] = [
    { value: "7", color: "Karo" }, { value: "8", color: "Karo" }, { value: "9", color: "Karo" }, { value: "10", color: "Karo" }, { value: "Bube", color: "Karo" }, { value: "Dame", color: "Karo" }, { value: "Koenig", color: "Karo" }, { value: "As", color: "Karo" },
    { value: "7", color: "Pik" }, { value: "8", color: "Pik" }, { value: "9", color: "Pik" }, { value: "10", color: "Pik" }, { value: "Bube", color: "Pik" }, { value: "Dame", color: "Pik" }, { value: "Koenig", color: "Pik" }, { value: "As", color: "Pik" },
    { value: "7", color: "Kreuz" }, { value: "8", color: "Kreuz" }, { value: "9", color: "Kreuz" }, { value: "10", color: "Kreuz" }, { value: "Bube", color: "Kreuz" }, { value: "Dame", color: "Kreuz" }, { value: "Koenig", color: "Kreuz" }, { value: "As", color: "Kreuz" },
    { value: "7", color: "Herz" }, { value: "8", color: "Herz" }, { value: "9", color: "Herz" }, { value: "10", color: "Herz" }, { value: "Bube", color: "Herz" }, { value: "Dame", color: "Herz" }, { value: "Koenig", color: "Herz" }, { value: "As", color: "Herz" }
];
// console.table(cards);
let hand: Card[] = [];

document.addEventListener("DOMContentLoaded", function(): void {
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

});

function verteilen(_eingabe: number): void {
    for (let i: number = 0; i < _eingabe; i++) {
        let index: number = Math.floor(Math.random() * cards.length);
        let card: Card = cards[index];
        hand.push(card);
        cards.splice(index, 1);
    }
    console.table(hand);
}

function anzeigen(): void {
    for (let i: number = 0; i < hand.length; i++) {
        // Karte erstellen
        let card: HTMLElement = document.createElement("div");
        card.innerText = hand[i].color + " " + hand[i].value;
        card.setAttribute("class", "cards");
        // Karte dem DOM Tree hinzufügen
        document.getElementById("hand").appendChild(card);
    }
}