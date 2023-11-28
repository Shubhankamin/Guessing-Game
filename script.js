







var input = document.getElementById("userinput");
var result = document.getElementById("result");
var limit = document.getElementById("limit");
var hint = document.getElementById("hint");
let gameNo = Math.floor(Math.random() * 10);
var chance=document.getElementById("chance");
let count = 1;

function start() {
    var userInput = parseInt(input.value);
    if(userInput){
        chance.textContent = `Chances Completed: ${count} `;
    }

    if (userInput > gameNo) {
        console.log(gameNo);
        hint.textContent = "Guessed number is greater";
    } else if (userInput < gameNo) {
        hint.textContent = "Guessed number is lesser";
    }
   

    if (userInput === gameNo) {
        result.textContent = "Congratulations!! You've guessed the right number";
        result.style.color="Green"
        hint.textContent="";

    } else {
        result.textContent = "Your guess is wrong....Try Again";
        result.style.color="red";
        count++;

        if (count > 5) {
            limit.textContent = "OOPS!! You have reached the maximum limit of tries";
            input.disabled = true; 
        }
    }
}