//rewards ids
const rewardsName = document.getElementById("rewards-name");
const rewardsPhone = document.getElementById("rewards-phone");
const rewardsEmail = document.getElementById("rewards-email");
const signUp = document.getElementById("sign-up");
const formElements = document.getElementById("form-elements");
const rewardsThanks = document.getElementById("rewards-thanks");

//sign up on rewards page
signUp.addEventListener("click", (event) => {
  let isEmail = false;
  let isPhone = false;
  if (
    rewardsEmail.value.match(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    )
  ) {
    isEmail = true;
    rewardsEmail.className = "";
  } else {
    isEmail = false;
    rewardsEmail.className = "error";
  }

  if (rewardsPhone.value.match(/^\d{10}$/)) {
    isPhone = true;
    rewardsEmail.className = "";
  } else {
    isPhone = false;
    rewardsPhone.className = "error";
  }
  if (isEmail && isPhone) {
    formElements.className = "exit";
    rewardsThanks.className = "rewards-thanks";
  }
});
