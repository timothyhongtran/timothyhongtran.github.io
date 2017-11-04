var myScene, myBackground, myCharacter, myEmotion, myText, myMusic, shake;
var nextBackground, nextCharacter, nextEmotion, nextText, nextMusic, nextSoundEffect;
var currentScene = []; //the actual scene array

myScene = 1; 
myBackground = "images/backgrounds/berkeleyCampus.png";
myCharacter = "images/characters/amy/blush.png";
myEmotion = "images/characters/amy/blush.png";
myText = "";
nextCharacter = "";

var myMusic = "none";
var musicPlayer = new Audio('none.mp3');
musicPlayer.play();

//still incomplete 
function parseArray(){
	currentScene = "scene" + myScene; 
	currentScene = window[currentScene];

	nextBackground = currentScene[0][0];
	nextCharacter = currentScene[0][1];
	nextEmotion = currentScene[0][2];
	nextText = currentScene[0][3];
	nextMusic = currentScene[0][4];
	nextSoundEffect = currentScene[0][5];
	shake = currentScene[0][6];
	currentScene.shift();
}

//still incomplete
function changeScene(){
	
	//force player to select choice if watershed moment
	if(currentScene.length == 1){
		document.getElementById("text").innerHTML = currentScene[0][0];	
		showActions();
		return;
	}	

	//otherwise continue as normal
	parseArray();
	if (nextBackground != myBackground) { changeBackground() };
	if (nextCharacter != myCharacter) { changeCharacter() } else{changeEmotion()} ; //else same character but a change in emotion
	if (nextMusic != myMusic) { changeMusic() } ;
	changeText();
	playSoundEffect();
	if (shake == "shake") { 	//shakes the main div
		$(document).ready(function(){
			$( "#container" ).effect('shake');
	});
 };
}

//still incomplete
function showActions(){
	if (choiceDict[myScene].length == 2){ //if there are only two options
		$(document).ready(function(){
        $('#action1').css('visibility', 'visible');
    });

    $(document).ready(function(){
        $('#action2').css('visibility', 'visible');
    });
	} else{ //if there are 3 options
		
	$(document).ready(function(){
        $('#action1').css('visibility', 'visible');
    });

    $(document).ready(function(){
        $('#action2').css('visibility', 'visible');
    });

    $(document).ready(function(){
        $('#action3').css('visibility', 'visible');
    });
	}
	
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
	if (nextCharacter != ""){
		nextText = nextCharacter + "<br>" + nextText;
	}
	document.getElementById("text").innerHTML = nextText;	
}

function changeMusic() {
	myMusic = nextMusic;
	musicPlayer.pause();
	musicPlayer = new Audio("music/" + nextMusic + ".mp3");
	musicPlayer.loop = true;
	musicPlayer.play();
}

function playSoundEffect() {	
	nextSoundEffect = new Audio("sounds/" + nextSoundEffect + ".mp3");
	nextSoundEffect.play();
}


function action1(){
    $(document).ready(function(){
        $('#action1').css('visibility', 'hidden');
    });}

function action2(){
    $(document).ready(function(){
        $('#action2').css('visibility', 'hidden');
    });}

function action3(){
    $(document).ready(function(){
        $('#action3').css('visibility', 'hidden');
    });}

//key= what the current scene is
//value = what the next scene depending on what player selects
var choiceDict = {
	1 : [2,3,4]
};

//All dialogue arrays below
// var scene0 = [
// ["restaurant.jpg", "Ethan", "neutral", "The man moves to the table and shuffles some papers to the side with the back of his hand. He places the glass, half filled with an amber liquid, down where the papers once lay.", "shake", "", ""]
// ];



var scene1 = [
["restaurant.jpg", "", "", "Tako Sushi – Berkeley, CA", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "So you’ve been roommates with Daniel since freshman year?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "neutral", "Yeah we’ve been together all four years at Berkeley. We were actually just paired up randomly when we first got here.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "surprise", "No kidding! That’s so cool that you guys were complete randos and are like best friends now.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "neutral", "Yeah it’s really cool!", "brodyquest", "", ""],
["restaurant.jpg", "", "", "There’s a lingering pause in the air. Both shoot a look at the other and then down at their plates.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "So what-", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "neutral", "How do-", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "sweat", "Go ahead.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "No please go first.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "worried", "Uh, okay so what are you studying again?", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "I’m in Haas. That’s actually how I met Daniel. We were in the same study group for an econ class back in freshman year.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "Oh well it wasn’t even a study group because we were done with midterms by then.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "happy", "I think it was at post midterm drinks actually. Yes, right, we met at the bar.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "neutral", "Oh nice.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "Yeah... Uh so what do you do for fun?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "sweat", "Fun?", "brodyquest", "", ""],
["restaurant.jpg", "", "", "Ethan rubs his hand on the back of his neck and swings it back to the table...", "brodyquest", "", ""],
["restaurant.jpg", "", "", "...sending a full glass of water shattering onto the table.", "brodyquest", "shatter", "shake"],
["restaurant.jpg", "Ethan", "worried", "Oh shit!", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "worried", "Don't worry! I'll handle this!", "brodyquest", "", ""],
["restaurant.jpg", "", "", "You are about to make you’re a game choice. Your choices will determine how the story unfolds. Some choices have minimal consequences, some major.", "brodyquest", ""],
["Mop up the water.","Push the water off the table.","Do nothing."]
];

var scene2 = [
["restaurant.jpg", "", "", "Secne2", "brodyquest", "", ""],
["restaurant.jpg", "", "", "Scene2 again", "brodyquest", "", ""],
];

var scene3 = [
["restaurant.jpg", "", "", "Secne3", "brodyquest", "", ""],
["restaurant.jpg", "", "", "Scene3 again", "brodyquest", "", ""],
];

var scene4 = [
["restaurant.jpg", "", "", "Secne4", "brodyquest", "", ""],
["restaurant.jpg", "", "", "Scene4 again", "brodyquest", "", ""],
];

