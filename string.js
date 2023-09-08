const firstname = 'Marten';
const lastname = 'Uiboupin';

let result = 'Hello there my name is ' + firstname + ' ' + lastname;

result = lastname.substring(0, 4)
result = lastname.slice(0, 4);
result = lastname.slice(-3);
console.log(result);