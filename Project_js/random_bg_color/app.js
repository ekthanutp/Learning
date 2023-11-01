const icon = document.querySelector("i")
const txt = document.querySelector("h1")
const bg = document.querySelector("body")
const blockdiv = document.querySelector("div")


function randomColor(){
    return Math.floor(Math.random()*255)
}
bg.addEventListener("click",()=>{
    const red =  randomColor()
    const green =  randomColor()
    const blue =  randomColor()
    const red2 =  randomColor()
    const green2 =  randomColor()
    const blue2 =  randomColor()
    const rgb = `rgb(${red},${green},${blue})`
    const rgb2 = `rgb(${red2},${green2},${blue2})`
    bg.style.backgroundColor = rgb;
    txt.style.color = rgb2;
    icon.style.color = rgb2;
})