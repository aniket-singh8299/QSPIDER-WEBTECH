// //JSON(JAVA SCRIPT OBJECT NOTATION)
// //JSON is a lightweight format for storing and transporting data

// //JSON is often used when data is sent from a server to a web page


// //in javascript object only value in string format
// //javascript is lighterwait

// //but in json format both key and value in string format
// //js don't know what json format
// //js convert into json 
// // to convert data into json we have json object
// //json two types 1) stringfy 2) parse
// //stringfy convert js into json format
// //parse convert json format into js

// let obj1={
//     emp:"ANIKET",
//     empid:123,
//     salary:20000,
// };
// console.log(obj1);
// console.log(JSON.stringify(obj1));
// let a=JSON.stringify(obj1)
// console.log(JSON.parse(a));


// let arr=[12,221,33,22,44,21,34,34];//to add ALL numbers
// console.log(arr[0],arr[1]);
// //DESTRUCTURING :- conveert basically large data to small data
// //it is a method to extract the data from array and objects
// //To perform destructuring we have two method
// //1)Spread operator 2) Rest parameter

// //WE HAVE TWO WAYS TO PERFORM DESTRUCTURING 
// //1) ARRAY DESTRUCTING
// //2) OBJECT DESTRUCTURING

// //1) ARRAY DESTRUCTURING:-HOW TO DESTRUCTURE ARRAY

// let arr1=[1,34,22,44,333,444,222,88]
// let [aa,b,c,d,e,...t]=[...arr1]//Destructuring
// console.log(e);

// //[...arr1] it is spread operator
// //and in initialize let [aa,b,c,d,e,f,...t] it is rest parameter 
// //rest operator:- is used to packing remaining items
// //spread:-it is used to unpack the elements
// //syntax is same for both


// //ADVANTAGE OF ARRAY DESTRUCTURING
// //WE CAN USE ANY VARIABLE NAME 
// //DISADVANTAGE OF ARRAY DESTRUCTURING
// //WE CAN'T SKIP THE ARRAY ELEMENTS

// function aB(a,b,c,d,...s){
//     console.log(a+b+c+d);
// }
// aB(12,33,22,33,444,33,2)



// //OBJECT DESTRUCTURING
// //

// let emp={
//     empame:"ANIKET",
//     emsal:234000,
//     empid:134,
//     mgrno:765,
//     comm:2000,
//     DOB:"18/02/2001"

// }
// //we cannot use random name;
// console.log(emp.empame);

// let{empame,emsal,empid,mgrno,comm}={...emp};
// console.log(Dob);

//ADVANTAGE:
//We can skip the elements also
//DISADVANTAGE:
//we can't use random name


//write diff between rest and spread operator
//write diff between object destructuring and array destructuring



//BROWSER STORAGE:- it has different storage
//cache
//1.LOCAL STORAGE:- it is used to store the data in the browser(permanent)
//2.SESSION STORAGE:- it is used to store the data in the browser but it is deleted
//it will hold the data until session is running
//it will store whenever the website is open(temporary)


//to store the data we have local storage object
//we can also use interpolation
localStorage.setItem("password","1234554321");
console.log(localStorage.getItem("password"))
//if want to clear local storage then use
localStorage.clear();


