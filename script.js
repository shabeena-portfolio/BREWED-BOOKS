let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let totalDisplay = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    cartItems.appendChild(li);
  });

  totalDisplay.innerText = "Total: ₹" + total;
}
document.addEventListener("click", function() {
  let text = document.getElementById("hero-text-box");
  text.classList.add("show");
});
window.onload = function() {
  document.getElementById("hero-text-box").classList.add("show");
};
AOS.init({
  duration: 1000,
  once: true
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
AOS.init({
  duration: 1000,
  once: true
});