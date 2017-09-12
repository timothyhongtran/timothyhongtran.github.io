var myScene, myBackground, myCharacter, myEmotion, myText, myMusic, mySoundEffect; 
var nextScene, nextBackground, nextCharacter, nextEmotion, nextText, nextMusic, nextSoundEffect; 
var sceneArray; //each element of the array will contain each of the above elements

nextBackground = "supermarket.png";
nextCharacter = "amy";
nextEmotion = "neutral";


// var audio = new Audio('shake.mp3');
// audio.play();

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
}

function changeMusic() {

}

function changeSoundEffect() {	
}


