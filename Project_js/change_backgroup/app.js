const icon = document.querySelector("i")
const txt = document.querySelector("h1")
const bg = document.querySelector("body")
const blockdiv = document.querySelector("div")

blockdiv.addEventListener("click",function(){
    icon.classList.toggle("bi-moon-stars")
    if(icon.classList.toggle("bi-brightness-high-fill")){
        txt.innerText = "โหมดกลางวัน"
        bg.style.backgroundColor = "#f5f5f5"
        bg.style.color = "#0a0a0a"
    }else{
        txt.innerText = "โหมดกลางคืน"
        bg.style.backgroundColor = "#0a0a0a"
        bg.style.color = "#f5f5f5"
    }
})