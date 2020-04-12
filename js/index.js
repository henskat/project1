//pop-up
const popUpBackground = document.getElementById("pop-up-background");
const popUp = document.getElementById("pop-up");
const popUpExit = document.getElementById("pop-up-exit");
const popUpInput = document.getElementById("pop-up-input");
const popUpSubmit = document.getElementById("pop-up-submit");
const popUpLater = document.getElementById("pop-up-later");
const popUpValidEmail = document.getElementById("pop-up-valid-email");
//reviews
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");
const reviewOne = document.getElementById("review-one");
const reviewTwo = document.getElementById("review-two");
const reviewThree = document.getElementById("review-three");
const reviewCircle = document.getElementById("review-circle");

let num = 1;
upArrow.addEventListener("click", (event) => {
  if (num === 1) {
    reviewTwo.className = "review-two fade-in";
    reviewOne.className = "exit";
    reviewThree.className = "exit";
    reviewCircle.innerText = "o O o";
  } else if (num === 2) {
    reviewThree.className = "review-three fade-in";
    reviewOne.className = "exit";
    reviewTwo.className = "exit";
    reviewCircle.innerText = "o o O";
  } else {
    //num === 3
    reviewOne.className = "review-one fade-in";
    reviewTwo.className = "exit";
    reviewThree.className = "exit";
    reviewCircle.innerText = "O o o";
  }
  if (num === 3) {
    num = 1;
  } else {
    num++;
  }
});

downArrow.addEventListener("click", (event) => {
  if (num === 1) {
    reviewThree.className = "review-three fade-in";
    reviewOne.className = "exit";
    reviewTwo.className = "exit";
    reviewCircle.innerText = "o o O";
  } else if (num === 2) {
    reviewOne.className = "review-one fade-in";
    reviewTwo.className = "exit";
    reviewThree.className = "exit";
    reviewCircle.innerText = "O o o";
  } else {
    //num === 3
    reviewTwo.className = "review-two fade-in";
    reviewOne.className = "exit";
    reviewThree.className = "exit";
    reviewCircle.innerText = "o O o";
  }
  if (num === 1) {
    num = 3;
  } else {
    num--;
  }
});
window.onload = function () {
  setTimeout(loadAfterTime, 4000);
};

function loadAfterTime() {
  popUpBackground.classList.remove("exit");
  popUp.classList.remove("exit");
  popUpBackground.classList.add("pop-up-background");
  popUp.classList.add("pop-up");
  document.getElementById("pop-up").style.animation = "mynewmove 0.7s";
}

popUpExit.addEventListener("click", (event) => {
  popUpBackground.classList.add("exit");
  popUp.classList.add("exit");
  setCookie("pop-up", "yes");
});

popUpSubmit.addEventListener("click", (event) => {
  if (
    popUpInput.value.match(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    )
  ) {
    popUpBackground.classList.add("exit");
    popUp.classList.add("exit");
  } else {
    popUpValidEmail.classList.remove("exit");
    popUpValidEmail.classList.add("pop-up-valid-email");
  }
});

popUpLater.addEventListener("click", (event) => {
  popUpBackground.classList.add("exit");
  popUp.classList.add("exit");
  setTimeout(loadAfterTime, 4000);
});
