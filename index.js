function play(sound){
// Function to concatenate the folder and sounds files
  var audio =new Audio("sounds/"+sound+".mp3");
  audio.play();
}

function chooseSound(key){
// Funcion to define the sound
  // this.style.color = "white"
  // Function to switch between the sounds
  // var buttonInnerHTML = this.innerHTML;
    switch (key) {
      case "w":
        play("crash");
        break;
      case "a":
        play("tom-1");
        break;
      case "s":
        play("tom-3");
        break;
      case "d":
        play("kick-bass");
        break;
      case "j":
        play("tom-4");
        break;
      case "k":
        play("tom-2");
        break;
      case "l":
        play("snare");
        break;
      default: console.log(this.innerHTML);

    }
  // play("snare");

}

function handleClick() {

  // this.style.color = "white"
  chooseSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
  // Function to switch between the sounds
    // switch (this.innerHTML) {
    //   case "w":
    //     play("crash");
    //     break;
    //   case "a":
    //     play("tom-1");
    //     break;
    //   case "s":
    //     play("tom-3");
    //     break;
    //   case "d":
    //     play("kick-bass");
    //     break;
    //   case "j":
    //     play("tom-4");
    //     break;
    //   case "k":
    //     play("tom-2");
    //     break;
    //   case "l":
    //     play("snare");
    //     break;
    //   default: console.log(this.innerHTML);
    // }
}

function buttonAnimation(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}


// Listening to button (moouse click)
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  //Using named function
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

// Listening to keyboard
//Using anonynous function = function defined inline
document.addEventListener("keydown", function(){
  // alert(event.key);
  chooseSound(event.key);
  buttonAnimation(event.key);
});
