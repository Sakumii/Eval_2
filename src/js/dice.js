//Dice function//

let images = ["images/dice-01.svg", "images/dice-02.svg", "images/dice-03.svg", "images/dice-04.svg", "images/dice-05.svg", "images/dice-06.svg"];

let diceImg = document.querySelectorAll("img");

function roll(){
    diceImg.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function() {
        diceImg.forEach(function(die){
            die.classList.remove("shake");
        });

        let diceValue = Math.floor(Math.random() * (7 - 1) + 1);
        console.log(diceValue);
        document.querySelector('#die-1').setAttribute("src", images[diceValue - 1]);
        document.querySelector("#round-1").innerHTML = (diceValue);
    },
    1000
    );

}
