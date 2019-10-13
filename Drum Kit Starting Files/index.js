// variable of length = to number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

    // when on of these buttons clicked call this function
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // what to do when clicked
        // alert("I've been clicked!");
       var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                break;
            case "a":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                break;
            case "s":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                break;
            case "d":
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                break;
            case "j":
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                break;
            case "k":
                    var kickBass = new Audio('sounds/kick-bass.mp3');
                    kickBass.play();
                break;
            case "l":
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                break;

                default:console.log(buttonInnerHTML);

        }
        
    });

}







