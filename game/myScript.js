var myScene, myBackground, myCharacter, myEmotion, myText, myMusic, mySoundEffect; 
var nextScene, nextBackground, nextCharacter, nextEmotion, nextText, nextMusic, nextSoundEffect; 
var sceneArray; //each element of the array will contain each of the above elements

nextBackground = "supermarket.png";
nextCharacter = "amy";
nextEmotion = "neutral";
nextText = "this is the nexttext"
nextMusic = "blank.mp3"

var myMusic = new Audio('music/shake.mp3');
myMusic.play();

//changeScene not yet tested
function changeScene(){
	if (nextBackground != myBackground) { changeBackground() };
	if (nextCharacter != myCharacter) { changeCharacter() } ;
	if (nextEmotion != myEmotion) { changeEmotion() } ;
	if (nextMusic != myMusic) { changeMusic() } ;
	changeText();
	changeSoundEffect();
}

function changeBackground() {
    document.getElementById("background").src = "images/backgrounds/" + nextBackground;
}

function changeCharacter() {
	document.getElementById("character").src = "images/characters/" + nextCharacter + '/' + nextEmotion + ".png";
}

function changeEmotion() {
	document.getElementById("character").src = "images/characters/" + myCharacter + '/' + nextEmotion + ".png";
}

function changeText() {
	document.getElementById("text").innerHTML = nextText;	
}

function changeMusic() {
	myMusic.pause();
	myMusic = new Audio("music/" + nextMusic);
	myMusic.play();
}

function changeSoundEffect() {	
}

function shake(){
	$( "#container" ).effect('shake');
}




