var baseURL = "https://opentdb.com/api.php?";
var qAmount = "10";
var qCategory = "";
var qDifficulty = "";
var qType = "";
var queryURL = "";
var sessionToken = "";

function retrieveToken() {
    $.ajax({
        url : "https://opentdb.com/api_token.php?command=request",
        method : "GET"

    }).then(storeToken);

    var storeToken = function(response) {
        sessionToken = response.token;
    }
}

function queryURLBuilder(){
    queryURL = (baseURL + "amount=" + qAmount)
    if (qCategory != "") {
        queryURL += ("&category=" + qCategory);
    }
    if (qType != "") {
        queryURL += ("&type=" + qType);
    }

}