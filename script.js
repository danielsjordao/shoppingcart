
if (document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

//Form Modal
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector ("#modal");
const fade = document.querySelector ("#fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));  
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener('click', () => toggleModal());
});

const btn = document.querySelector ("#close-modal");
btn.addEventListener ('click', function() {
  alert("Thanks! Paypal Payment Concluded")
});

// Product Button
function ready () {
  
  const removeProduct = document.getElementsByClassName ("remove")
  for (var i = 0; i < removeProduct.length; i++) {
    removeProduct[i].addEventListener("click", removeProducts)
  }

  const quantityInputs = document.getElementsByClassName("product-qtd-price")
  for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs [i]. addEventListener("change", updateTotal)
  }
}

function removeProducts (event) {
  event.target.parentElement.parentElement.remove()
  updateTotal()
}

function updateTotal (){
  
  let totalAmount = 0
const cartProducts = document.getElementsByClassName("cart-product")
for (var i =0; i < cartProducts.length; i++){
  console.log(cartProducts[i])
  const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("U$", "")
  const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-price")[0].value
  
  totalAmount += productPrice * productQuantity
  
}
  totalAmount = totalAmount.toFixed(2)

  document.querySelector(".value").innerText = "U$" +  totalAmount
  document.querySelector(".total-value").innerText = "U$" + totalAmount
}


