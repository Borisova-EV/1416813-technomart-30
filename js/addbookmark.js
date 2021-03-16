const bookmarkButtons = document.querySelectorAll(".button-bookmark");
const bookmark = document.querySelector(".bookmark-link");
const bookmarkCounter = document.querySelector(".bookmark-counter");
let counter = "";

for (let bookmarkButton of bookmarkButtons) {
  bookmarkButton.addEventListener("click", function () {
  bookmark.classList.add("full");
  counter++;
  bookmarkCounter.textContent = counter;
})
}
