function sendQuizAnswers() {
    var correctQuestions = [];
    var numCorrect = 0;
    var numWrong = 0;
    var playerScorePercent = 0;
    for (var i = 0; i < triviaObjects.length; i++) {
        var playerAnswer = $(".form-check-input[name='q-" + i + "-answers']:checked");
        var correctAnswer = triviaObjects[i].correct_answer;

        if (playerAnswer.val() == correctAnswer) {
            correctQuestions.push(true);
            numCorrect++;
        } else

        { 
            correctQuestions.push(false);
            numWrong++;
        }
    }

    playerScorePercent = Math.floor((numCorrect / (triviaObjects.length)) * 100);

    displayPlayerScore(playerScorePercent, correctQuestions);

}

function displayPlayerScore(scorePercent, correctArray) {
    for (var i = 0; i < correctArray.length; i++) {
        if (correctArray[i]) {
            console.log(i + ": Correct");
        }
        else if
        (!correctArray[i]) {
            console.log(i + ": Incorrect");
            console.log("Correct Answer: " + triviaObjects[i].correct_answer);
        }
    }

    console.log("Player Score: " + scorePercent + "% Correct");
}