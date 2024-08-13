//we can make js ASYNCHRONOUS by making in any of these
//ASYNCHRONOUS:- multiple task at a time
//SYNCHRONOUS:- one task at a time

//1) CALLBACKS:-//It is type of make js  synchronous to asynchronous 
//WE HAVE TWO METHOD
//setTimeout() and setInterval()

//settimeout :- it will accept two parameter 
//use:- wherever you wnat some delay then use setTimeout AND IT WILL EXECUTE ONLY ONCE
//example :- LOGIN :- WHEN WE LOGIN IT WILL GO AFTER SOMETIME ON OTHER PAGE
//AND ALSO NOT FOLLOW ANY SEQUENCE AND IT WILL COME ACCORDING TO TIME
//1) call back function
//2)time interval in millisecond

// setTimeout(()=>{
//     console.log("hello");
// },2000)


// //SUPPOSE WE TAKE DIFFERENT CLG ANDD ASYNCHRONOUS CODE  SO THEY WILL EXDECUTE ASYNCHRONOUS IN GROUP AND EXECUTE SEPARATELY
// console.log("Start");
// setTimeout(()=>{
//     console.log("hello 7");
// },7000)
// setTimeout(()=>{
//     console.log("hello 5");
// },5000)
// console.log("END");
// setTimeout(()=>{
//     console.log("hello 3");
// },3000)
// setTimeout(()=>{
//     console.log("hello");
// },2000)

// console.log("Start");

// //SETTIMEOUT IS USED FOR DELAY AND IT WILL EXECUTE ONLY ONCE


// //setInterval:- the syntax is same as setTimeout
// //it will execute again and again

// //use:- we can use in analog clock
// let setdata=setInterval(()=>{
//     console.log("hello");
//     console.log("hello1");
// },2000)

// //Now to stop this

// setTimeout(() => {
//     clearInterval(setdata) 10000);



// console.log("hello");

// //2) PROMISES
// //it is a mechanism to handle the Asynchronous Operations
// //to handle the asynchronous we usse promises
// //wheenever we fetchinh data from backend that time we will find promises if we have data we will give and take some time it will take some time because it is large data
// //In promises we have 3 states
// //1) Pending state:- if data is big then it will take some time to fetch 
//IF NO ACTION PERFORMED
// //2) Resolve:- if server has data
// //3) Reject- if server has no data


let promise=new Promise((resolve,reject)=>{
    if (10<30){
        resolve("promise is resolved");
    }
    else{
        reject("promise is rejected");
    }
});
console.log(promise);
//this promis constryctor call back fuction
//and this call back will accept two parameters 
//1) resolve//first should be resolve //2) reject it also should be


//we can use then and catch method to handle the promises
//whenever promise is resolved to get the data then use then()
//wheneever promise is rejected then use catch()

//then  method will accept 1 call back func and this call back func will accept 1 parameters

// promise.then((data)=>{
//     console.log(data);
// })

// promise.catch((data)=>{
//     console.log(data);
// })



//if want to use both together
//then and catch
promise.then((data)=>{
     console.log(data);
}).catch((error)=>{
      console.log(error);
}).finally(()=>{

})

//finally:-if you don't want to perform any action//it is by default


//it will be called in both cases whether promise is resolved or rejected

//Promises methods:-

//1) ANY:- WE HAVE TO USE SET TIMEOUT AND SET INTERVAL AND TAKE ONE EXAMPLE
//2) ALL
//3) RACE
//4) ALLSETTLED:- EITHER IT WILL RESOLVED AND REJECT TO CHECK



//HOW TO FETCH DATA IN JS

//1) FETCH():- we can use this method in two ways
//by using promises
//by using async and await


//use first way











//3) ASYNC AND AWAIT