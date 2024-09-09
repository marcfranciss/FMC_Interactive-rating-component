const rateResult = document.querySelector(".rateResult");
const rateC = document.querySelectorAll(".rate-container");
const ratingC = document.querySelector(".rating-container");
const resultC = document.querySelector(".result-container");
const btnSubmit = document.querySelector(".btn-submit");

rateC.forEach((rating) => {
  const active = document.querySelector(".active");
  rating.addEventListener("click", (e) => {
    if (active) {
      active.classList.remove("active");
      rate.setAttribute("aria-checked", false);
    }
    const rate = e.target;
    rate.classList.add("active");
    rate.setAttribute("aria-checked", true);
    rateResult.innerHTML = rate.innerHTML;
  });
  rating.addEventListener("keydown", (e) => {
    console.log(e.which);
    console.log(e.target);
    const keyCode = e.which;
    const spaceKeyCode = 32;
    const enterKeyCode = 13;
    const rate = e.target;
    if (active) {
      active.classList.remove("active");
      rate.setAttribute("aria-checked", false);
    }
    if (keyCode !== spaceKeyCode) {
      console.log(`Incorrect key stroke. Only space and enter is available.`);
      return;
    } else {
      rate.classList.add("active");
      rate.setAttribute("aria-checked", true);
      rateResult.innerHTML = rate.innerHTML;
    }
  });
});

// function pressed(keyCode) {
//   console.log(keyCode);
//   const spaceKeyCode = 32;
//   const enterKeyCode = 13;
//   if (keyCode && keyCode == spaceKeyCode) {
//     console.log(`Incorrect key stroke. Only space and enter is available.`);
//     return;
//   } else {
//     rating.setAttribute("aria-checked", true);
//   }
// }

btnSubmit.addEventListener("click", () => {
  if (rateResult.innerHTML == "") {
    alert("Select rating first.");
  } else {
    ratingC.classList.add("hidden");
    resultC.classList.remove("hidden");
  }
});
