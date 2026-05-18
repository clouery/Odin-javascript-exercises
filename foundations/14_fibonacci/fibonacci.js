const fibonacci = ( (index) => {
    if (index < 0) return "OOPS";
    let n1 = 0;
    let n2 = 1;
    for( let i = 0; i < index; i++){
        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return n1;
});

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
