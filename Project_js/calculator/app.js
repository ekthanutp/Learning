document.getElementById("Four").addEventListener("click", four);
document.getElementById("Clear").addEventListener("click", clr);


function four() {
    let res = document.getElementById("result").innerText
    let val = document.getElementById("result").innerText = res + 4;
  }

function clr(){
    document.getElementById("result").innerText = "";
}

