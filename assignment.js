'use strict'

function isKaprekar(n) {
    
    const square = (n * n).toString();
    const digit = n.toString().length; 
    

    const rightPart = parseInt(square.slice(-d)) || 0;  
    const leftPart = parseInt(square.slice(0, square.length - digit)) || 0;  
    
    
    return leftPart + rightPart === n;
}

function kaprekarNumbers(p, q) {
    let found = false;
    let result = [];
    
    for (let i = p; i <= q; i++) {
        if (isKaprekar(i)) {
            result.push(i);
            found = true;
        }
    }
    
    if (found) {
        console.log(result.join(" "));
    } else {
        console.log("INVALID RANGE");
    }
}

let p = 1;  
let q = 100; 

kaprekarNumbers(p, q);
