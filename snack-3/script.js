// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

/**
 * Extract elements from array
 * 
 * @param {array} array 
 * @param {number} a start index
 * @param {number} b end index
 * @returns array
 */
function getElementsFromArray(array, a, b) {
    const arrayElements = [];

    // Validazione
    if(isNaN(a) || isNaN(b) || a < 0 || b < a || b > array.length - 1) {
        throw new Error("I dati inseriti non vanno bene");
    }

    for(let i = a; i <= b; i++) {
        arrayElements.push(array[i])
    }

    return arrayElements;
}

const result = getElementsFromArray(["Sampdoria", "Fiorentina", "Roma", "Lazio", "Milan", "Inter"], -1, 4)
console.log(result); // ["Roma", "Lazio", "Milan"]