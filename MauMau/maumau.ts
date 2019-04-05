function greetUser(): void {
    let eingabe: string = prompt("Wie viele Karten?");
    if (eingabe != null) {
        document.getElementById("Hi").innerHTML =
            "Servus " + eingabe + "!";
        console.log("Servus " + eingabe + "!");
    }
}  