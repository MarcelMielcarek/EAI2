let cards = [
    { value: "7", color: "Herz", position: "aa", id: 1 }, { value: "8", color: "Herz", position: "ab", id: 2 }, { value: "9", color: "Herz", position: "ac", id: 3 }, { value: "10", color: "Herz", position: "ad", id: 4 }, { value: "Bube", color: "Herz", position: "ae", id: 5 }, { value: "Dame", color: "Herz", position: "af", id: 6 }, { value: "Koenig", color: "Herz", position: "ag", id: 7 }, { value: "As", color: "Herz", position: "ah", id: 8 },
    { value: "7", color: "Kreuz", position: "ai", id: 9 }, { value: "8", color: "Kreuz", position: "aj", id: 10 }, { value: "9", color: "Kreuz", position: "ak", id: 11 }, { value: "10", color: "Kreuz", position: "al", id: 12 }, { value: "Bube", color: "Kreuz", position: "am", id: 13 }, { value: "Dame", color: "Kreuz", position: "an", id: 14 }, { value: "Koenig", color: "Kreuz", position: "ao", id: 15 }, { value: "As", color: "Kreuz", position: "ap", id: 16 },
    { value: "7", color: "Karo", position: "aq", id: 17 }, { value: "8", color: "Karo", position: "ar", id: 18 }, { value: "9", color: "Karo", position: "as", id: 19 }, { value: "10", color: "Karo", position: "at", id: 20 }, { value: "Bube", color: "Karo", position: "au", id: 21 }, { value: "Dame", color: "Karo", position: "av", id: 22 }, { value: "Koenig", color: "Karo", position: "aw", id: 23 }, { value: "As", color: "Karo", position: "ax", id: 24 },
    { value: "7", color: "Pik", position: "ay", id: 25 }, { value: "8", color: "Pik", position: "az", id: 26 }, { value: "9", color: "Pik", position: "ba", id: 27 }, { value: "10", color: "Pik", position: "bb", id: 28 }, { value: "Bube", color: "Pik", position: "bc", id: 29 }, { value: "Dame", color: "Pik", position: "bd", id: 30 }, { value: "Koenig", color: "Pik", position: "be", id: 31 }, { value: "As", color: "Pik", position: "bf", id: 32 }
];
// console.table(cards);
let hand = [];
let spielfeld = [];
document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("kartenSortieren").addEventListener("click", sortieren);
    document.getElementById("stapel").addEventListener("click", addieren);
    console.log("los");
    // Nutzereingabe Kartenanzahl
    let eingabe = parseInt(prompt("Wie viele Karten?", "4-9"));
    if (eingabe > 9)
        eingabe = 9;
    if (eingabe < 4)
        eingabe = 4;
    // Karten verteilen
    verteilen(eingabe);
    // Karten anzeigen
    anzeigen();
}
function verteilen(_eingabe) {
    for (let i = 0; i < _eingabe; i++) {
        let index = Math.floor(Math.random() * cards.length);
        let card = cards[index];
        hand.push(card);
        cards.splice(index, 1);
    }
    console.table(hand);
}
function addieren() {
    let i = 1;
    let index = Math.floor(Math.random() * cards.length);
    let card = cards[index];
    hand.push(card);
    cards.splice(index, 1);
    console.log("123");
    let cardx = document.createElement("div");
    cardx.innerText = hand[i].color + " " + hand[i].value;
    cardx.setAttribute("class", "cards");
    cardx.setAttribute("id", "card" + i + hand.length);
    // Karte dem DOM Tree hinzufügen
    document.getElementById("hand").appendChild(cardx);
}
function anzeigen() {
    console.log("yay");
    for (let i = 0; i < hand.length; i++) {
        // Karte erstellen
        let card = document.createElement("div");
        card.innerText = hand[i].color + " " + hand[i].value;
        card.setAttribute("class", "cards");
        card.setAttribute("id", "card" + i);
        // Karte dem DOM Tree hinzufügen
        document.getElementById("hand").appendChild(card);
    }
}
function sortieren() {
    console.log("tadaaaa");
    let sortHand = [];
    for (let i = 0; i <= hand.length; i++) {
        let card = cards[i];
        let cardPosition = hand[i].position;
        sortHand.push(cardPosition);
        console.log(sortHand);
    }
    // sortHand.sort();
    console.log("irgendwas");
}
function karteAblegen(_event) {
    let domCard = _event.target;
    console.log(domCard);
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].id == Number(domCard.id)) {
            console.log(hand[i].id);
            spielfeld.push(hand[i]);
            hand.splice(i, 1);
            anzeigen();
        }
    }
}
/*  let cardPosition: number = hand[i].position;
let card: Card = cards[i];
let posControl: number = 1;

for (let n: number = 0; n < 32; n++) {
console.log ("hier hast du deine Position" + cardPosition);
if (cardPosition == posControl) {
   hand.push(card);
    console.log (cardPosition + "...bliblablups" + posControl);
}
else {
    console.log ("mach nichts");
}
n++;
posControl++; */
// console.log ("irgendwas");
//# sourceMappingURL=main.js.map