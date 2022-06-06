function solve() {
   Array.from(document.querySelectorAll('.product .product-add .add-product')).forEach(el => el.addEventListener('click', onClick));
   let box = document.getElementsByTagName('textarea')[0];
   document.querySelector('.checkout').addEventListener('click', checkout);
   let finalResult = '';
   let listWithProducts = '';
   let totalPrice = 0;
   let productsList = [];

   function onClick(ev) {
      let parent = ev.target.parentElement.parentElement;//row div
      let productPrice = parent.querySelector('.product-line-price').textContent;
      totalPrice += Number(productPrice);
      let productName = parent.querySelector('.product-title').textContent;
      productsList.push(productName);
      listWithProducts = `Added ${productName} for ${productPrice} to the cart.\n`;
      box.textContent += listWithProducts;
   }

   function checkout(event) {
      let finalList = '';
      for (const product of productsList) {
         if (!finalList.includes(product)) {
            finalList += product + ', ';
         }
      }
      finalList = finalList.substring(0, finalList.length - 2);
      finalResult = `You bought ${finalList} for ${totalPrice.toFixed(2)}.`
      box.textContent += finalResult;
      Array.from(document.querySelectorAll('.product .product-add .add-product')).forEach(el => el.removeEventListener('click', onClick));
      document.querySelector('.checkout').removeEventListener('click', checkout);
   }
}