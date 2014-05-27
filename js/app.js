$(document).ready(function(){
	function createQuestion(question,answer,dummyanswer1,dummyanswer2,dummyanswer3,funFact){
		this.question = question;
		this.answer = answer;
		this.dummyanswer1 = dummyanswer1;
		this.dummyanswer2 = dummyanswer2;
		this.dummyanswer3 = dummyanswer3;
		this.funFact=funFact
	}
	var questionAnswerArray=[];
	questionAnswerArray.push(new createQuestion('Q1', 'A1', 'Q1DA1', 'Q1DA2', 'Q1DA3','funFact'));
	questionAnswerArray.push(new createQuestion('Q2', 'A2', 'Q2DA1', 'Q2DA2', 'Q2DA3','funFact'));
	questionAnswerArray.push(new createQuestion('Q3', 'A3', 'Q3DA1', 'Q3DA2', 'Q3DA3','funFact'));
	questionAnswerArray.push(new createQuestion('Q4', 'A4', 'Q4DA1', 'Q4DA2', 'Q4DA3','funFact'));
	questionAnswerArray.push(new createQuestion('Q5', 'A5', 'Q5DA1', 'Q5DA2', 'Q5DA3','funFact'));


	var randomNumber = Math.floor(Math.random() * 5);
	var questionedArray = [5];
	var gameStatus="hasNotStarted";

	$('.answer').click(function(event){
		event.preventDefault();
		hideShowFunction();


		if((questionedArray.length-1)!=(questionAnswerArray.length)){
			while (questionedArray.indexOf(randomNumber)>0){
					randomNumber = Math.floor(Math.random() * 5);
				}
			console.log(questionAnswerArray[randomNumber].question);
			console.log(randomNumber);
			questionedArray.push(randomNumber);
			gameStatus="questioned"
			$("div.a1").replaceWith('<div class="answer a1">'+questionAnswerArray[randomNumber].answer +'</div>');
			$("div.a2").replaceWith('<div class="answer a2">'+questionAnswerArray[randomNumber].dummyanswer1 +'</div>');
			$("div.a3").replaceWith('<div class="answer a3">'+questionAnswerArray[randomNumber].dummyanswer2 +'</div>');
			$("div.a4").replaceWith('<div class="answer a4">'+questionAnswerArray[randomNumber].dummyanswer3 +'</div>');
		}
		else{
			hideShowFunction();
			$("div.question").replaceWith('<div class="question">You\'re Finished !</div>');
		};


	});


	/*List of Functions*/
	function hideShowFunction(){
		$(".logo").addClass("hide");
		$(".question").removeClass("hide");
		$(".question").removeClass("initial")
	}


});