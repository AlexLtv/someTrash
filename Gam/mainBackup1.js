let answer,
 	ans,
 	number = [],
	resultInCowBulls,
	inpAnsw, 
	checker = true,
	tryCounter = 0,
	resultCount = 1;

let numberGenerator = function () {
		number = [];
		function randIntNumber(min, max) {
				var length = max - min + 1;
				var rand = Math.floor(Math.random() * length) + min;
				return rand;
			};                
		 while (number.length < 4) {
		        let randomNumber = randIntNumber(0, 9);
		        if (number.indexOf(randomNumber) == -1) {        
		            number.push(randomNumber);         
		        }
		    }
  };

numberGenerator();

$('.game__container').hide();
$('.results').hide();

/*                            КНОПКИ!                                     */

$('.button__start').click(function(){
	$('.game__container').show();
	$('.results').show();
	$('.button__start').hide();
})

$('.btn__acceptanswer').click(function () {
	 inpAnsw = $('.input-answer').val();
	 validateAnswer(inpAnsw);
	 if (checker) { 
	 	game();
	 };
});

$('.btn__newgame').click( function () {
	tryRenderClear();
	clearResultFields();
	numberGenerator();
	tryCounterClear();
});

/*                            ФУНКЦИИ!                                   */

let validateAnswer = function(x) {
	checker = true;
	if(x == '' || isNaN(x) || x.length !== 4) {
	 	errorMes();
	 } else {
	let localArray = Array.from(x);
	localArray.forEach(function(item, i, localArray) {
	for (let j = 0; j < localArray.length; j++) {
	if (item == localArray[j] && i !== j ) {
	 	errorMes();
	  } 
	 }
	}) 
	 	};
};

let game = function () { 
		tryCounterCalclulate();
		let ansArray = Array.from(inpAnsw);
		console.log(number);
		resultInCowBulls = {
				cow: 0,
				bull: 0
			};
		resultCalculate(ansArray);
		$('.game__result').hide();
		resultRenderShow();
		resultRender();
		tryRender(inpAnsw, resultInCowBulls.bull, resultInCowBulls.cow);
};

let resultRender = function () {
		$('.game_result-bulls').text('БЫКОВ : ' + resultInCowBulls.bull);
		$('.game_result-cows').text('КОРОВ : ' + resultInCowBulls.cow);
};

let resultRenderHide = function () {
		$('.game_result-cows').hide();
		$('.game_result-bulls').hide();
};

let resultRenderShow = function () {
		$('.game_result-cows').show();
		$('.game_result-bulls').show();
};


let errorMes = function () { 
		$('.game__result').show()
						  .text('Введите 4 неповторяющихся числа!' );
		resultRenderHide();
		checker = false;
	   };

let clearResultFields = function () {
		$('.game_result-cows').text('');
		$('.game_result-bulls').text('');
		$('.game__result').text('');
		$('.input-answer').val('');
};

let tryCounterCalclulate = function () {
	tryCounter++;
	$('.game__try-counter').text('Количество попыток:' + tryCounter);
};

let resultCalculate = function (array) {
		array.forEach(function(item, i, array) {
			for (let j = 0; j < 4; j++) {
			if (item == number[j] && i == j) {
			 	resultInCowBulls.bull += 1;
			 	array.splice(j, 1, '');
			 	console.log(array);
			 }
			}
			  });
		array.forEach(function(item, i, array) {
			for (let j = 0; j < array.length; j++) {
			if (item == number[j]) {
			 	resultInCowBulls.cow += 1;
			 }
			}
			  });
};

let tryRender = function (anotherAnswer, bulls, cows) {
	$('.results__value').append('<div class="appended__result">' + '<span class="rescount">' + resultCount++ + '</span>' + '   ' + anotherAnswer + ' быков: ' + bulls + ' коров: ' + cows +  '</div>');
};

let tryRenderClear = function () {
	$('div.results__value').empty();
};

let tryCounterClear = function () {
		tryCounter = 0;
		$('.game__try-counter').text('Количество попыток:' + tryCounter);
};
