
//HOW TO FETCH DATA IN JS

//1) FETCH():- we can use this method in two ways
//by using promises
//by using async and await


//use first way:- when i use fetch method i get promise and in promise i get promisersult:response
//use then() because it response
// let fetchData=fetch("https://api.github.com/users").then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })

let section=document.querySelector("section")


//2nd way then use 
//async and await:-use to make any statement asynchronous use async 
//becuase it might take more time so it will not affect another statement and use async
let fetchDara=async ()=>{
    let response=await fetch("https://api.github.com/users")
    let data=await response.json()
    console.log(data);
    data.forEach((ele,i,arr) => {
        console.log(ele);
        displayUser(ele)
    });
    
    

}
fetchDara()

let displayUser=(data)=>{
    let card=document.createElement("div")
    card.setAttribute("class","cards")
    card.innerHTML=`<img src="${data.avatar_url}" alt="" class=userImage">
    <h1>Name: ${data.login}</h1>
    <p></p>`
    section.append(card);

}




