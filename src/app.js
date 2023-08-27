const carousel = document.querySelector(`#ul`);
const arrow = document.querySelectorAll(`#div i`);
const firstCartWidth = document.querySelector(`#first`).offsetWidth;
const carouselChilderen = [...carousel.children];
arrow.forEach((element) => {
  element.addEventListener(`click`, function () {
    carousel.scrollLeft +=
      element.id === `left` ? -firstCartWidth : firstCartWidth;
  });
});
let t = true;
let isDragin = false,
  startX,
  startScrolLeft;

let cartPrevoie = Math.round(carousel.offsetWidth / firstCartWidth);

carouselChilderen
  .slice(-cartPrevoie)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });
carouselChilderen.slice(0, cartPrevoie).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
//  menu
const treeLine = document.querySelector(`#menu`);
const mobileMenu = document.querySelector(`#mobileMenu`);
console.log(treeLine);
const x =document.querySelector(`.close`);
const open = function (e) {
  
  if (t) {
    console.log(`asda`);
    mobileMenu.classList.remove(`right-[-160px]`);
    mobileMenu.classList.add(`right-0`);
  } else {
    mobileMenu.classList.add(`right-[-160px]`);
    mobileMenu.classList.remove(`right-0`);
  }
};
const close =function(e){
  e.preventDefault()
  mobileMenu.classList.add(`right-[-160px]`);
  mobileMenu.classList.remove(`right-0`);
}
treeLine.addEventListener(`click`, open);
x.addEventListener(`click`, close);
