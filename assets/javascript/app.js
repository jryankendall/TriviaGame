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
    for (i = 0; i < triviaObjects.length; i++) {
        setQuestionAnswers(triviaObjects[i], i);
    }
}