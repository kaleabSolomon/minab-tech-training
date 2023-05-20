"use strict";

// create the typing effect on the attributes
const ele = document.querySelector(".att");

window.onload = function () {
  const text = ele.innerHTML;
  ele.innerHTML = "";
  let i = 0;
  let timer = setInterval(function () {
    if (i < text.length) {
      ele.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, 80);
};
// create drop down for the nav bar
const hamburger = document.querySelector(".navbar-toggler-icon");
hamburger.onclick = function () {
  let nav = document.querySelector(".navbar-right");
  nav.classList.toggle("active");
};
const homeBtn = document.querySelector(".btn-home");
const aboutBtn = document.querySelector(".btn-about");
const contactBtn = document.querySelector(".btn-contact");

const homeSection = document.getElementById("introduction");
const aboutSection = document.getElementById("about-me");
const contactSection = document.getElementById("contact-me");

homeBtn.addEventListener("click", () => {
  homeSection.scrollIntoView({
    behavior: "smooth",
  });
});

aboutBtn.addEventListener("click", () => {
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
});

contactBtn.addEventListener("click", () => {
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
});
