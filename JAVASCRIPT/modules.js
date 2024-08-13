//MODULES ARE USED TO SHARE THE CODE IN MULTIPLE FILES
//whichever you want to share the code use export
//and in the file where you want to use the code use import
//and we have to specify the type="module"


//there are 2 types of export statement

//1. default export:-
//we have to use export default keyword
//in one file we can not  use multiple name export statement we can use
//No need to use curly braces
//and can use any name


//2. Named Export:- while exporting any statement we will use export keyword
//while importing we have to use curly braces
//while importing we should use same name
//in one file we can use multiple name export statement we can use





export function sum(a,b) {
    return a+b;
}

export function sub(a,b){
    return a-b;
}

export default sum;
