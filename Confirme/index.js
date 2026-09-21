let message = ""

for (let i = 0; i < 5; i++) {
    message += "*"
    console.log(message)
}

console.log("-------")

let superHeros = ["Hulk", "Superman", "IronMan", "MOI (narcissique de m*rde)"]

superHeros.forEach(element => {
    console.log("Je suis fan de " + element)
});

console.log("-------")

let i = 10
while (i >= 0) {
    console.log(i)
    i -= 1
}
console.log("Décollage !")
console.log("-------")

let nom = ["Ben", "Clem", "Toto"]
let place = 0
let phraseNom = ""

for (const personne of nom) {
    place += 1
    for (let i = 0; i < place; i++) {
        phraseNom += String(personne) + " "
    }
    console.log(phraseNom)
    phraseNom = ""
}

