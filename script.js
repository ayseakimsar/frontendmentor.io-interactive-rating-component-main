"use script";

const btnsRating = document.querySelectorAll(".btn-rating");
const btnSubmit = document.querySelector(".btn-submit");
const displayRating = document.querySelector(".display__rating");
const containers = document.querySelectorAll(".container");
let clicked;

btnsRating.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    btn.focus();
    clicked = btn.innerHTML;
  });
});

btnSubmit.addEventListener("click", function () {
  containers.forEach(function (container) {
    container.classList.toggle("hidden");
  });
  displayRating.innerHTML = `You selected ${clicked} out of 5`;
});
