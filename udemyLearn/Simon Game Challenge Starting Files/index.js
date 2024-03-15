var buttonColours=["green","red","yellow","blue"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


$(".btn").on( "click", function() {

if(started){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
}
});



function nextSequence(){

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*buttonColours.length);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
}

function playSound(name){
    var playSoundColor = new Audio("sounds/" + name + ".mp3");
    playSoundColor.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
        setTimeout(() => {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        console.log(currentLevel);
        console.log(userClickedPattern);
        console.log(gamePattern);
        console.log(userClickedPattern[currentLevel]);
        console.log(gamePattern[currentLevel]);
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
    }else{
        console.log(userClickedPattern);
        console.log(gamePattern);
        console.log(userClickedPattern[currentLevel]);
        console.log(gamePattern[currentLevel]);
        console.log("wrong");
        /* playSound("wrong") */
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        startOver()
    }

};

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}