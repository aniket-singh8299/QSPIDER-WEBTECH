//Objects is an entity having state and behaviour
//java is an object based language . everything is objects in java
//3 ways to create objects
//1. Object literal
//2. by using object Constructor (with new keyword)
//3. by using object constructor function (without using new keyword)

//OBJECT LITERAL:-
//in keyvalue pair and each keyvalue pair separate by separator (,)
//syntax:-
//obj1=emp1

//CRUD OPERATION
//Create objects
let obj1={
    name:"sai",
    age:20,
    address:"hyd", //CAN ALSO INTIALIZE ARRAY AND FUNCTION
    JOB:"ASE",
    SALARY:800000


};
console.log(obj1)
//To ACCESS OBJECT DATA WE HAVE TWO WAYS 
//BY USING . NOTATION :- 
//BY USING ARRAY OPERATOR
console.log(obj1.SALARY);
console.log(obj1['SALARY']);


//comes under updation in CRUD
//Insert one key in object 
//if key already present than that value override by new value or reinitialize value
obj1.mgr=300;
console.log(obj1);
obj1.SALARY=300;
console.log(obj1);

//DELETE :- IT IS A KEYWORD IN JS TO DELETE ONE RECORD

delete obj1.SALARY;
console.log(obj1);



//2ND WAY BY USING CONSTRUCTOR (WITH NEW KEYWORD)
//Create object:-
//syntax:-
let obj66=new Object();
obj66.name="sai";
obj66.age=20;
console.log(obj66);

//make multiple copy using different function

function fun(a,b,c){
    console.log(a,b,c); //not store internally if you want to store use this keyword
}

let fun7=new fun(100,200,300)  //object will store the address in variable

//basically it will give reference of obj (100,200,300) to store in variable
let fun3=new fun(23,4,5)
fun7.SALARY='90000'
console.log(fun7.SALARY);


//In Object if you USE any  VARIABLE VALUE AS A KEY than we have to wrap that variable in array operator[]:-
//syntax:-

// let ab=30>50 ? "Login" :"Logout"
// let a={
//     name:'sai',
//     [ab]:'LOGIN'
    
// };
// console.log(a);


//OBJECT METHODS
//objects can have methods
//METHODS Are actions that can be performed on objects.
//
//1) keys:-it will return array of keys
//Object(because first case (O) in capital thats why it is object) it is a constructor

let emp1={
    ename:"sai",
    age:20,
    address:"hyd", //CAN ALSO INTIALIZE ARRAY AND FUNCTION
    JOB:"ASE",
    SALARY:800000,
    dance:function dancing(){
        console.log("dancing");
    }




};
console.log(Object.keys(emp1));
console.log(Object.keys(emp1.age));
//IF KEY IS NOT PRESENT IN OBJECT IT WILL GIVE UNDEFINES

Object.keys(emp1).forEach((ele,i,arr) => {
    console.log(emp1[ele]);
});

  //If i store noraml value than it property but if i store function than it will be behaviour
//Two    ways to declare the behaviour of object:- 
//1)Function declaration
//2) if key is not there then how to access then function name work like a key

  let emp4={
    ename:"sai",
    age:20,
    address:"hyd", //CAN ALSO INTIALIZE ARRAY AND FUNCTION
    JOB:"ASE",
    SALARY:[20.6,7],
    dance:function dancing(){
        console.log("dancing");
    }





};

emp4.dance();
console.log(emp4.SALARY[1]);
let emp9={
    ename:"sai",
    age:20,
    address:"hyd", //CAN ALSO INTIALIZE ARRAY AND FUNCTION
    JOB:"ASE",
    SALARY:[20.6,7],
    dancing(){
        console.log("dancing");
    }





};
emp9.dancing()




//2)values:-it will return array of values

let em={
    ename:"sai",
    age:20,
    address:"hyd", //CAN ALSO INTIALIZE ARRAY AND FUNCTION
    JOB:"ASE",
    SALARY:[20.6,7],
    dance:function dancing(){
        console.log("dancing");
    }

};
console.log(Object.values(em));









//3)entries:-it will return array of key value pairs

console.log(Object.entries(em))
//4)Assign:- it is used to merge two objects
//IT WILL ACCEPT TWO PARAMETERS 1) TARGET OBJECTS AND 2) Multiple source objects
//IT will affect target object

let a={
    name:"sai",
    Age:20,
    address:"hyd", //CAN ALSO INTIALIZE ARRAY AND FUNCTION
    JOB:"ASE",
    SALARY:[20.6,7],
    dance:function dancing(){
        console.log("dancing");
    }

};
let b={
    eame:"sai",
    ae:20,
    Address:"hyd", //CAN ALSO INTIALIZE ARRAY AND FUNCTION
    joB:"ASE",
    SalaRY:[20.6,7],
    DANCE:function dancing(){
        console.log("dancing");
    }

};
console.log(Object.assign(a,b));
//If target object we don't want to affect then use dummy object {} as a target
console.log(Object.assign({},a,b));





//5)hasOwnProperty:-it will check whether the object has the property or not

console.log(a.hasOwnProperty('job'))



//6)Seal:-we can only update the properties
//we can't do modification because it is freeze example githubdata becayse they 
//we can not delete and add any key
//BUT WE CAN UPDATE

Object.seal(b);
Object.eame="ANIKET";



//7)isSealed:- it is used to check whether the particular object is sealed or not
console.log(Object.isSealed(b))





//8)freeze:- we cannot do any modifications in an object

Object.freeze(a);


//INSERTION AND DELETE AND UPDAION NOT POSSIBLE 
//BUT IN SEAL ONLY UPDATION IS POSSIBLE




//9)Isfrozen:- it is used to check whether the particular object is frozen or not
console.log(Object.isFrozen(a))







//

