var myScene, myBackground, myCharacter, myEmotion, myText, myMusic, mySoundEffect; 
var nextScene, nextBackground, nextCharacter, nextEmotion, nextText, nextMusic; 
var sceneArray; //each element of the array will contain each of the above elements

myBackground = "images/backgrounds/berkeleyCampus.png";
myCharacter = "images/characters/amy/blush.png";
myEmotion = "images/characters/amy/blush.png";
myText = "The man moves to the table and shuffles some papers to the side with the back of his hand. He places the glass, half filled with an amber liquid, down where the papers once lay."

var scene1 = [
["restaurant.jpg", "Ethan", "neutral", "Tako Sushi – Berkeley, CA - 7:34 PM", "shake", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "So you’ve been roommates with Daniel since freshman year?", "", "", ""]
];

// var myMusic = new Audio('music/shake.mp3');
// myMusic.play();

//still incomplete
function parseArray(){
	nextBackground = scene1[0][0];
	nextCharacter = scene1[0][1];
	nextEmotion = scene1[0][2];
	nextText = scene1[0][3]
	scene1.shift();
}
//still incomplete
function changeScene(){
	parseArray();
	if (nextBackground != myBackground) { changeBackground() };
	if (nextCharacter != myCharacter) { changeCharacter() } ;
	// if (nextEmotion != myEmotion) { changeEmotion() } ;
	// if (nextMusic != myMusic) { changeMusic() } ;
	changeText();
	// changeSoundEffect();
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
	myMusic = new Audio("music/" + nextMusic + ".mp3");
	myMusic.play();
}

function playSoundEffect() {	
	mySoundEffect = new Audio("sounds/" + mySoundEffect + ".mp3");
	mySoundEffect.play();
}

function shake(){
	$( "#container" ).effect('shake');
}

function characterFadeIn(){
	$("#character").fadeIn();
}

function characterFadeOut(){
	$("#character").fadeOut();
}


