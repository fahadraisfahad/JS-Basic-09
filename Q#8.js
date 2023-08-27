const numbers = [0,1,2,3,4,5,6,7,8,9,10,11];

for (const num of numbers) {
    const parity = num % 2 === 0 ? 'even' : 'odd';
    console.log(`${num} is ${parity}`);
}
