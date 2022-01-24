for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

//document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  //this.style.color = "#FFFFFF";

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

}



//detectando los teclado y asi hacer sonidos;
document.addEventListener('keypress', function(event){

  makeSound(event.key);
  buttonAnimation(event.key);


});


function makeSound(key){

  switch (key) {

    case "m":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;


    case "i":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "g":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "u":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "e":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;


    case "o":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;


    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){

  var activeButton= document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");


setTimeout(function () {
  activeButton.classList.remove("pressed");
}, 100);

}
