// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// 1 - Creare un array di oggetti (bici da corsa)
const bikes = [
    {
        brandName: "Bianchi",
        weight: 1500
    },
    {
        brandName: "Pinarello",
        weight: 700
    },
    {
        brandName: "Guerciotti",
        weight: 4000
    }
];

// 2 - ciclo sull'array di oggetti
let bike = bikes[0]

for(let i = 1; i < bikes.length; i++) {
    if(bikes[i].weight < bike.weight ) {
        bike = bikes[i];
    }
}

console.log(bike);