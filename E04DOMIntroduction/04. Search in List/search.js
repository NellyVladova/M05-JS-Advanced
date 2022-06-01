function search() {
   const search = document.getElementById('searchText').value;
   const listOfElements = document.querySelectorAll('li');
   const result = document.getElementById('result');
   let counter = 0;

   for (const el of listOfElements) {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = '';
   }

   for (const el of listOfElements) {
      const elementContent = el.textContent;
      if(elementContent.match(search)){
         counter++;
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${counter} matches found`;
}
