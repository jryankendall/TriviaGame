function makeQuestionDiv() {
    var newDiv = $("<div>");
    newDiv.addClass("col-12 quiz-slot");
    return newDiv;
}


//This function is called once for every single question of the trivia quiz
//It puts the answers in random order, basically
function setQuestionAnswers(questionGot, questionNum) {
    var unrandAnswers = [];
    var answersArr = [];
    var rightAnswer = questionGot.correct_answer;
    var rightAnswerAssigned = false;
    var correctChance = Math.random();

    //sets up the whole question/answer container
    var newSlotDiv = $("<div>");
    newSlotDiv.addClass("quiz-slot");
    newSlotDiv.attr("id", "question-" + questionNum + "-div");
    var newH3 = $("<h3>");
    newH3.addClass("question-header");
    newH3.attr("id", "question-" + questionNum + "-header");
    newH3.html(questionNum+1 + ". " + questionGot.question);
    newSlotDiv.append(newH3);

    for (var i = 0; i < questionGot.incorrect_answers.length; i++) {
        unrandAnswers.push(questionGot.incorrect_answers[i]);
    }

    for (var i = 0; i < questionGot.incorrect_answers.length + 1; i++) {

        //Gives every answer essentially a 1 in X chance to be filled with the right answer, where X is 
        //the number of unfilled answers left. If it gets to the last entry and the right answer is still not a choice
        // then it makes D the correct answer.
        //Skips this "if" entirely if the right answer has already been assigned to a slot
        if (correctChance <= (1 / (unrandAnswers.length + 1 ) ) && !rightAnswerAssigned) {
            answersArr.push(rightAnswer);
            rightAnswerAssigned = true;
        } 
        
        //Takes a random value from the list of (wrong) answers, pushes it into the array of answers, and
        // "pops" that answer off the list of wrong answers so it isn't accidentally added twice, and it shortens
        // the array
        else { 
            var answerSelect = Math.floor(Math.random() * unrandAnswers.length);
            var lastItemIndex = (unrandAnswers.length - 1);
            var lastItem = unrandAnswers[lastItemIndex];
            var selectedAns = unrandAnswers[answerSelect];
            unrandAnswers[lastItemIndex] = selectedAns;
            unrandAnswers[answerSelect] = lastItem;

            answersArr.push(unrandAnswers.pop());
        }
    }

    //Actually printing the answers out in the document
    for (var i = 0; i < answersArr.length; i++) {
        var newDiv1 = $("<div>");
        var newInput = $("<input>");
        var newLabel = $("<label>");
        var choiceLetters = ["A", "B", "C", "D"];

        //adding classes to the new elements
        newDiv1.addClass("question-answer form-check");
        newInput.addClass("form-check-input");
        newLabel.addClass("form-check-label");

        //assigning the necessary attributes to the input and label
        newInput.attr("type", "radio");
        newInput.attr("name", "q-" + questionNum + "-answers");
        newInput.attr("id", "q-" + questionNum + "-ans-" + i);
        newInput.val(answersArr[i]);

        //labels
        newLabel.attr("for", "q-" + questionNum + "-ans-" + i);
        newLabel.html(" " + choiceLetters[i] + " - " + answersArr[i]);

        newDiv1.append(newInput);
        newDiv1.append(newLabel);
        newSlotDiv.append(newDiv1);


    }

    $("#quiz-form").append(newSlotDiv);

}
