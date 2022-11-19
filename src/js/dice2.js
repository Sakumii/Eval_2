
var scores, roundScore, activePlayer, dice, gamePlaying;

init();

var lastDice;

document.querySelector('.roll-button').addEventListener('click', function() {
    
    if (gamePlaying) {

        //1. random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. display the result

        document.getElementById('dice').src = 'images/dice-' + dice + '.svg';
 

        //3.Update the round score If the rolled number was NOT a 1

        if (dice === 6 && lastDice === 6) {
            //player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = (roundScore);
        } else {
            //next player
            nextPlayer();
        }

        lastDice = dice;
    }

});
document.querySelector('.hold-button').addEventListener('click', function() {
    if (gamePlaying) {
        //add current score to the global score
        scores[activePlayer] += roundScore;

        //Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var winningScore = 100;

        // check if player win the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-section').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-section').classList.remove('active');
            gamePlaying = false;
        } else {
            //next player
            nextPlayer();
        }
    }
})
function nextPlayer() {
    //next player
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;

    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';

    //document.querySelector('.player-1-section').classList.remove('active');
    //document.querySelector('.player-2-section').classList.add('active');

    document.querySelector('.player-1-section').classList.toggle('active');
    document.querySelector('.player-2-section').classList.toggle('active');

}

document.querySelector('.ng-button').addEventListener('click', init);

function init() {
    scores = [0, 0]
    activePlayer = 1;
    roundScore = 0;
    gamePlaying = true;


    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.querySelector('#name-1').textContent = 'Player 1';
    document.querySelector('#name-2').textContent = 'Player 2';
    document.querySelector('.player-1-section').classList.remove('winner');
    document.querySelector('.player-2-section').classList.remove('winner');
    document.querySelector('.player-1-section').classList.remove('active');
    document.querySelector('.player-2-section').classList.remove('active');
    document.querySelector('.player-1-section').classList.add('active');

}

