var bot = ["rock", "paper", "scissors"]
var botPick = Math.floor(Math.random()*bot.length);
var delay = 3000;


function rock(){
    console.log(bot[botPick]);
    if (bot[botPick] == 'rock'){
        document.getElementById("win").innerHTML = ("You Won, The Bot Chose: " + bot[botPick]);
        document.getElementById("disable").disabled = true;
        setTimeout(function(){
            document.getElementById("win").innerHTML = ("");
            document.getElementById("disable").disabled = false;
        }, delay)
    }
    else{
        document.getElementById("lose").innerHTML = ("You Lost, The Bot Chose: " + bot[botPick]);
        document.getElementByClass("disable").disabled = true;
        setTimeout(function(){
            document.getElementById("lose").innerHTML = ("");
            document.getElementById("disable").disabled = false;
        }, delay)
    }
}

function paper(){
    console.log(bot[botPick]);
    if (bot[botPick] == 'paper'){
        document.getElementById("win").innerHTML = ("You Won, The Bot Chose: " + bot[botPick]);
        document.getElementById("disable").disabled = true;
        setTimeout(function(){
            document.getElementById("win").innerHTML = ("");
            document.getElementById("disable").disabled = false;
        }, delay)
    }
    else{
        document.getElementById("lose").innerHTML = ("You Lost, The Bot Chose: " + bot[botPick]);
        document.getElementByClass("disable").disabled = true;
        setTimeout(function(){
            document.getElementById("lose").innerHTML = ("");
            document.getElementByClass("disable").disabled = false;
        }, delay)
    }
}

function scissors(){
    console.log(bot[botPick]);
    if (bot[botPick] == 'scissors'){
        document.getElementById("win").innerHTML = ("You Won, The Bot Chose: " + bot[botPick]);
        document.getElementById("disable").disabled = true;
        setTimeout(function(){
            document.getElementById("win").innerHTML = ("");
            document.getElementById("disable").disabled = false;
        }, delay)
    }   
    else{
        document.getElementById("lose").innerHTML = ("You Lost, The Bot Chose: " + bot[botPick]);
        document.getElementById("disable").disabled = true;
        setTimeout(function(){
            document.getElementById("lose").innerHTML = ("");
            document.getElementById("disable").disabled = false;
        }, delay)
    }
}