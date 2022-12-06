"use strict";

const displayRating = document.querySelector(".display__rating");
const containers = document.querySelectorAll(".container");
let clicked;

function ratingButtonClicked(btn) {
  btn.focus();
  clicked = btn.innerHTML;
}

function submitButtonClicked() {
  containers.forEach(function (container) {
    container.classList.toggle("hidden");
  });
  displayRating.innerHTML = `You selected ${clicked} out of 5`;
}
