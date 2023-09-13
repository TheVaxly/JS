const firstname = 'Marten';
const lastname = 'Uiboupin';
const number = 1234;

let result = 'Hello there my name is ' + firstname + ' ' + lastname;

result = lastname.substring(0, 4)
result = lastname.slice(0, 4);
result = lastname.slice(-3);
num = number.toString();
num2 = num.slice(-2);
console.log(num2);
console.log(result);