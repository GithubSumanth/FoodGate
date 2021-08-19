"use strict";

const navBtn = document.querySelector(".expander");
const navLines = document.querySelectorAll(".line");
const nav = document.querySelector(".nav");
const navBack = document.querySelector(".nav-bg-filter");
const navContainer = document.querySelector(".nav__container");

const navExpander = () => {
  navLines[0].classList.toggle("line--1--modified");
  navLines[1].classList.toggle("line--2--modified");
  nav.classList.toggle("nav--modified");
  navBack.classList.toggle("nav--modified--1");
};

navBtn.addEventListener("click", navExpander);

navContainer.addEventListener("click", (e) => {
  if (!e.target.closest("a")) return;
  else navExpander();
});

// CAROUSEL CONSTRUCTION

const track = document.querySelector(".carousel-track");
const cards = Array.from(track.children);
const prevButton = document.querySelector(".carousel-button--prev");
const nextButton = document.querySelector(".carousel-button--next");

//Position all the slides

const cardWidth = cards[0].getBoundingClientRect().width;
const gutter = 40;

cards.forEach((card, index) => {
  if (index === 0) {
    card.style.left = "0px";
  } else {
    card.style.left = `${(cardWidth + gutter) * index}px`;
  }
});

//When we click next button, move to next slide
nextButton.addEventListener("click", (e) => {
  const middleCard = track.querySelector(".carousel-card--second");
  const leftEdgeCard = middleCard.previousElementSibling;
  const rightEdgeCard = middleCard.nextElementSibling;

  const nextCard = rightEdgeCard.nextElementSibling;
  if (!nextCard) return;
  const amountToMove = middleCard.style.left;

  track.style.transform = `translateX(-${amountToMove})`;

  leftEdgeCard.classList.remove("carousel-card--first");
  middleCard.classList.remove("carousel-card--second");
  middleCard.classList.add("carousel-card--first");
  rightEdgeCard.classList.remove("carousel-card--third");
  rightEdgeCard.classList.add("carousel-card--second");
  nextCard.classList.add("carousel-card--third");
});

prevButton.addEventListener("click", (e) => {
  const middleCard = track.querySelector(".carousel-card--second");
  const leftEdgeCard = middleCard.previousElementSibling;
  const rightEdgeCard = middleCard.nextElementSibling;

  const prevCard = leftEdgeCard.previousElementSibling;
  if (!prevCard) return;
  const amountToMove = prevCard.style.left;

  track.style.transform = `translateX(-${amountToMove})`;

  prevCard.classList.add("carousel-card--first");
  leftEdgeCard.classList.remove("carousel-card--first");
  leftEdgeCard.classList.add("carousel-card--second");
  middleCard.classList.remove("carousel-card--second");
  middleCard.classList.add("carousel-card--third");
  rightEdgeCard.classList.remove("carousel-card--third");
});

//SIGN IN

const signInBtn = document.querySelector(".btn--sign-in");
const signUpBtn = document.querySelector(".btn--sign-up");
const signUpPage = document.querySelector(".header--sign-up");
const signInPage = document.querySelector(".header--sign-in");

const signCloseBtn = document.querySelectorAll(".sign-btn-box");

signUpBtn.addEventListener("click", () => {
  signUpPage.style.display = "flex";
});

signInBtn.addEventListener("click", () => {
  signInPage.style.display = "flex";
});

signCloseBtn[0].addEventListener("click", () => {
  signUpPage.style.display = "none";
});

signCloseBtn[1].addEventListener("click", () => {
  signInPage.style.display = "none";
});
