class Person{
    constructor(_name){
        this.name = _name;
    }
    getName(){
        return this.name;
    }
}

let Peter = new Person('Peter');

let displayName = Peter.getName();

console.log(displayName);
console.log(typeof Person);

//Peter is an instance of the Person and Object types


//Singleton 


let app = new class {
    constructor(_firstName){
        this.firstName = _firstName;
    }
    start(){
        console.log(`Starting the ${this.firstName}...`);
    }
}('Awesome App');

app.start();