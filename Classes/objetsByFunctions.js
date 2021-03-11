function createAnimal(_name, _type, _weight){
    this.name = _name;
    this.type = _type;
    this.weight = _weight;
    this.identify = function(){
        return this.name + " " + this.type + " " + this.weight;
    }
}


const pig = new createAnimal("peppa-pig", "pig", "80lbs");

console.log(pig.identify());
console.log(pig.constructor === createAnimal);