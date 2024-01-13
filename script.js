//let and var niya parthokko

let age = 18;
age = 20;
console.log(age);

let newage = 50;
function sum(){
    let num1 = 30;
    let num2 = 20;
    const total = num1 + num2;
    return total;
}
console.log(sum());

console.log(newage);

for(var i = 0; i < 5; i++ ){
    console.log("Inside Loop" + i);
}
console.log("Outside Loop" + i);


/*for(let i = 0; i < 5; i++ ){
    console.log("Inside Loop" + i);
}
console.log("Outside Loop" + i);*/

// const variable
const name = "rakib";
name = "Tanvir";
console.log(name);