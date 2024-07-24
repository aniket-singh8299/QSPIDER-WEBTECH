
let emp3={

    name:"sai",
    age:30,
    salary:10000,
    address:"hyd",
}

let emp1={
    
    name:"Aniket",
    age:31,
    salary:10007,
    address:"hyd",
}
let emp2={
    
    name:"sai",
    age:30,
    salary:10000,
    address:"hyd",
}

// function (a,b,s) {
//     console.log(this);
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.salary);
//     console.log(this.address);
    
    
    
// }
// console.log(print.call(emp1,10,20,30));
// console.log(print.apply(emp1,[10,20,30]));
// console.log(print.bind(emp1,[10,20,30]));





// //first argument should be object
// // call,bind,

// print(emp1);
// // console.log(print.bind(emp2));
// // print.call(emp3);


// //Implicit Return
// let fun=(a,b) => a+b
// console.log(fun(10,20));

// //want to return multiple statements
let fu=(a,b) => (console.log(a,b),a+b)
console.log(fu(30,20));

let d=(a,b)=>{
    return a+b;
}
console.log(d(80,20));
let r=(a,b)=>a+b
console.log(r(24,34));




// function* fun2(a){
// yield a+10;
// yield a+20;
// yield a+30;




// }

// // let it=fun2(10);
// // console.log(it);
// // console.log(it.next().value);
// // console.log(it.next());
// // console.log(it.next());
// console.log(fun2(30).next().value);










