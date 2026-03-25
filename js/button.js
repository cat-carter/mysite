"use strict";

const hideMenuButton = document.getElementById("hide-menu-button");
const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav");
let menuTooltip = document.getElementById("menu-tooltip");
let tooltip = document.getElementById("tooltip");

menuButton.addEventListener("click", function () {
  /*nav.classList.toggle("hidden"); */
  nav.style.display = "block";
  menuButton.style.display = "none";
  hideMenuButton.style.display = "block";
});

hideMenuButton.addEventListener("click", function () {
  nav.style.display = "";
  nav.classList.add("hidden");
  menuButton.style.display = "block";
  hideMenuButton.style.display = "none";
  menuTooltip.style.display = "block";

  setTimeout(function () {
  menuTooltip.style.display = "none";
}, 2000); 
});


hideMenuButton.addEventListener("mouseover", function () {
  tooltip.innerHTML = "Hide table of contents";
  tooltip.style.display = "block";
});
hideMenuButton.addEventListener("mouseout", function () {
  tooltip.style.display = "none";
}
);

