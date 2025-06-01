let btn = document.querySelector("button");


function generateColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

btn.addEventListener('click',function(){
    let h1 = document.querySelector("h1");
    let color = generateColor();
    h1.innerHTML = color;

    let div = document.querySelector('div');
    div.style.backgroundColor = color;
});