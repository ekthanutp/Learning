var numberOfDrumbuttons = document.querySelectorAll(".drum").length;
for(var i = 0;i<numberOfDrumbuttons;i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


        /* switch (buttonInnerHTML) {
            case "w":
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                break;
            case "a":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                break;
            case "s":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                break;
            case "d":
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                break;
            case "j":
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                break;
            case "k":
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                break;
            case "l":
                    var kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                break;
        
            default:console.log(check)
        } */
});

}

document.addEventListener("keypress",function(event){
    console.log(event)
    makeSound(event.key)
    buttonAnimation(event.key)
// **************** IF EVENT **************************
       /*  if(event.keyCode === 119){
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        }else if(event.keyCode === 97){
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        }else if(event.keyCode === 115){
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        }else if(event.keyCode === 100){
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        }else if(event.keyCode === 106){
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        }else if(event.keyCode === 107){
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        }else if(event.keyCode === 108){
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        }else{
            console.log(event)
        } */

//****************CASE EVENT *********************/
        /* switch (event.keyCode) {
            case 119:
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case 97:
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 115:
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case 100:
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case 106:
                var snare = new Audio('sounds/snare.mp3');
            snare.play();
                break;
            case 107:
                var crash = new Audio('sounds/crash.mp3');
            crash.play();
                break;
            case 108:
                var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
                break;
        
            default:console.log(event)
        } */

});

function makeSound(key){

    switch (key) {
        case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
        case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
        case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
        case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
        case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
        case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;
    
        default:console.log(key)
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 150);
    
}
