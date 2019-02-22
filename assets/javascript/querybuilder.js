var baseURL = "https://opentdb.com/api.php?";
var qAmount = "10";
var qCategory = "";
var qDifficulty = "";
var qType = "";
var queryURL = "";
var sessionToken = "";

/*This function proved to be unnecessary, but will include for posterity. Originally was going to use the API's session
token feature to make sure you wouldn't get the same questions if you refreshed, but this functionality wasn't really 
worth it for the extra headaches it would've caused. */

/* function retrieveToken() {
    $.ajax({
        url : "https://opentdb.com/api_token.php?command=request",
        method : "GET"

    }).then(storeToken);

    var storeToken = function(response) {
        sessionToken = response.token;
    }
} */


// Builds the API url. Most values are set by the script rather than by the player, but can be altered and functionality
// should still be fine

//Checks to see if the player actually selected an option, appends nothing if they didn't, otherwise adds the appropriate text to the url
function queryURLBuilder(){
    queryURL = (baseURL + "amount=" + qAmount)
    if (qCategory != "") {
        queryURL += ("&category=" + qCategory);
    }
    if (qType != "") {
        queryURL += ("&type=" + qType);
    }

    if (qDifficulty != "") {
        queryURL += ("&difficulty=" + qDifficulty);
    }

}