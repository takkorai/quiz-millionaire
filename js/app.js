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
	var questionedArray = [10];
	var gameStatus="hasNotStarted";
	var countCorrect = 0;
	var countQuestions =0;



	$('.answer').click(function(event){
		event.preventDefault();
		hideShowFunction();
		if(countQuestions<=(questionAnswerArray.length)){
			countQuestions++;
			console.log(questionedArray.length-1);
			console.log(questionAnswerArray.length);
			console.log(questionedArray);
			var userAnswer = $(this).text();

			answerEvaluation(userAnswer);



			if((questionedArray.length)-1==(questionAnswerArray.length)) {}else
			{
				while (questionedArray.indexOf(randomNumber)>0){
					randomNumber = Math.floor(Math.random() * 5);
				}
				$("div.questioncount").text(countQuestions+"/5 Questions");
				questionedArray.push(randomNumber);
				gameStatus="questioned"
				$("div.question").text(questionAnswerArray[randomNumber].question);
				$("div.a1").text(questionAnswerArray[randomNumber].answer);
				$("div.a2").text(questionAnswerArray[randomNumber].dummyanswer1);
				$("div.a3").text(questionAnswerArray[randomNumber].dummyanswer2);
				$("div.a4").text(questionAnswerArray[randomNumber].dummyanswer3);
			}
			
			

		}
		else{
			hideShowFunction();
			answerEvaluation(userAnswer);
			gameStatus="completed"
			$("div.question").text('You\'re Finished !' + 'You got'+countCorrect+' questions correct!' );
		};

	});






	/*List of Functions*/
	
	function hideShowFunction(){
		$(".logo").addClass("hide");
		$(".question").removeClass("hide");
		$(".question").removeClass("initial")
	}
	function answerEvaluation(userAnswer){
		if(userAnswer==questionAnswerArray[randomNumber].answer && gameStatus!="completed") {
			countCorrect++;
		};
		console.log("userAnswer"+userAnswer);
		console.log(gameStatus);
		console.log("countCorrect"+countCorrect);
	}

});