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

    $("#send-quiz-button").addClass("d-none");

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
    $(".form-check-input").prop("disabled", true);

    var newDiv = $("<div>");
    var newScoreDisplay = $("<h3>");

    newDiv.addClass("col-12 d-flex flex-column justify-content-center");
    newScoreDisplay.attr("id", "score-display-number");
    newDiv.html("<h2>Thine Total Score Be:</h2><br>");
    newScoreDisplay.html(scorePercent + "%");
    newDiv.append(newScoreDisplay);

    $("#results-display-div").append(newDiv);

    var answersList = $("<div>");

    answersList.addClass("col-12 offset-0 col-md-6 offset-md-3");
    answersList.attr("id", "answers-list");
    for (var i = 0; i < correctArray.length; i++) {
        var newPara = $("<p>");
        newPara.addClass("answer-para");
        if (correctArray[i]) {
            newPara.html(i+1 + ". Correct.");
        }

        else if (!correctArray[i]) {
            newPara.html(i+1 + ". Incorrect. Answer: " + triviaObjects[i].correct_answer);
        }

        answersList.append(newPara);
    }

    $("#results-display-div").append(answersList);
    if (scorePercent <= 1) {
        var newPara = $("<p>");
        newPara.text("Not a single one correct at all? Really? Did you even answer any of them? Or did you just scroll down to the bottom to press Submit and test what would happen? I really hope it's the latter. Unbelievable.")
        answersList.append(newPara);
    }

}