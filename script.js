const images = [
  "strategy_pattern/visuals/visual_01.png",
  "strategy_pattern/visuals/visual_02.png",
  "strategy_pattern/visuals/visual_03.png",
  "strategy_pattern/visuals/visual_04.png",
  "strategy_pattern/visuals/visual_05.png",
  "strategy_pattern/visuals/visual_06.png",
];
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".carousel-images");
  const dots = document.querySelectorAll(".dot");
  currentIndex = (index + slides.children.length) % slides.children.length;

  slides.style.transform = `translateX(${-currentIndex * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

function currentSlide(index) {
  showSlide(index);
}

// Initialize first slide
showSlide(currentIndex);
