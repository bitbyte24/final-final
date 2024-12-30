
// Get all the product buttons
const buyNowButtons = document.querySelectorAll('.buy-now');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const detailsButtons = document.querySelectorAll('.details');

// Add event listeners to the buttons
buyNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Handle the "Buy Now" button click
    window.location.href = 'payment.html';
  });
});

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Handle the "Add to Cart" bcautton click
    
    const productName = button.parentNode.querySelector('h2').textContent;
    const productPrice = button.parentNode.querySelector('p').textContent;
    const outLet=document.querySelector('notify');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('item added to cart')
  });
});

detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Handle the "Details" button click
    const productName = button.parentNode.querySelector('h2').textContent;
    const productPrice = button.parentNode.querySelector('p').textContent;
    localStorage.setItem('productDetails', JSON.stringify({ name: productName, price: productPrice }));
    window.location.href = 'details.html';
  });
});

//-----room buttons event handlers======

