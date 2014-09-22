$(document).ready(function() {
	$('#ending').hide();
})

function Animal(name) {
	this.name = name;
	this.position = 0;

Animal.prototype.advance = function() {
  this.positionOld = this.position;
	if(Math.floor(Math.random()*10) < this.focus) {
		this.position += this.speed;
	}
}
Animal.prototype.progressReport = function() {
	return this.name + " is at: " + this.position;
}

}


//create animal racers
Turtle.prototype = new Animal();
Turtle.prototype.constructor = Turtle;
function Turtle(name) {
	this.name = name;
	this.speed = 3;
	this.focus = 9;
}
Rabbit.prototype = new Animal();
Rabbit.prototype.constructor = Rabbit;
function Rabbit(name) {
	this.name = name;
	this.speed = 6;
	this.focus = 1;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
function Cat(name) {
	this.name = name;
	this.speed = 6;
	this.focus = 3;
}
Pig.prototype = new Animal();
Pig.prototype.constructor = Pig;
function Pig(name) {
	this.name = name;
	this.speed = 3;
	this.focus = 7;
}




//user input
function userInput() {
  var name = document.getElementById('userName').value;
  var userRacer = document.getElementById('userRacer').value;
  var compRacer = document.getElementById('compRacer').value;
  

//set up racers
switch(userRacer) {
	case "turtle":
		var player1 = new Turtle(name) 
		break;
	case "rabbit":
		var player1 = new Rabbit(name)
		break;
	case "pig":
		var player1 = new Pig(name)
		break;
	case "cat":
		var player1 = new Cat(name)
		break;
}

switch(compRacer) {
	case "turtle":
		var player2 = new Turtle("Fred") 
		break;
	case "rabbit":
		var player2 = new Rabbit("Jack")
		break;
	case "pig":
		var player2 = new Pig("Wilbur")
		break;
	case "cat":
		var player2 = new Cat("Garfield")
		break;
}

//run race w/ updates
var meters = 18;


while (player1.position < meters && player2.position < meters) {
	player1.advance();
	player2.advance();
	console.log(player1.progressReport() + "|" + player2.progressReport());
  console.log(player1.positionOld);
  if (player1.position > player1.positionOld) {
    var $active = $('img.active');
    var $next = $('img.active').next();
    $next.css("z-index", 2); //moves up next img in line
    $active.css('z-index', 1).removeClass('active'); //reset z-index, hide it
    $next.css('z-index', 3).addClass('active');
    $('p').html("You moved!");
    //alert("you moved!");
  } else {
  	$('p').html("You moved!");
    //alert("you are distracted!");
  }
  
} 


//output winner
if(player1.position >= meters) {
	$('#ending').show().html("Well done, " + player1.name + "! You beat " + player2.name + " the " + compRacer + ".");
} else {
	$('#ending').show().html("Sorry, " + player1.name + ". " + player2.name + " the " + compRacer + " beat you.");
}
}
