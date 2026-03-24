"use strict";

const hideMenuButton = document.getElementById("hide-menu-button");
const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  menuButton.style.display = "none";
  hideMenuButton.style.display = "block";
});

hideMenuButton.addEventListener("click", function () {
  nav.classList.add("hidden");
  menuButton.style.display = "block";
  hideMenuButton.style.display = "none";
});