function greetUser() {
    let eingabe = prompt("Hey! Wer bist denn du?");
    if (eingabe != null) {
        document.getElementById("Hi").innerHTML =
            "Servus " + eingabe + "!";
        console.log("Servus " + eingabe + "!");
    }
}
//# sourceMappingURL=Greeter.js.map