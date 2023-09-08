const numbers1 = [17, 69, 1, 20];
const numbers2 = [];

for (let i = 1; i < 6; i++) {
    numbers2.push(Math.ceil(Math.random() * 100));
}

numbers2.forEach((number) =>{
    console.log(number);
});

numbers2.sort((x, y) => {
    return x - y;
});

console.log(numbers1);
console.log(numbers2);