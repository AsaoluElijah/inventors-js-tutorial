var played = 0;
var won = 0;
var lost = 0;

document.getElementById("played").innerHTML = (localStorage.noPlayed || 0);
document.getElementById("won").innerHTML = localStorage.noWon || 0;
document.getElementById("loosed").innerHTML = localStorage.noLost || 0;

function myFunc() {
    var userNum = document.getElementById("guessedNum").value;
    userNum = Number(userNum);
    if (userNum > 10) {
        alert("Oops!...Enter a number from 1-10");
    } else {
        if (userNum == "" || typeof userNum != "number") {
            alert("Please Enter A Number Between 1-10");
        } else {

            played++;
            if (localStorage.noPlayed == undefined || null) {
                localStorage.noPlayed = 1;
            } else {
                localStorage.noPlayed = Number(localStorage.noPlayed) + 1;
            }
            var compNumber = Math.floor(Math.random() * 10);
            if (compNumber === 0) {
                compNumber = Math.floor(Math.random() * 10);
            }
            if (userNum == compNumber) {
                won++;
                if (localStorage.noWon == undefined || null) {
                    localStorage.noWon = 1;
                } else {
                    localStorage.noWon = Number(localStorage.noWon) + 1;
                }
                alert("You won, the number i guessed is also " + compNumber);
            } else {
                lost++;
                if (localStorage.noLost == undefined || null) {
                    localStorage.noLost = 1;
                } else {
                    localStorage.noLost = Number(localStorage.noLost) + 1;
                }
                alert("You Loose, the number i guessed is " + compNumber);
            }
            document.getElementById("played").innerHTML = localStorage.noPlayed;
            document.getElementById("won").innerHTML = won; //localStorage.noWON;
            document.getElementById("loosed").innerHTML = lost; //localStorage.noLost;
        }
    }

}

function resetPlayed() {
    localStorage.removeItem("noPlayed");
    location.reload();

}