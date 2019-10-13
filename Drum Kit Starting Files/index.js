// variable of length = to number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

    // when on of these buttons clicked call this function
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // what to do when clicked
        // alert("I've been clicked!");
        this.style.color = "white";
        
    });

}


// var tom1 = new Audio('sounds/tom-1.mp3');
//         tom1.play();
