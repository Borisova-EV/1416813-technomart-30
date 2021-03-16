const cartButtons = document.querySelectorAll(".button-cart");
const cart = document.querySelector(".cart-link");
const cartCounter = document.querySelector(".cart-counter");
const addCart = document.querySelector(".modal-add-cart");
const addCartClose = document.querySelector(".close-add-cart");
counter = "";

for (let cartButton of cartButtons) {
  cartButton.addEventListener("click", function () {
    cart.classList.add("full");
    counter++;
    cartCounter.textContent = counter;
    addCart.classList.remove("hidden")
  })
};

addCartClose.addEventListener("click", function (evt) {
  evt.preventDefault;
  addCart.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (!addCart.classList.contains("hidden")) {
      evt.preventDefault();
      addCart.classList.add("hidden");
    }
  }
});
