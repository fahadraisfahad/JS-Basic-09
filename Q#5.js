function outer(a) {
   
    function inner(b) {
        return a + b; 
    }

    return inner; 
}

const closure = outer(20); 
const output = closure(10); 
console.log(output); 
