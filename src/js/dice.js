let images = ["dice1-1.png",
"dice_2.png",
"dice_3.png",
"dice_4.png",
"dice_5.png",
"dice_6.png"];

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
        *6);
        console.log(dieOneValue);
    },
    1000
    );
}