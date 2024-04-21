

  document.addEventListener('DOMContentLoaded', ()=>{
    const jsonData = localStorage.getItem('cart');
    let totalSum = 0;
    if(jsonData){
      const cartData = JSON.parse(jsonData),
            cartList = document.querySelector('.cart-items');
            console.log(cartData);
      cartData.forEach(item=>{
        const card = document.createElement("article");
        card.classList.add("cart-item");
        let img = document.createElement("img")
        img.src = item.img;
        card.appendChild(img);
        let h2 = document.createElement("h2");
        h2.textContent = item.name;
        card.appendChild(h2);
        let price = document.createElement("p");
        price.textContent = item.price;
        card.appendChild(price);
        let btn = document.createElement("button");
        btn.classList.add('remove');
        btn.textContent = "Удалить";
        card.appendChild(btn);
        cartList.appendChild(card);
        totalSum += Number(item.price.replace("руб.", "").replace(" ", "").trim());
      })
      const total = document.querySelector('.total');
      total.innerHTML = `Итого: ${totalSum} руб.`;
      const deleteCard = document.querySelectorAll('.remove');
      deleteCard.forEach(btn =>{
        // btn.addEvenetListener("click", function(){
        //   const parent = btn.closest(".cart-item");
        //   cartData.splice(index, 1);
        //   localStorage.setItem("cartData", JSON.stringify(cartData));
        //   cartList.removeChild(parent);
        // })
        btn.addEventListener("click", function() {
          const parent = btn.closest(".cart-item");
          for (let key in cartData) {
            if (cartData[key].name === parent.querySelector("h2").innerText) {
              price = Number(cartData[key].price.replace("руб.", "").replace(" ", "").trim())
              totalSum -= price
              total.innerHTML = `Итого: ${totalSum} руб.`;
              delete cartData[key];
              break;
            }
          }
          localStorage.setItem("cartData", JSON.stringify(cartData));
          cartList.removeChild(parent);
          console.log(this);
          console.log(parent);
          
        })
      console.log(btn);
    })
    }
    
  })