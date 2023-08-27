// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of numbers) {
//     if (num === 3) {
//         console.log("break when 2 is found");
//         break;
//     }
//     console.log(num);
// }


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of numbers) {
    if (num % 2 === 0) {
        continue;
    }
    console.log(num);
}
