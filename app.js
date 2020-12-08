var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("textarea");
var outputText = document.querySelector("#outputText");

btnTranslate.addEventListener("click",function translating(){
    console.log("clicked");
    console.log("input :",inputText.value);
    console.log("output :" + outputText.innerHTML);
});

translating();