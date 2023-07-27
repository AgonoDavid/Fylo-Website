const hamburger = document.querySelector(".hamburger");
const closehamburger = document.querySelector(".closehamburger");
const mobile_view = document.querySelector(".nav_right");

let toggle = true;

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobile_view.classList.toggle("active");

  toggle = !toggle;

  toggle
    ? (hamburger.src = "images\\hamburger.png")
    : (hamburger.src = "images\\closehamburger.png");
});
