//Numbers operations
let a = 10;
let b = 5;
let c = 15;
let d = 20;
let e = 25;

//increment by the value of a by 1
let increment = ++a;
console.log('increment by value of 1:',increment);

//decrement by the value of b by 1
let decrement = --b;
console.log('decrement by the value of 1:',decrement);

//adding c and d
let add = c + d;
console.log('adding c and d:',add);

let f = c + d;
console.log('the value of F:',f);

//multiply e and a
let multiply = e * a;
console.log('multiply e and a:',multiply);

let g = e * a;
console.log('the value of g:',g);

//comparison operator
if (c > d) {
    console.log("c is greater than d");
} else {
    console.log("c is not greater than d");
}

if (e === 25) {
    console.log("e is equal to 25");
} else {
    console.log("e is not equal to 25");
}


//assignment operator
//add
b += a;
console.log('adding b and a:',b);

//multiply
d *= e;
console.log('multiplying d and e:',d);

//remainder
let remainder = e % b;
console.log('the remainder is:',remainder);

//ternary operator
let ternary = (a > b) ? "greater" : "smaller";
console.log('the ternary shows that a is:',ternary);

