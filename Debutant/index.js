console.log("Hello, Word !")
console.log("Bienvenue dans le monde de la programmation !")

let nombre1 = 5
let nombre2 = 10

console.log(nombre1 + nombre2)

console.log("-----------")

let tableFruit = ["pomme", "banane", "cerise"]
for (fruit of tableFruit){
    console.log(fruit)
}

console.log("-----------")


for (let i = 1; i < 20 + 1; i++) {
    if (i%2 == 0){
        console.log(i)
    }
}

console.log("-----------")

const mot = "Salut"
let voyelles = "aeiou"
let nombreVoyelles = 0

for (const lettre of mot) {
    if (voyelles.includes(lettre)) {
        nombreVoyelles += 1
    }
}
console.log(nombreVoyelles)
console.log("-----------")

const phrase = "Salut comment ca va"
let tableLettre = {}

for (const lettre of phrase) {
    if (tableLettre[lettre]) {
        tableLettre[lettre]++
    } else {
        tableLettre[lettre] = 1
    }
}
console.log(tableLettre)
console.log("-----------")

let tableau = [2, -3, 6, 9, -10, -5, 30, -152.6]
let positifs = []
let negatifs = []

for (const chiffre of tableau) {
    if (chiffre > 0) {
        positifs.push(chiffre)
    } else{
        negatifs.push(chiffre)
    }    
}

console.log(positifs, negatifs)
console.log("-----------")

let listeNombres = [1, 6, 5, 10, 8, 62]
let plusGrand = []

for (const chiffre of listeNombres) {
    if (chiffre > plusGrand) {
        plusGrand.pop()
        plusGrand.push(chiffre)
    }
}
console.log(plusGrand)
console.log("-----------")

let motInversable = "Bonjour"
let inverse = []

for (const element of motInversable) {
    inverse.push(element)
}
inverse = inverse.toReversed()
inverse = inverse.toString()

console.log(inverse)