const rateResult = document.querySelector(".rateResult");
const rateC = document.querySelectorAll(".rate-container");
const ratingC = document.querySelector(".rating-container");
const resultC = document.querySelector(".result-container");
const btnSubmit = document.querySelector(".btn-submit");

rateC.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    const rate = e.target;
    rate.classList.add("active");
    rateResult.innerHTML = rate.innerHTML;
  });
});

btnSubmit.addEventListener("click", () => {
  if (rateResult.innerHTML == "") {
    alert("Select rating first.");
  } else {
    ratingC.classList.add("hidden");
    resultC.classList.remove("hidden");
  }
});
