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

console.log("-------")

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function jouer(){
    let nombreRandom = getRandomInt(3) + 1
    let demande = Number(prompt("Entre un nombre entre 1 et 3 : "))

    if (demande === nombreRandom) {
        console.log("Nombre bon")
    } else{
        console.log("Mauvais nombre")
        jouer()
    }
}

// jouer()

console.log("-------")

function jouer2(){
    let nombreRandom = getRandomInt(10) + 10
    let demande = Number(prompt("Entre un nombre entre 10 et 20 : "))

    console.log(nombreRandom)
    console.log(demande)

    if (demande > 20) {
        console.log("Plus petit !")
    } if(demande < 10) {
        console.log("Plus grand !")
    } if (demande === nombreRandom) {
        console.log("Nombre bon")
    } else{
        console.log("Mauvais nombre")
        jouer2()
    }
}

// jouer2()

console.log("-------")

// let chiffreDix = Number(prompt("Ecrit un chiffre : "))

// for (let i = chiffreDix; i < chiffreDix+11; i++) {
//     console.log(i)
// }

console.log("-------")

// let demandeMulti = Number(prompt("Un chiffre pour la table : "))
// for (let i = 1; i <= 10; i++) {
//     console.log(demandeMulti + " x " + i + " = " + demandeMulti*i)
// }

console.log("-------")

// let demandeSomme = Number(prompt("Un chiffre pour la somme : "))
let somme = 0
let messageSomme = ""

// for (let i = 1; i < demandeSomme+1; i++) {
//     somme += i
//     if (i != 1) {
//         messageSomme += " + " + i
//     } else{
//         messageSomme += i
//     }

// }
console.log(messageSomme + " = " + somme)
console.log("-------")

// let demandeFacto = Number(prompt("Un chiffre pour la somme : "))
// let facto = 1
// let messageFacto = ""

// for (let i = 1; i < demandeFacto+1; i++) {
//     facto *= i
//     if (i != 1) {
//         messageFacto += " x " + i
//     } else{
//         messageFacto += i
//     }

// }
// console.log(messageFacto + " = " + facto)


console.log("-------")

let demande = []
let plusGrand = 0

// for (let i = 1; i < 11; i++) {
//     demande[i] = Number(prompt("Entrez le nombre " + i + ": "))
// }


// for (const nombre of demande) {
//     if (nombre > plusGrand) {
//         plusGrand = nombre
//     }
//     console.log("Le nombre le plus grand est : " + plusGrand)
// }

console.log("-------")

let demandeFin = []
let plusGrandFin = 0

function jouer3() {
    let nombre = Number(prompt("Entrez le nombre : "))

    if (nombre !== 0) {
        demandeFin.push(nombre)
        jouer3()
    } else {
        for (const nombre of demandeFin) {
            if (nombre > plusGrandFin) {
                plusGrandFin = nombre
            }
        }
        console.log("Le nombre le plus grand est : " + plusGrandFin)
    }
}
jouer3()