/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/
const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) return [];
  return ids.map(elemento => data.animals.find(({id}) => (id === elemento)));
}

function animalsOlderThan(animal, idade) {
  const filterFunction = data.animals.find(({name}) => name === animal);
  return filterFunction.residents.every(({age}) => (age > idade));
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(({firstName, lastName}) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some(({managers}) => managers.some(arr => arr === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const obj = {};
  if (!species) {
    data.animals.forEach((element) => { (obj[element.name] = element.residents.length); });
    return obj;
  }
  return data.animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, value) =>
  (acc + (entrants[value] * data.prices[value])), 0);
}

function createAnimalLocation() {
  return data.animals.reduce((acc, {location,name}) => {
    if (acc[location]) (acc[location]).push(name);
    else acc[location] = [name];
    return acc
  },{});
}

function animalMap(options) {
  if (!options) return createAnimalLocation();
}

function schedule(dayName) {
  const objeto = {};
  const diaSemana = {};
  const obj = Object.entries(data.hours);
  obj.forEach((elemento) => {
    const values = Object.values(elemento[1]);
    objeto[elemento[0]] = `Open from ${values[0]}am until ${values[1] - 12}pm`;
  });
  objeto.Monday = 'CLOSED';
  diaSemana[dayName] = objeto[dayName];
  if (!dayName) return objeto;
  return diaSemana;
}

function oldestFromFirstSpecies(id) {
  const animalId = data.employees.find(elemento => elemento.id === id).responsibleFor[0];
  const oldestAnimal = data.animals.find(elemento =>
    elemento.id === animalId).residents.reduce((acc, value) => {
      if (value.age > acc.age) return value;
      return acc;
    });
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  Object.entries(data.prices).forEach((elemento) => {
    data.prices[elemento[0]] = parseFloat((elemento[1] * (1.0001 + (percentage / 100))).toFixed(2));
  });
  return data.prices;
}

// função que cria um array contendo nome e sobrenome e busca os animais pelos respectivos ID's
function reduceEmployeeCoverage(arr) {
  return arr.reduce((acc, value) => {
    acc[`${value.firstName} ${value.lastName}`] = value.responsibleFor.map(elemento =>
      data.animals.find(animal => animal.id === elemento).name);
    return acc;
  }, {});
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return reduceEmployeeCoverage(data.employees);
  }
  const newArray = [];
  const mapFunction = data.employees.find(({ firstName, lastName, id }) =>
    firstName === idOrName || lastName === idOrName || id === idOrName);
  newArray.push(mapFunction);
  return reduceEmployeeCoverage(newArray);
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
