let tabService = document.querySelectorAll(".service-item");
let tabContent = document.querySelectorAll(".desk-service-item");
let currentService = document.querySelector(".current-service");

let currentRemove = function () {
  for (tabServiceItem of tabService) {
    tabServiceItem.classList.remove("current-service");
  }
};

for (let i = 0; i < tabService.length; i++) {
  tabService[i].addEventListener("click", function (evt) {
    evt.preventDefault;
    for (let a = 0; a < tabContent.length; a++) {
      tabContent[a].classList.add("hidden");
    }
    currentRemove();
    tabContent[i].classList.remove("hidden");
    tabService[i].classList.add("current-service");
  })
}
