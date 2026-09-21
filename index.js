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
let tableLettre = []

for (const lettre of phrase) {
    if (tableLettre.includes(lettre)) {
        
    } else {
        tableLettre.push(lettre)
    }
    console.log(tableLettre)
}