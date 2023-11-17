// checks for button presses
var numberOfFartButtons = document.querySelectorAll(".fart").length;

for (var i = 0; i < numberOfFartButtons; i++) {
    document.querySelectorAll(".fart")[i].addEventListener("click", function() {
        makeSound(this.id);
        buttonAnimate(this.id);
      
    });
}




// sound checker using values from inner.html
function makeSound(key) {
    
    switch (key) {
        case "a":
            var aFart = new Audio('sounds/fart1.mp3');
            aFart.play();
        break;
        case "b":
            var bFart = new Audio('sounds/fart2.mp3');
            bFart.play();
        break;
        case "c":
            var cFart = new Audio('sounds/fart3.mp3');
            cFart.play();
        break;
        case "d":
            var dFart = new Audio('sounds/fart4.mp3');
            dFart.play();
        break;
        case "e":
            var eFart = new Audio('sounds/fart5.mp3');
            eFart.play();
        break;
        case "f":
            var fFart = new Audio('sounds/fart6.mp3');
            fFart.play();
        break;
        case "g":
            var gFart = new Audio('sounds/fart7.mp3');
            gFart.play();
        break;
        case "h":
            var hFart = new Audio('sounds/fart8.mp3');
            hFart.play();
        break;
        case "i":
            var iFart = new Audio('sounds/fart9.mp3');
            iFart.play();
        break;
        case "j":
            var jFart = new Audio('sounds/fart10.mp3');
            jFart.play();
        break;
        case "k":
            var kFart = new Audio('sounds/fart11.mp3');
            kFart.play();
        break;
        case "l":
            var lFart = new Audio('sounds/fart12.mp3');
            lFart.play();
        break;
        case "m":
            var mFart = new Audio('sounds/fart13.mp3');
            mFart.play();
        break;
        case "n":
            var nFart = new Audio('sounds/fart14.mp3');
            nFart.play();
        break;
        case "o":
            var oFart = new Audio('sounds/fart15.mp3');
            oFart.play();
        break;
    
        default: console.log();
        break;
    }

};



// animation checker. Adds and removes the class ".pressed" to give an animated effect.

function buttonAnimate(currentKey){
    
    var activeButton = document.querySelector("#" + currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 600);
}




