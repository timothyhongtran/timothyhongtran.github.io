var myScene, myMusic, shake;
var nextBackground, nextCharacter, nextEmotion, nextText, nextMusic, nextSoundEffect;
var currentScene; //copy of the actual scene array that will be destroyed

myScene = 1; 

var myMusic = "none";
var musicPlayer = new Audio('none.mp3');
musicPlayer.play();

function newGame(){
	$('#newGame').css('visibility', 'hidden');
	$('#continueGame').css('visibility', 'hidden');
	$('#startScreen').css('display', 'none');
	$('#mainScreen').css('display', 'block');
}

function establishNewScene(){
	currentScene = "scene" + myScene; 
	currentScene = window[currentScene].slice();
}

function parseArray(){
	nextBackground = currentScene[0][0];
	nextCharacter = currentScene[0][1];
	nextEmotion = currentScene[0][2];
	nextText = currentScene[0][3];
	nextMusic = currentScene[0][4];
	nextSoundEffect = currentScene[0][5];
	shake = currentScene[0][6];
}

function changeScene(){	
	if(currentScene.length == 1){
		document.getElementById("text").innerHTML = "";	
		showActions();
		return;
	}	
	parseArray();
	currentScene.shift();
	changeBackground();
	changeCharacter(); //else same character but a change in emotion
	if (nextMusic != myMusic) { changeMusic() } ;
	changeText();
	playSoundEffect();
	if (shake == "shake") { 	//shakes the main div
		$(document).ready(function(){
			$( "#mainScreen" ).effect('shake');
	});
 };
}

function showActions(){
	if (choiceDict[myScene].length == 1){ //if there are only two options
		$(document).ready(function(){
        $('#action1text').html(currentScene[0][0]);
        $('#action1').css('visibility', 'visible');
    });
	} else if (choiceDict[myScene].length == 2){ //if there are only two options
		$(document).ready(function(){
        $('#action1text').html(currentScene[0][0]);
        $('#action1').css('visibility', 'visible');
    });
    $(document).ready(function(){
        $('#action2text').html(currentScene[0][1]);
        $('#action2').css('visibility', 'visible');
    });
	} else{ //if there are 3 options
	$(document).ready(function(){
        $('#action1text').html(currentScene[0][0]);
        $('#action1').css('visibility', 'visible');
    });
    $(document).ready(function(){
        $('#action2text').html(currentScene[0][1]);
        $('#action2').css('visibility', 'visible');
    });
    $(document).ready(function(){
        $('#action3text').html(currentScene[0][2]);
        $('#action3').css('visibility', 'visible');
    });
	}
}

function hideAllActions(){
	$('#action1').css('visibility', 'hidden');
	$('#action2').css('visibility', 'hidden');
	$('#action3').css('visibility', 'hidden');
}

function action1(){
    hideAllActions();
    myScene = choiceDict[myScene][0];
    establishNewScene();
    parseArray();
}

function action2(){
    hideAllActions();
    myScene = choiceDict[myScene][1];
    establishNewScene();
    parseArray();
}

function action3(){
	hideAllActions();
	myScene = choiceDict[myScene][2];
    establishNewScene();
    parseArray();

}

function changeBackground() {
    document.getElementById("background").src = "images/backgrounds/" + nextBackground;
}

function changeCharacter() {
	document.getElementById("character").src = "images/characters/" + nextCharacter + '/' + nextEmotion + ".png";
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

//key= what the current scene is
//value = what the next scene depending on what player selects
var choiceDict = {
	1 : [2,3,4],
	2 : [5, 5],
	3 : [5, 5],
	4 : [5, 5],
	5 : [6]
};

//All dialogue arrays below
var scene1 = [
["restaurant.jpg", "Tiffany", "neutral", "So you’ve been roommates with Daniel for how long again?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "neutral", "We’ve been together pretty much our entire time at college. We were actually just paired up randomly when we first got here.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "shock", "No kidding! That’s so cool that you guys were complete randos and are like best friends now.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "neutral", "Yeah it’s really cool huh...", "brodyquest", "", ""],
["restaurant.jpg", "", "", "There’s a lingering pause in the air. Both shoot a look at the other and then down at their plates.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "So what-", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "neutral", "How do-", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Go ahead.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "shock", "No please go first.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Uh okay. So... so what are you studying again?", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "Business! That’s actually how I met Daniel. We were in the same study group for an econ class back in freshman year.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "Oh well it wasn’t even a study group because we were done with midterms by then.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "laugh", "I think it was at post midterm drinks actually. That's right! We met at the bar actually.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Oh nice.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "neutral", "Yeah... So... what do you do for fun?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "sad", "Fun?", "brodyquest", "", ""],
["restaurant.jpg", "", "", "Ethan rubs his hand on the back of his neck and swings it back to the table...", "brodyquest", "", ""],
["restaurant.jpg", "", "", "...sending a full glass of water shattering onto the table.", "brodyquest", "shatter", "shake"],
["restaurant.jpg", "Ethan", "shock", "Oh no!", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Don't worry! I'll handle this!", "brodyquest", "", ""],
["restaurant.jpg", "", "", "You are about to make you’re a game choice. Your choices will determine how the story unfolds. Some choices have minimal consequences, some major.", "brodyquest", ""],
["Mop up the water with something nearby","Push the water off the table","Drink the spilt water"]
];

var scene2 = [
["restaurant.jpg", "", "", "Ethan grabs something nearby and dumps it on the water. He moves back and forth in a circle mopping the mess.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "laugh", "See no harm, no foul right? Ha ha.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "shock", "Oh my god! Stop!", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "annoy", "That's my cardigan you're using!", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Oh no! Wait sorry!", "brodyquest", "", ""],
["restaurant.jpg", "", "", "Ethan stops and writhes the water out of the cardigan onto the floor. He hands it back.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "sad", "So... No harm, no foul?", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "annoy", "...", "brodyquest", "", ""],
["restaurant.jpg", "", "", "10 minutes later", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "laugh", "...and then he said, \"no one does that, not on my watch!\"", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "laugh", "Funny huh?", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "sad", "Wait that's horrible. How is that funny?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Oh it's because at the beginning of the joke I said he lost his watch remember? So it's like a pun.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "sad", "But what about the girl being yanked around by the other guy?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "No- that's not the point! The point is the \"not on my watch\" part is a play on words!", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "cry", "Sorry I just can't get over the abuse in this story. It's just so sad.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "Uh, yeah okay sure.", "brodyquest", "", ""],
["restaurant.jpg", "", "", "30 minutes later", "brodyquest", "", ""],
["restaurant.jpg", "", "", "The waiter comes by and places the a leather bound check holder in the center of the table.", "brodyquest", "", ""],
["Pay the bill", "Split bill"]
];


var scene3 = [
["restaurant.jpg", "", "", "Ethan grabs a handful of napkins and pushes the water off the table.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "shock", "Stop! You're getting it all over my shoes!", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Oh no! Wait sorry!", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "sad", "Guess I should've looked where I was pushing it off huh? Heh...", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "annoy", "...", "brodyquest", "", ""],
["restaurant.jpg", "", "", "10 minutes later", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "laugh", "...and then he said, \"no one does that, not on my watch!\"", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "laugh", "Funny huh?", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "sad", "Wait that's horrible. How is that funny?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Oh it's because at the beginning of the joke I said he lost his watch remember? So it's like a pun.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "sad", "But what about the girl being yanked around by the other guy?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "No- that's not the point! The point is the \"not on my watch\" part is a play on words!", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "cry", "Sorry I just can't get over the abuse in this story. It's just so sad.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "Uh, yeah okay sure.", "brodyquest", "", ""],
["restaurant.jpg", "", "", "30 minutes later", "brodyquest", "", ""],
["restaurant.jpg", "", "", "The waiter comes by and places the a leather bound check holder in the center of the table.", "brodyquest", "", ""],
["Pay the bill", "Split bill"]
];

var scene4 = [
["restaurant.jpg", "", "", "Ethan places his lips on the table and starts sucking the spilt water like a vacuum cleaner.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "shock", "EWW! Oh my god stop it.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "shock", "Just use a napkin! That's so gross!", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Oh... Yeah that's a good point.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "annoy", "...", "brodyquest", "", ""],
["restaurant.jpg", "", "", "10 minutes later", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "laugh", "...and then he said, \"no one does that, not on my watch!\"", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "laugh", "Funny huh?", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "sad", "Wait that's horrible. How is that funny?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "shock", "Oh it's because at the beginning of the joke I said he lost his watch remember? So it's like a pun.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "sad", "But what about the girl being yanked around by the other guy?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "No- that's not the point! The point is the \"not on my watch\" part is a play on words!", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "cry", "Sorry I just can't get over the abuse in this story. It's just so sad.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "Uh, yeah okay sure.", "brodyquest", "", ""],
["restaurant.jpg", "", "", "30 minutes later", "brodyquest", "", ""],
["restaurant.jpg", "", "", "The waiter comes by and places the a leather bound check holder in the center of the table.", "brodyquest", "", ""],
["Pay the bill", "Split bill"]
];

var scene5 = [
["restaurant.jpg", "", "", "Ethan reaches for his wallet only to feel an empty pocket.", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "I uhh... So I would normally pay but uhh...", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "annoy", "You forgot your wallet?", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "I swear I'll pay you back! I'll venmo you right now...", "brodyquest", "", ""],
["restaurant.jpg", "Ethan", "cry", "Err, okay I'll venmo you after I charge my phone's battery tonight.", "brodyquest", "", ""],
["restaurant.jpg", "Tiffany", "annoy", "...", "brodyquest", "", ""],

["1"]
];

var currentScene = scene1.slice(); //copy of the actual scene array
