let num = Math.floor(Math.random() * 100);
let upper = 100;
let lower = 0;
let cntSum = 0;
let cntHint = 0;
console.log(num);
function summit(){
    cntSum+=1
    let x = document.getElementById('input').value;
    let result = document.getElementById('result');
    let help = document.getElementById('hint');
    let showSum = document.getElementById('cntSum');
    let showHint = document.getElementById('cntHint');

    help.innerText = "";
    if (x == num){
        result.innerHTML = `เลขที่ถูกต้องคือ ${x} ยินดีด้วยคุณตอบถูก`;
        showSum.innerHTML = `คุณทายไปทั้งหมด ${cntSum} ครั้ง`;
        showHint.innerText = `และใช้ตัวช่วยไปทั้งหมด ${cntHint} ครั้ง`;
    }else if (x > num){
        result.innerText = 'เสียใจด้วยเลขที่ทายมากเกินไป';
    }else{
        result.innerText = 'เสียใจด้วยเลขที่ทายน้อยเกินไป';
    }
}

function hint(){
    let x = document.getElementById('input').value;
    let help = document.getElementById('hint');
    
    cntHint+=1;
    console.log(cntHint);
        if (x > num && x < upper){
            upper = x;
        }else if ( x < num && x > lower){
            lower = x;
        }
        
        help.innerText = `คำตอบอยู่ระหว่าง ${lower} ถึง ${upper}`
        return cntHint;
}
