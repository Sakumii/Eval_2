let images = ["dice1.svg",
"dice2.svg",
"dice3.svg",
"dice4.svg",
"dice5.svg",
"dice6.svg"];

let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()
        * (7 - 1) + 1);
        console.log(dieOneValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    },
    1000
    );
}