var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("textarea");
var outputText = document.querySelector("#outputBox");

 var serverUrl = "https://api.funtranslations.com/translate/minion.json";


//  Key value pair  
function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text
}
//Error Handle
function errorHandler(error){
    console.log("Error occured",error);
    alert("Something wrong with server!! Try after sometime");
    
}
// taking input
function clickHandler() {
    var inputTxt = inputText.value;
// calling the server for processing

    fetch(getTranslationUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated; // output 
        outputText.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);