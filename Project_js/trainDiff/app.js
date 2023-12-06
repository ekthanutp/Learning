document.getElementById("process").addEventListener("click", ()=>{
    selectElement = document.querySelector('#selStart');
    selectElement2 = document.querySelector('#selEnd')
    selStart = selectElement.value;
    selEnd = selectElement2.value;
    result = document.getElementById('result')

    diff = selEnd/selStart*100
    if( diff < 25 ){
        result.innerText = "จองล่วงหน้าได้ 1 วัน"
    }else if(diff > 25 && diff < 60){
        result.innerText = "จองล่วงหน้าได้ 30 วัน"
    }else{
        result.innerText = "จองล่วงหน้าได้ 90 วัน"
    }
});
