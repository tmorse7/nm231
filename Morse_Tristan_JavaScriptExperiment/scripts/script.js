/*
Tristan Morse
NM 231
Tuesday, April 10th, 2018
Some base code used from W3 schools and Javascript02 Complex Animation Demo:
https://www.w3schools.com/howto/howto_js_animate.asp
*/

function jump() {
    var astronaut = document.getElementById("spaceMan"); 
    var pos = 490;
    var id = setInterval(frame, 10);
    
    function frame() {
        if (pos == 100) {
            for(i= 0; i < 400; i++) {
                pos++;
                console.log("pos2: " + pos); 
                astronaut.style.top = pos + 'px';        
              }
              console.log("OUT");
            //clearInterval(id);
        } else {
            pos--; 
            astronaut.style.top = pos + 'px'; 
        }
    }
}

var looper;
var degrees = 0;

function rotate(pic,speed){
	var elem = document.getElementById(pic);
	
	elem.style.transform = "rotate(" + degrees + "deg)";
	looper = setTimeout('rotate(\''+ pic +'\','+ speed +')',speed);
	degrees++;

	if(degrees > 359){
		degrees = 1;
	}
}

var sound1 = new Audio('/sounds/inSpace.mp3');
var sound2 = new Audio('/sounds/seeHouse.mp3');
var sound3 = new Audio('/sounds/aeiou.mp3');

function playSound1() {
    sound1.play();
}

function playSound2() {
    sound2.play();
}

function playSound3() {
    sound3.play();
}