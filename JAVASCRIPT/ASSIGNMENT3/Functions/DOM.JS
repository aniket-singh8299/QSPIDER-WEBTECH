//DOM(Document OBJECT MODEL) //
//Document is  an object created by the browser
//node js we dont have any window object
//IT IS WEB API
//DOM IS USED TO MANIPULATE HTML ELEMENTS
//DOM IS USED TO MANIPULATE CSS STYLES
//DOM IS USED TO MANIPULATE JAVASCRIPT EVENTS

//DOM ALLOWS TO MODIFY THE DOCUMENT CONTENT RENDERED BY THE BROWSER WITHOUT RELOADING THE PAGE,
//THEREFORE DOM HELP TO MAKE A WEB PAGE DYNAMIC
//DOM IS A TREE STRUCTURE

//DOCUMENT OBJECT :- IT WILL HOLD OUR CODE IN TREE FORMAT
//DOM IS API
//DOM:- IT IS NOT A PART OF JS



//To target any element we have 5 methods:-

//1. document.getElementById() :- It will return only one element
document.getElementById("container")
//If we have multiple id still it will get same contsainer
//2. document.getElementsByTagName() :- It will return all the elements with same tag name
document.getElementsByTagName("section")
let html=document.getElementsByTagName()
//it will also return html collecction

//3. document.getElementsByClassName() :- It will return all the elements with same class name
//In this method we have two pass the elements
console.log(document.getElementsByClassName("container"));
//we can access the values from html collection by using index\
console.log(document.getElementsByClassName("container")[0]);
//It will return html collections
//this html collection is array like object
//it will look like 



//4. document.querySelector() :- It will return only one element
//by using this selector we can target who has id,class,tag
//if we are using id than use # symbol and class name use . symbol
//if we are using tag name than use tag name
console.log(document.querySelector("#container"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("section"));



//if we having same id and class and tag name than it will target first element






//5. document.querySelectorAll() :- 
//by using this selector we can target who has id,class,tag
console.log(document.querySelectorAll("#container"))
//it will return nodelist
//nodelist it is a collection of nodes


//in doc structure:- each element is node
//it is also array like objects
//we can access elements by using index values


//HTML COLLECTION AND NODE LIST
//HTML COLLECTION:- It is array like object
//it is not array
//it is not iterable
//it is not indexable
//it is not splicable
