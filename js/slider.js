const sliders = document.querySelectorAll(".slider");
const arrows = document.querySelectorAll(".control-arrow");
const radioSliders = document.querySelectorAll(".btn-slider");

for (let arrow of arrows) {
  arrow.addEventListener("click", function () {
    for (let slider of sliders) {
      slider.classList.toggle("hidden");
    };
    for (let radioSlider of radioSliders) {
      radioSlider.classList.toggle("active-radio");
    };
  })
};
