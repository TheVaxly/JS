const orders = ["Pasta", "Pizza", "Burger", 4, 5 ,6];

orders.forEach(function (order, i) {
    console.log(`${i + 1}: ${order}`);
});

for (let x of orders) {
    console.log(`${x} is a ${typeof x}`);
}

for (let x in orders) {
    console.log(`${x} is a ${typeof x}`);
}