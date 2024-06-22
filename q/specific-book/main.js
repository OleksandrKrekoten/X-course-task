const priceElement = document.getElementById("price");
const countElement = document.getElementById("count");
const totalPriceElement = document.getElementById("totalPrice");

const unitPrice = parseFloat(priceElement.textContent.replace("$", ""));

function updateTotalPrice() {
  const count = parseInt(countElement.value);
  if (count >= 1 && count <= 42) {
    const totalPrice = unitPrice * count;
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }
}

function validateCount() {
  let count = parseInt(countElement.value);
  if (isNaN(count) || count < 1) {
    countElement.value = 1;
  } else if (count > 42) {
    countElement.value = 42;
  }
}
countElement.addEventListener("input",updateTotalPrice);
countElement .addEventListener('blur',validateCount);