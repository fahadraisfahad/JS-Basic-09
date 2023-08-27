// Shallow Copy Example
// let original = { a: 5, b: { c: 5 } };
// let shallowCopy = { ...original };

// original.b.c = 10; 

// console.log(shallowCopy.b.c); 


// Deep Copy Example
// function deepCopy(obj) {
//     return {...obj};
// }


// const original = {
//     a: 1,
//     b: {
//         c: 2,
//         d: [3, 4]
//     }
// };

// const deepCopied = deepCopy(original);

// original.b.c = 5;
// original.b.d[0] = 6;

// console.log(deepCopied.b.c); 
// console.log(deepCopied.b.d[0]); 


// Reference Copy Example
const original = { a: 1, b: { c: 2 } };
const referenceCopy = original;

original.b.c = 3;

console.log(referenceCopy.b.c); 
