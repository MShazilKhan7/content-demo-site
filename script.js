const images = [
  "./strategy_pattern/visuals/visual_01.png",
  "./strategy_pattern/visuals/visual_02.png",
  "./strategy_pattern/visuals/visual_03.png",
  "./strategy_pattern/visuals/visual_04.png",
  "./strategy_pattern/visuals/visual_05.png",
  "./strategy_pattern/visuals/visual_06.png",
  "./strategy_pattern/visuals/visual_07.png",
];
let currentIndex = 0;

const modal = document.getElementById("carouselModal");
const carouselImage = document.getElementById("carouselImage");
const closeModal = document.getElementById("closeModal");

document.querySelector(".open-carousel").addEventListener("click", () => {
  modal.style.display = "flex";
  showImage(currentIndex);
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

function showImage(index) {
  carouselImage.src = images[index];
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  showImage(currentIndex);
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
