let AA=document.querySelector(".AA")
let A=document.querySelector(".A")
let B=document.querySelector(".B")

let date=new Date()

setInterval(() => {
    let date=new Date()
    // console.log(date.getSeconds());
    let second=date.getSeconds();
    let minute=date.getMinutes();
    let hour=date.getHours();

  AA.style.transform=`rotate(${second*6}deg)`;

    
}, 1000);