// //STRING:- COLLECTION OF ONE OR MORE CHARACTERS IS Called String.
// //three ways to define String
// //1)Single quote
// //2)Double quote
// //3)Backtick  (tedaquote)



// //Single Quote
// let str='Aniket Kumar Singh'
// console.log(typeof str);

// //Double quote
// //Backtick
// let str1=`Aniket Kumar Singh`
// console.log(typeof str);

// //Two ways to take variable in print statement
// //1) + (we have to separate a string than insert a variable)
// //2)Interpolation :- we have to use backtick (It is a technique to use variable in string)
// //and interpolation is work only in backtick
// //when we use interpolation in String than it is called Template String
// //syntax:- `${}`
// // let age=prompt("Enter The Number:-")
// // let str2="Age of person is "+ age + " he is eligible for the voting";
// // console.log(str2);
// let age3=prompt("Enter The Number:-")
// let str4=`Age of person is ${age3} he is eligible for the voting`;
// console.log(str4);






//String Methods
//1)length:- It is used to find the length of the string

let str6='ANIKET KUMAR SINGH';
// console.log(str6.length);




// //2)concat:- It is used to concatenate two strings
let a="I am ANIKET";
let b="KUMAR";
let c="SINGH";
console.log(a.concat(b).concat(c));



// //3)slice():- it will accept both positive and negative index
// //give n+1
// //start from o indexing
// console.log(str6.slice(0,7))

//5)substr()
//it will accept two parameters 1) Starting index 2) length
//we will get depricated lines ,doesn't use
//but substring not accept negative index but it will accept positive index
// console.log(str6.substring());






//6)replace()

//used to replace the string
//it will accept two parameters 1) string  2) string to be replaced
let str7='    ANIKET KUMAR SINGH'

console.log(str7.replace("Aniket","Varun"))
console.log(str7);



//7)replaceall()


let st="JAVA AND JAVA SCRIPT BOTH ARE DIFFERENCE";
console.log(st.replaceAll('JAVA','Python'));

//8)toUpperCase()

console.log(st.toUpperCase())
//9)toLowerCase()
console.log(st.toLowerCase())


//10)trim()
console.log(st.trim());

//11)trimStart()
st="      ANIKET       "
console.log(st.trimStart());
//12)trimEnd()
console.log(st.trimEnd());

//13)padStart():-
let phone='8299505767'
let no=phone.slice(6)
console.log(no.padStart(10,'*'))

//14)padEnd()
let phon='8299505767'
let nos=phon.slice(0,4)
console.log(nos.padEnd(10,'*'))




//15)charAt() //Can not use negative indexing
console.log(phon.charAt(2))

//16)charCodeAt()\
//it will convert character to ascii value
let str="8299505767"
console.log(phon.charCodeAt(1))

//it will convert ascii to character and String is a constructor
console.log(String.fromCharCode(phon.charCodeAt(1)));



//17)split()



//ADVANCED FOR LOOPS
//1)for of loop //It will return elements
//2) for in //It will return Index
//for of loop is used to iterate over iterable objects like arrays, strings, maps, sets,
//etc. It is used to iterate over the elements of an iterable object. It is similar to
//for in loop but it is used to iterate over the elements of an iterable object.
let as ="ANIKET"
for(let i of as){
 //   console.log(i)
}

//for of can used in object but for in not used

                //For of                //for in
//ARRAY          YES                      YES
//STRING         YES                      YES
//OBJECT        NO                        YES
let aa={
    "name":"VARUN",
    "age":20}
    for(let i in aa){
        console.log(aa[i])
    }
    

for(let i in as){
 //   console.log(i)
}



