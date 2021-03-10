let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

//Find those cities, where population is greater than 3 milion

let big_cities = [];

for(let i = 0;i<cities.length;i++){
    if(cities[i].population > 3000000){
        big_cities.push(cities[i]);
    }
}

//console.table(big_cities);

//By filters

const bigCities = cities.filter(city => city.population >3000000);

console.table(bigCities);