function solve() {
  const text = document.getElementById('input').value.split('.').filter(el => el.length >= 1);
  const output = document.getElementById('output');

  while(text.length > 0){
    const paragraph = text.splice(0, 3).join('. ') + '.';
    const newP = document.createElement('p');
    newP.textContent = paragraph;
    
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}