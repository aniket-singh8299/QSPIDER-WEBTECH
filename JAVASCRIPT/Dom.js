// //EVENTS IN DOM
// //EVENT:- An action performed by the user on webpage is known as Event//Scrolling,zoom in ,zoomout etc
// //A js can be executed when an event occurs like when a user clicks on HTML ELEMENT.

// //Click
// //Mouseover
// //Mouseout
// //Mousedown
// //Mouseup
// //Contaxmenu //for Right click it is use 
// //Doubleclick
// //Keypress
// //Keyup
// //Keydown
// //submit


// //there are 2 ways to use DOM events:-
// //1) BY USING HTML ATTRIBUTE
// //2) By using addEventListener() //it is method

// let section=document.querySelector("section");
// function change() {
//     section.style.borderRadius="50%";
    
    
// }
// function changes(){
//     section.style.borderRadius="";


// }

// // function changecolour() {
// //     section.style.background="red";
// //     section.style.color="white";
   

    

// // }

// //Now use counter 
// //it i click on increase counter will increase,same for decrease,Reset is to 0


// let counter=document.querySelector(".counter");
// // let count=counter.innerText;
// // console.log(typeof count);

// //want to convert string into integer
// let count1=parseInt(counter.innerText);
// console.log(typeof count1);


// //Increase the Number
// function increase() {
//     count1 +=1;
//     counter.innerText=count1;
// }

// //Decrease the Number
// function decrease(){
//     count1 -=1;
//     counter.innerText=count1;
// }

// //Reset the number
// function reset(){
//     count1=0;
//     counter.innerText=count1;
// }


//2nd way by using addEventListener

//it will accept two Arg

//1) Eventname
//2)call back function

let section=document.querySelector("section");
let button=document.querySelector("button");
button.addEventListener("click",()=>{
    section.style.borderRadius="50%";
});














