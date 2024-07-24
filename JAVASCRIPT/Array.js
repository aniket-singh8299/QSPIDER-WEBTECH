// let arr=[10,"aniket",[],true,function name(params) {
    
// }]
// let arr1=[10,"Helllo",70]
// let arr3=new Array(10,20,30);
// console.log(arr3);

// //Array Functions

// const a=[10,20,40,50,34,443,22,55,3,2,4,5,5,]
// console.log(a.length);
// a.push(100)
// console.log(a);

// a.unshift(67)
// console.log(a);

// a.pop()
// console.log(a);

// a.shift()
// console.log(a);



// console.log(a.indexOf(20));
// console.log(a);
// console.log(a.lastIndexOf(5));
// // console.log(a.includes(5)) //return boolean value
// // console.log(a.at(1))
// console.log(a.slice(3,7))//It will exludes the last index thats why we use n+1 index
// //slice method will not affect to existing array
// console.log(a.splice(2,6,3,56))
// console.log(a)
// //a.splice(starting index,length,replacable items)
// //splice and slice
// //splice will affect to existing array
// //slice will not affect to existing array
// //slice can replace items 

// //join //it is used to convert array to string methods
// //join method used to convert as a string
// console.log(a.join(" "))// add space or not depend on space and gve number it will add number in between all items
// console.log(typeof a.join(""))//remove comma if give empty string
// let b=[243]
// console.log(a.concat(b)) //it will concat array and it will make new array and it will not affect previous array
// console.log(a.reverse()) // it will affect the array
// //it will convert string to array
// console.log(a.toString()) //it will convert array to string
// console.log(a.sort());
// //in sort we use 
// console.log(a.sort((a,b)=>a-b))//ascending order //it is the function to sort
// console.log(a.sort((a,b)=>b-a))//descending order //sort is higher order fuction //also called as comparator function

// //sort used in 3 ways
// //sort((a,b)=> a-b) //Ascending order
// ////sort((a,b)=> a+b) //descending order
// //sort() //sort according to digit


//flat():- Remove array whatervee we give number
//remove all array and give single array4
let a1=[[[[[50,60,[[[10]]]]]]]]
console.log(a1.flat(5))//it will remove all array and give single array4



// //ADVANCE ARRAY METHODS
// //map() //it will return new array
// //filter() //it will return new array
// //reduce() //it will return single value
// //forEach() //it will not return any value
// //find() //it will return single value





// //forEach is used to iterate array elements
// //Just to iterate we have ForEach
// // it is higher order function which accept callback function
// // and this call back function will accept 3 parrameters

// // first parameter is all array Elements // cannot change sequence // can give any name
// // indexe value
// // complete array
// const arr11= [12,33,55,32,11]
// // arr11.forEach((ele,i,ar)=>{
// //      console.log(ar);
// // });
// console.log(arr11.length);
// let s= arr11.forEach((ele,i,ar)=>{
//      return ele+3;
// });
// console.log(s); //it will return undefined because it is not returning any value

// //MAP METHOD

// // arr11.map((ele,i,ar)=>{
// //      cons
// // });


// //for each will not return any value but map method will return  NEW updated array

// //Filter ARRAY:-it is used to filter the array based on conditions and it will return new filter array
 
// let N= arr11.filter((ele,i,ar)=>{
//     return ele>=30;
// });
// console.log(N);
// let d= arr11.filter((ele,i,ar)=>{
//     return ele>=30;
// });
// console.log(N);
// let e= arr11.find((ele,i,ar)=>{
//     return ele>=30;
// });
// console.log(e);



// //In map method it will accept only expressoion but in filter method will accept conditions
// //filter return filtered array but find will return single value //whatever first




// //REDUCE METHOD:- it is used to reduce the array into single value
//reduce will accept two parameters 1) call back function and 2) Initial value
//and this callback will acept accumulator,currentvalue
//go from left to right

// let arr6=[10,20,30,40,50];
// let result2=arr6.reduce((accumulator,currentval)=>{
//     return accumulator+currentval;
// },0); //0 is default value for accumulator
// console.log(result2);
// //it is iterating also and perform some operation also


//Reduceright:work from Right to left 
//syntax is same as reduce but direction are different


