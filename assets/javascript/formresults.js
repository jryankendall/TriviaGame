function formResults() {
    console.log("Heck");
    var formCategory = $(".form-check-input[name='category-radios']:checked").val();
    var formType = $(".form-check-input[name='type-radios']:checked").val();
    console.log(formCategory);
    console.log(formType);

    switch (formCategory) {
        case "sports":
            qCategory = "21";
            break;
        case "video-games":
            qCategory = "15";
            break;
        case "computers":
            qCategory = "18";
            break;
        case "books":
            qCategory = "10";
            break;
        default:
            qCategory = "";
    }

    switch (formType) {
        case "any":
            qType = "";
            break;
        case "multiple-choice":
            qType = "multiple";
            break;
        case "true-false":
            qType = "boolean";
            break;
        default: 
            qType = "";
    }

    queryURLBuilder();
    hideSetupPane();
    showQuizPane();
    getQuestions();

}