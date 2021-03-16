const bookmarkButtons = document.querySelector(".button-bookmark");
const bookmark = document.querySelector(".bookmark-link");
const bookmarkCounter = document.querySelector(".bookmark-counter");
let counter = "";

bookmarkButtons.addEventListener("click", function () {
  bookmark.classList.add("full");
  counter++;
  bookmarkCounter.textContent = counter;
})
