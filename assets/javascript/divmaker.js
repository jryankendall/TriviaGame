function makeQuestionDiv() {
    var newDiv = $("<div>");
    newDiv.addClass("col-12 quiz-slot");
    return newDiv;
}

function setQuestionAnswers(question, questionNum) {
    var wrongAnswers = [];
    for (i = 0; i < question.incorrect_answers.length; i++) {
        wrongAnswers.push(question.incorrect_answers[i]);
    }
    var answer1 = "";
    var answer2 = "";
    var answer3 = "";
    var answer0 = "";
    for (u = 0; u < question.incorrect_answers.length; u++) {
        var whichIndex = Math.floor(Math.random() * question.wrongAnswers.length);
        
    }
    for (i = 0; i < question.incorrect_answers.length + 1; i++ ) {
        var newDiv = $("<div>");
        newDiv.addClass("form-check quiz-question-div");

        var newInput = $("<input>");
        newInput.attr("name", "q" + questionNum + "-ans" + i);
        newInput.attr("type", "radio");
        newInput.addClass("form-check-input");
        newInput.val("answer" + i);
        newInput.attr("id", "q" + questionNum + "-ans" + i );
        
        var newLabel = $("<label>");
        newLabel.addClass("form-check-label");
        newLabel.attr("for", "q" + questionNum + "-ans" + i);
        newLabel.text(question.incorrect_answers[i]);

        newDiv.append(newInput);
        newDiv.append(newLabel);

        return newDiv;
    }
}