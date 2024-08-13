// //Mathobj:- it used to perform mathematical operations
// //1)sqrt
// console.log(Math.sqrt(45));

// console.log(Math.floor(25.7));


// console.log(Math.ceil(34.5));

// console.log(Math.floor(45.9));//it is shorthand for ceil and floor



// console.log(Math.max(23,45,32,134));

// let arr=[2234,2,2,4432,321]
// console.log(Math.max(...arr));

// //Absolute
// console.log(Math.abs(-45));

// //Random
// console.log(Math.random());//by default it will give  value from 0 to 1
// let a=Math.random()*1000;
// console.log(Math.round(a));
// //it will give value from 0 to 100
// //it


// console.log(Math.round(Math.random()*1000));


// console.log(Math.cbrt(455));



let a=[1,2,3,123,21];
let b=a.reduce((accumulator,currentval)=>{
     return currentval;
},0);
console.log(b);
