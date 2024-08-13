let input=document.querySelector("input")
let box=document.querySelectorAll(".box")

let finalval=Number(input.value)
let inputval=0;

box.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        let val=e.target.innerText;

        if(val!="+" && val!="/" && val!="*" && val!="Clear" && val!="-" && val!="="){
            inputval=val;
            input.value =val;

        }
        if (e.target.innerText=='+'){
            console.log(inputval);
            input.innerText +=val;
            add(inputval)

        }
    });
})

let add=(value) =>{
    console.log(value);
    finalval+=Number(value);
    input.value=finalval;
    
}