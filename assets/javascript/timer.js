var timeLimit = ( qAmountInteger * 10 );
var timerRunning = false;
var timeNow = timeLimit;
var intervalId;

function beginTimer() {
    if (!timerRunning) {
        intervalId = setInterval(countDown, 1000);
        timerRunning = true;
    }
}

function haltTimer() {
    clearInterval(intervalId);
    timerRunning= false;
}

function countDown() {
    timeNow--;

    $("#time-display").text(timeNow);

    if (timeNow <= 0) {
        haltTimer();
        sendQuizAnswers();
        quizSubmitted = true;
    }
}