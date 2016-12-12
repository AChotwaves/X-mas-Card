var MAX_FLAKES = 14;
var MAX_SPEED =30;

var FLAKES_HEIGHT=100;
var FLAKES_WIDTH=100;

var MAX_HEIGHT=400 ;
var MAX_WIDTH=600 ;

var flakes=[];

var card= document.getElementById("card");

document.onload=start();

function start(){
	setInterval(animationLoop, 75);
}

function animationLoop(){
	
	console.log("Looping!");
	
	//see if flakes are on card
	
	checkFlakes();
	
	resetFlakes();
	
	//have MAX_FLAKES in our array
	
	moveFlakes();
}
	
	function checkFlakes(){
		
		for(var i = flakes.length - 1; i >= 0; i--){
			var flake = flakes[i];
			
			var current_position=parseInt(flake.style.top);
			
			if(current_position >= MAX_HEIGHT){
				
				flakes.splice(i, 1);
				flake.parentNode.removeChild(flake);
			}
		}
		
	}
	
	function resetFlakes(){
		for (var i= flakes.length; i < MAX_FLAKES; i++){
			var new_flake=document.createElement("img");
			
			new_flake.src="flake.png";
			new_flake.style.position="absolute";
			new_flake.style.top=-FLAKES_HEIGHT + "px";
			new_flake.style.left=Math.floor(Math.random()* MAX_WIDTH)+"px";
			
			new_flake.speed = Math.floor(Math.random() *MAX_SPEED) + 20;
			
			flakes.push(new_flake);
			
			card.appendChild(new_flake);
			
			
			
		}
	}
	
	function moveFlakes(){
		for(var  i= 0; i < flakes.length; i++){
			var flake = flakes[i];
			
			var speed = flake.speed;
			var current_position= parseInt(flake.style.top);
			
			flake.style.top = current_position +speed + "px";
		}
	}
	
	// Move 'em
	
