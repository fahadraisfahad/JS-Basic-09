const person = {
    name: "Ali",
    age: 30,
    occupation: "Engineer"
};

for (const key in person) {
    console.log(`Property: ${key}, Value: ${person[key]}`);
}
