function create(words) {
   let body = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      div.addEventListener('click', onClick);

      let paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none';
      div.appendChild(paragraph);

      body.appendChild(div);

   }
   function onClick(event){
      event.currentTarget.children[0].style.display = '';
   }
}