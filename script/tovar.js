const addToCart = document.querySelector(".buy");

addToCart.addEventListener("click", ()=>{
    const productName = document.querySelector('h1').innerHTML,
          productPrice = document.querySelector('.price').innerHTML,
          productImg = document.querySelector('.game_image').getAttribute('src');
    const cartItem = {
      name: productName,
      img: productImg.slice(1),
      price: productPrice
    }
    let cart = localStorage.getItem('cart');
    if(!cart) cart = [];
    else cart = JSON.parse(cart);
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart)
})



