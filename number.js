//Numbers operations
let a = 10;
let b = 5;
let c = 15;
let d = 20;
let e = 25;

//increment by the value of a by 1
let increment = ++a;
console.log(increment);

//decrement by the value of b by 1
let decrement = --b;
console.log(decrement);

//adding c and d
let add = c + d;
console.log(add);

let f = c + d;
console.log(f);

//multiply e and a
let multiply = e * a;
console.log(multiply);

let g = e * a;
console.log(g);

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
console.log(b);

//multiply
d *= e;
console.log(d);

//remainder
let remainder = e % b;
console.log(remainder);

//ternary operator
let ternary = (a > b) ? "greater" : "smaller";
console.log(ternary);

