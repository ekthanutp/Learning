let count = 0;
function addBtn1(){
    document.getElementById('number').innerText = ++count; 
};

function resetBtn1(){
    count = 0
    document.getElementById('number').innerText = count; 
};

function deleteBtn1(){
    document.getElementById('number').innerText = --count; 
};

function delay(){
   let time = setInterval(() => {
        if (count < 100)
        {
            document.getElementById('number').innerText = ++count;
            console.log(count);
        }else clearInterval(time);
    }, 10);
}

