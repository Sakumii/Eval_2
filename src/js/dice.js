
//Dice function//

let images = ["images/dice-01.svg", "images/dice-02.svg", "images/dice-03.svg", "images/dice-04.svg", "images/dice-05.svg", "images/dice-06.svg"];

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
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue - 1]);
        document.querySelector("#round_p1").innerHTML = (dieOneValue);
    },
    2000
    );
}
