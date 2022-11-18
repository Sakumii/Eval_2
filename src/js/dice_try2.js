
var scores, roundScore, activePlayer, dice, gamePlaying;

init();

var lastDice;

document.querySelector('.roll-button').addEventListener('click', function() {
    
    if (gamePlaying) {

        //1. random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. display the result

        document.getElementById('dice-1').src = 'images/dice-' + dice + '.svg';
 

        //3.Update the round score If the rolled number was NOT a 1

        if (dice === 6 && lastDice === 6) {
            //player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).innerHTML = '0';
            nextPlayer();
        } else if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).innerHTML = (roundScore);
        } else {
            //next player
            nextPlayer();
        }

        lastDice = dice;
    }

});
