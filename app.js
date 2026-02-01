// ======================================Flip Image===========================================
const images = [
    "images/sec1-img3a.jpg",
    "images/sec1-img3b.jpg"
];

let index = 0;
const img = document.getElementById("flipImage");

setInterval(() => {
    img.classList.add("flip");

    setTimeout(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
        img.classList.remove("flip");
    }, 300); // halfway through flip
}, 2000);


// =====================================Carousel slider========================================
const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const totalSlides = dots.length;
const intervalTime = 5000; // 5 seconds

function goToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");

  currentIndex = index;
}

// auto slide
setInterval(() => {
  let nextIndex = currentIndex + 1;

  if (nextIndex >= totalSlides) {
    nextIndex = 0; // loop back
  }

  goToSlide(nextIndex);
}, intervalTime);

// dot click still works
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    goToSlide(Number(dot.dataset.index));
  });
});


