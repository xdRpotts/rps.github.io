var bot = ["rock", "paper", "scissors"]
var botPick = Math.floor(Math.random()*bot.length);
var delay = 3000;


function rock(){
    console.log(bot[botPick]);
    if (bot[botPick] == 'rock'){
        document.getElementById("win").innerHTML = ("You Won, The Bot Chose: " + bot[botPick]);
        setTimeout(function(){
            document.getElementById("win").innerHTML = ("");

        }, delay)
    }
    else{
        document.getElementById("lose").innerHTML = ("You Lost, The Bot Chose: " + bot[botPick]);
        setTimeout(function(){
            document.getElementById("lose").innerHTML = ("");

        }, delay)
    }
}

function paper(){
    console.log(bot[botPick]);
    if (bot[botPick] == 'paper'){
        document.getElementById("win").innerHTML = ("You Won, The Bot Chose: " + bot[botPick]);

        setTimeout(function(){
            document.getElementById("win").innerHTML = ("");

        }, delay)
    }
    else{
        document.getElementById("lose").innerHTML = ("You Lost, The Bot Chose: " + bot[botPick]);

        setTimeout(function(){
            document.getElementById("lose").innerHTML = ("");

        }, delay)
    }
}

function scissors(){
    console.log(bot[botPick]);
    if (bot[botPick] == 'scissors'){
        document.getElementById("win").innerHTML = ("You Won, The Bot Chose: " + bot[botPick]);

        setTimeout(function(){
            document.getElementById("win").innerHTML = ("");
        }, delay)
    }   
    else{
        document.getElementById("lose").innerHTML = ("You Lost, The Bot Chose: " + bot[botPick]);
        document.getElementsByClassName("scissorsDisable").disabled = true;

        setTimeout(function(){
            document.getElementById("lose").innerHTML = ("");
        }, delay)
    }
}


