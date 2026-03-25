/*snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bicycleList = document.getElementById("bicycle-list");
const lighterBicycleName = document.getElementById("lighter-bicycle-name");
const lighterBicycleWeight = document.getElementById("lighter-bicycle-weight");
const bicycles = [
  { nome: "Colnago", peso: 3 },
  { nome: "Bianchi", peso: 2 },
  { nome: "Trek", peso: 4 },
  { nome: "Giant", peso: 5 },
  { nome: "Ducati", peso: 7 },
];

populateBicycleList();
lighterBicycleCheck();
function populateBicycleList() {
  for (let i = 0; i < bicycles.length; i++) {
    bicycleList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${bicycles[i].nome}<span>${bicycles[i].peso}Kg</span></li>`;
  }
}

function lighterBicycleCheck() {
  let lessWeightBicycle = bicycles[0];
  for (let i = 0; i < bicycles.length; i++) {
    if (bicycles[i].peso < lessWeightBicycle.peso)
      lessWeightBicycle=bicycles[i];
    }
  lighterBicycleName.innerHTML = lessWeightBicycle.nome;
  lighterBicycleWeight.innerHTML = "con i suoi " + lessWeightBicycle.peso + "Kg";
}

/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console.*/

const footballTeams = [
  { nome: "Milan" },
  { nome: "Juventus" },
  { nome: "Inter" },
  { nome: "Roma" },
  { nome: "Napoli" },
  { nome: "Fiorentina" },
  { nome: "Pizzighettone" },
];
compileFootballTeamsArray()
const footballTeamsAndFouls = [];
generateArrayFootballTeamsAndFouls();
printFootballArray()

function compileFootballTeamsArray() {
    for (let i=0; i<footballTeams.length;i++) {
        footballTeams[i].point = getRandomNumber(100);
        footballTeams[i].fouls = getRandomNumber(20);
    }
}
function getRandomNumber(max) {
  return Math.floor((Math.random()*max))
}
function generateArrayFootballTeamsAndFouls() {
    for (let i=0; i<footballTeams.length;i++) {
        footballTeamsAndFouls.push({
        nome: footballTeams[i].nome,
        fouls: footballTeams[i].fouls
    })
    }
}
function printFootballArray() {
    console.log(footballTeams);

    console.log(footballTeamsAndFouls);
    
}