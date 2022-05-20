for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonPressed = this.innerHTML;
    makesound(buttonPressed);
    buttonAnimation(buttonPressed);
});}

document.addEventListener("keydown", function(Event){
makesound(Event.key);
buttonAnimation(Event.key);
});

function makesound(scene){
    switch(scene){
        case 'a':
            var audio = new Audio('drum-kit-sounds/tom-1.mp3');
    audio.play();
    break;
    case 'w':
            var audio = new Audio('drum-kit-sounds/tom-2.mp3');
    audio.play();
    break;
    case 's':
            var audio = new Audio('drum-kit-sounds/tom-3.mp3');
    audio.play();
    break;
    case 'd':
            var audio = new Audio('drum-kit-sounds/tom-4.mp3');
    audio.play();
    break;
    case 'j':
            var audio = new Audio('drum-kit-sounds/snare.mp3');
    audio.play();
    break;
    case 'k':
            var audio = new Audio('drum-kit-sounds/kick-bass.mp3');
    audio.play();
    break;
    case 'l':
            var audio = new Audio('drum-kit-sounds/crash.mp3');
    audio.play();
    break; 
    }


}

function buttonAnimation(scene){
var activeButton = document.querySelector("." + scene);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed")
}, 500);
}