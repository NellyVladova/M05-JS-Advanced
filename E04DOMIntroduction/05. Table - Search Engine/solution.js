function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchText = (document.getElementById('searchField').value).toLowerCase();
      const rows = Array.from(document.querySelectorAll('.container tbody tr'));

      for (const el of rows) {
         let currElement = el.textContent.toLowerCase();
         if(currElement.includes(searchText)){
            el.classList.add('select');
         }else{
            el.classList.remove('select');
         }
      }
   }
}