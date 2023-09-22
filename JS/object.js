const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 50,
    email: 'john.doe@gmai.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Viljandi',
        state: 'Viljandimaa'
    },
    getBirthYear: function() {
        return 2023 - this.age;
    },
    showHobbies: function() {
        this.hobbies.forEach(function(hobby) {
            console.log(hobby);
        }
        );
    }, 
    showAddress: function() {
        for(addressKey in this.address) {
            console.log(this.address[addressKey]);
        }
    }
};

let val = person.firstname;
let val2 = person.lastname;
let val4 = person.address.city;
let val5 = person.getBirthYear();
person.showHobbies();
person.showAddress();

console.log(val, val2, val4, val5);