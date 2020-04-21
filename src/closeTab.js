/* Close button - closes the browser tab with animations

   NOTE:  The tab must be opened with Javascript window.open
   Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/close

   Modify this generic code to meet your definitions:
   
   function openWindow() {
     animationWindow = window.open('typical.htm');
   }
*/

// the name of the browser tab that has the animations
var animationWindow;

// ADD DEFINITIONS FOR OPENING A TAB FOR THE ANIMATIONS:
// const defining the button that opens the animation tab
// function that opens the animation tab

// DEFINITIONS FOR CLOSING THE TAB THAT HAS THE ANIMATIONS
const closeAnimationTabBtn = document.getElementById("closebtn");

let closeAnimationTab;

closeAnimationTabBtn.addEventListener("click", closeAnimationTab);

function closeAnimationTab(event) {
  animationWindow.close();
}
