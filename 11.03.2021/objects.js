let person = {
    name : 'Johnathan',
    lastName : 'Doe',
    middleName : 'E.',
    currentAge : 32
};

console.log(person. name + " " + person.lastName);

let {
    name,
    lastName,
    middleName = '',
    currentAge : age = 18
} = person;

console.log(person.currentAge + " " + age);
console.log(person.middleName + " " + middleName);

//nested object destructruing 

let employee = {
    id: 1001,
    fullName : {
        firstName : 'Matthew',
        surName : 'Dolata'
    }
}

console.log(employee.id + " - " + employee.fullName.surName + " " + employee.fullName.firstName);

let employer = {
    id: 0,
    eName : 'Joseph',
    eSurName : 'Khagdilulia',
    fullNameDisplay : function(){
        return this.eName + " " + this.eSurName;
    }
}

console.log(employer.fullNameDisplay());