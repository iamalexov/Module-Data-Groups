const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here



let imgIndex = 0;
let intervalId = null;


const img = document.getElementById("carousel-img");

const backBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");

const autoBackBtn = document.getElementById("auto-back");
const autoForwardBtn = document.getElementById("auto-forward");
const stopBtn = document.getElementById("stop-btn");

function showImage() {
  img.src = images[imgIndex];
}

function previousImg() {
  if (imgIndex > 0) {
    imgIndex--;
  } else {
    imgIndex = images.length - 1;
  }
  showImage();
}

function nextImg() {
  if (imgIndex < images.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  showImage();
}

function autoForward() {
  stopAuto();
  intervalId = setInterval(nextImg, 2000);
}

function autoBack() {
  stopAuto();
  intervalId = setInterval(previousImg, 2000);
}

function stopAuto() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

backBtn.addEventListener("click", previousImg);
forwardBtn.addEventListener("click", nextImg);
autoForwardBtn.addEventListener("click", autoForward);
autoBackBtn.addEventListener("click", autoBack);
stopBtn.addEventListener("click", stopAuto);
