function addBtn(){
    const menu = document.querySelector('.list');
    const txt = document.querySelector('.textInput').value;
    let btn1 = document.createElement('p');
    btn1.innerText = txt;
    menu.appendChild(btn1);

}

function deleteBtn(){
    const menu = document.querySelector('.list');
    let btn2 = document.querySelector('p');

    menu.removeChild(btn2);
}