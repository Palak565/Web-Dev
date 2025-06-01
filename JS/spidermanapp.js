let mainImg = document.querySelector("#mainImg");

let inp = document.querySelector("#inp");

inp.addEventListener('keypress',function(e){
    console.log(e.key);
})


mainImg.addEventListener('load',function(e){
    console.log("loaded");
})

document.addEventListener('scroll',()=>{
    console.log("scrolled");
})

let newbtn = document.createElement('button');
newbtn.innerText = "Click me!";

newbtn.addEventListener('click',()=>{
    newbtn.style.backgroundColor = 'green';
})

let body = document.querySelector("body");
body.append(newbtn);

inp.addEventListener('input', function(){
    let name = inp.value.replace(/[^a-zA-Z ]/g, '');
    inp.value = name;
    let heading = document.querySelector("#heading");
    heading.innerText = name;
})