var inputText = prompt("Tell me your words:");

var firstLetter = inputText.charAt(0).toUpperCase();
var lastLetter = inputText[inputText.length -1].toUpperCase();


alert(lastLetter + " " + firstLetter);
