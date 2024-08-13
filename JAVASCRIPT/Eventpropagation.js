let section=document.querySelector("section")
let article=document.querySelector("article")
let main=document.querySelector("main")

section.addEventListener("click",(E)=>{
    E.stopPropagation();
    section.style.backgroundColor="red";
})
article.addEventListener("click",(E)=>{
    E.stopPropagation();
    article.style.backgroundColor="yellow";

})
main.addEventListener("click",(E)=>{
    E.stopPropagation();
    main.style.backgroundColor="aqua";
})


//HOW ARE OUR EVENTS TRAVELLING THROUGH DOM TREE
//WE HAVE TWO PHASE
//DEFAULT PHASE IS BUBBLING PHASE
//1) CAPTURING:-EVENTS EXECUTING FROM  OUTERMOST TO INNERMOST
//2)BUBBLING PHASE:- events execution from innermost to outermost

//WE HAVE METHOD TO STOP EVENT PROPAGATION so use EVENTPROPAGATION
// SO USE ANY ARGUMENT IN CALL BACK
//THEN TARGET USE BY E.STOPPROPAGATION


//TO STOP DEFAULT BEHAVIOUR OF FORM(REFERSESHING)AND ANCHOR
//USE E.PREVENTDEFAULT()


