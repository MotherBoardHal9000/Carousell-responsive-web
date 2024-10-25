//남의 코드 따라적는 식으로 배우면 평생 캐러셀밖에 못만들고 늙어 죽습니다.

//안배우고 알아서도 코드 잘 짜고 싶으면

//ui 만드는 4-step / 배운 자바스크립트 문법을 어디다 쓰는지 / 한글로 코드짜라는거

//맨날 강조하는 것들을 잘 외워가시길 바랍니다.

const header = document.querySelector("header");
const headerMenuPopUp = document.getElementById("headerMenuPopUp");

function mouseOver(addEventListener) {
  headerMenuPopUp.style.display = "block";
}

function mouseOut(addEventListener) {
  headerMenuPopUp.style.display = "none";
}

window.addEventListener("mouseover", function () {
  header.addEventListener("mouseover", mouseOver);
  headerMenuPopUp.addEventListener("mouseover", mouseOver);
  headerMenuPopUp.addEventListener("mouseout", mouseOut);
});
////////////////////////////////////////////////////////////
//캐러샐 기능

const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 7000;

let slides = document.querySelectorAll(".slide");
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`; //$는 getElementById 처럼 $를 붙여 다른변수와 충돌방지

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return; //매우매우 중요
  index++;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

slideContainer.addEventListener("mouseleave", startSlide);
nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);

startSlide();
////////////////////////
///////////////////////

var nowPicture = 1;

document.getElementById("sec02right").addEventListener("click", function () {
  if (nowPicture == 1) {
    document.querySelector(".sec02img").style.transform = "translateX(-700px)";
    nowPicture += 1;
  } else if (nowPicture == 2) {
    document.querySelector(".sec02img").style.transform = "translateX(-1400px)";
    nowPicture += 1;
  }
});
document.getElementById("sec02left").addEventListener("click", function () {
  if (nowPicture == 3) {
    document.querySelector(".sec02img ").style.transform = "translateX(-700px)";
    nowPicture -= 1;
  } else if (nowPicture == 2) {
    document.querySelector(".sec02img ").style.transform = "translateX(0px)";
    nowPicture = nowPicture -= 1;
  }
});
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


