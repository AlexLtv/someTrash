


// Card variables
let suits = ['Треф', 'Бубна', 'Червей', 'Пика'];
let values = ['Туз', 'Король','Дама', 'Валет', 
'Десятка', 'Девятка', 'Восьмерка', 'Семерка', 'Шестерка',
 'Пятерка', 'Четверка', 'Тройка', 'Двойка'];

// DOM variables
let welcomeText = document.getElementById("welcome-text");
let newGameButton = document.getElementById ('new-game-button');
let hitButton = document.getElementById ('hit-button');
let stayButton = document.getElementById ('stay-button');



// Game variables
let gameStarted = false,
	gameOver = false,
	playerWon = false,
	dealerCards = [],
	playerCards = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];


hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();




newGameButton.addEventListener ('click', function() {
	gameStarted = true;
	gameOver = false;
	playerWon = false;

	deck = createDeck();
	shuffleDeck(deck);
	playerCards = [getNextCard(), getNextCard()];
	dealerCards = [getNextCard(), getNextCard()];


	// welcomeText.innerText = "Игра начинается..."
	newGameButton.style.display = 'none';
	hitButton.style.display = 'inline';
	stayButton.style.display = 'inline';
	showStatus();
});

hitButton.addEventListener('click', function() {
	playerCards.push(getNextCard());
	checkForEndOfGame();
	showStatus();
});

stayButton.addEventListener('click', function() {
	gameOver = true;
	checkForEndOfGame();
	showStatus();
});

function createDeck() {
 let deck = [];
 for(let suitIdx=0; suitIdx < suits.length; suitIdx++) {
	for( let valueIdx = 0; valueIdx < values.length; valueIdx++) {
		let card = {
				suit: suits[suitIdx],
				value: values[valueIdx]
		   };
		deck.push( card );
		}
	}
	return deck;
};


function shuffleDeck (deck) {
	for (let i = 0; i < deck.length; i++) {
		let swapIdx = Math.trunc(Math.random() * deck.length);
		let tmp = deck[swapIdx];
		deck[swapIdx] = deck[i];
		deck[i] = tmp;
	}
}

function getCardString (card) {
	return card.value + ' ' + card.suit;
}

function getNextCard(){
	return deck.shift();
};

function getCardNumericValue(card) {
	switch(card.value) {
		case 'Туз':
		 return 1;
		case 'Двойка':
		 return 2;
		case 'Тройка':
		 return 3;
		case 'Четверка':
		 return 4;
		case 'Пятерка':
		 return 5;
		case 'Шестерка':
		 return 6;
		case 'Семерка':
		 return 7;
		case 'Восьмерка':
		 return 8;
		case 'Девятка':
		 return 9;
		default:
		 return 10;
	}
}


function getScore(cardArray) {
	let score = 0;
	let hasAce = false;
	for (let i = 0; i < cardArray.length; i++) {
		let card = cardArray[i];
		score += getCardNumericValue(card);
		if(card.value === 'Туз'){
			hasAce = true;
		}
	}
	if (hasAce && score + 10 <= 21) {
		return score + 10;
	}
	return score;
}

function checkForEndOfGame() {
	updateScores();

	if (gameOver) {
		// let dea take cards
		while (dealerScore < playerScore 
			&& playerScore <= 21
			&& dealerScore <= 21) {
		dealerCards.push(getNextCard());
		updateScores();
		}
	}

	if (playerScore > 21) {
		playerWon = false;
		gameOver = true;
	}
	else if (dealerScore > 21) {
		playerWon = true;
		gameOver = true;
	}
	else if(gameOver) {

		if (playerScore > dealerScore) {
			playerWon = true;
		}
		else {
			playerWon = false;
		}
	}
}


function updateScores() {
	dealerScore = getScore(dealerCards);
	playerScore = getScore(playerCards);
}

function showStatus() {
	if (!gameStarted) {
		welcomeText.innerText = "Welcome to Blackjack"
		return;
	}

	let dealerCardString = '';
	for (let i = 0; i < dealerCards.length; i++) {
		dealerCardString += getCardString(dealerCards[i]) + '\n';
	}

	let playerCardString = '';
	for (let i = 0; i < playerCards.length; i++) {
		playerCardString += getCardString(playerCards[i]) + '\n';
	}

	updateScores();

	welcomeText.innerText = 
		'У дилера: \n' +
		dealerCardString +
		'(score: '+ dealerScore + ')\n\n' +

		'У игрока: \n' +
		playerCardString +
		'(score: '+ playerScore + ')\n\n';

	if (gameOver) {
		if (playerWon) {
			welcomeText.innerText += "Вы выиграли!";
		}
		else {
			welcomeText.innerText += "Вы Проиграли!";
		}
		newGameButton.style.display = 'inline';
		hitButton.style.display = 'none';
		stayButton.style.display = 'none';

	}

}




