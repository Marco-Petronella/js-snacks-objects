/*snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bicycleList = document.getElementById("bicycle-list");
const bicycles = [
  { nome: "Colnago", peso: 3 },
  { nome: "Bianchi", peso: 2 },
  { nome: "Trek", peso: 4 },
  { nome: "Giant", peso: 5 },
  { nome: "Ducati", peso: 7 },
];


populateBicycleList();

function populateBicycleList() {
  for (let i = 0; i < bicycles.length; i++) {
    bicycleList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${bicycles[i].nome}<span>${bicycles[i].peso}Kg</span></li>`;
  }
}
