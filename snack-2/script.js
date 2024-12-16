// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// 1 - Definisco un array di oggetti
const teams = [
    {
        teamName: 'Sampdoria',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Palermo',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Fiorentina',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Roma',
        points: 0,
        fouls: 0
    }
];

// 2 - ciclare sull'array e generare numeri randomici da assegnare alle proprietà points e fouls
for(let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.points = getRndInteger(0, 102);
    team.fouls = getRndInteger(0, 70);
}

// 3 - creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const teamsAndFouls = [];
for(let i = 0; i < teams.length; i++) {
    const {teamName, fouls} = teams[i];
    teamsAndFouls.push({
        teamName,
        fouls
    });
}
console.log(teamsAndFouls)


const person = {
    firstName: "Samuele",
    lastName: "Madrigali",
    age: 10
}

const person2 = {...person, age: 33}

console.log(person, person2)