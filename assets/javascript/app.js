function hideSetupPane() {
    $(".quiz-setup-pane").addClass("d-none");
    $(".quiz-setup-pane").removeClass("d-flex");
}

function showQuizPane() {
    $(".whole-quiz-container").removeClass("d-none");
    $(".whole-quiz-container").addClass("d-flex");
}

$( function() {
    initHandlers();
})

function initHandlers() {
    $(".trivia-response-button").on("click", function() {

    });

    $("#begin-button").on("click", function() {
        formResults();
    })
}

function initSubmitHandler() {
    $("#send-quiz-button").on("click", function() {
        sendQuizAnswers();
        quizSubmitted = true;
    })
}


function getQuestions() {
    $.ajax({
        url : queryURL,
        method : "GET"
    }).then(function(response){
        printQuestions(response);
    });
}

var triviaObjects;

function printQuestions(response) {
    triviaObjects = response.results;
    for (var i = 0; i < triviaObjects.length; i++) {
        setQuestionAnswers(triviaObjects[i], i);
    }

    printSubmitButton();
}

var quizSubmitted = false;

function printSubmitButton() {
    var newButton = $("<button>");
    newButton.attr("type", "button");
    newButton.addClass("btn btn-danger")
    newButton.attr("id", "send-quiz-button");
    newButton.html("<p>Submit Answers</p>");
    $("#quiz-form").append(newButton);

    initSubmitHandler();
}