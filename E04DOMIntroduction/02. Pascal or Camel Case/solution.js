function solve() {
  const textParts = ((document.getElementById('text').value).toLowerCase()).split(' ');
  const convention = document.getElementById('naming-convention').value;
  let result = '';

  if(convention == 'Pascal Case'){
    for (let i = 0; i < textParts.length; i++) {
      result += textParts[i].charAt(0).toUpperCase() + textParts[i].slice(1, textParts[i].length);
    }
  }else if(convention == 'Camel Case'){
    for (let i = 0; i < textParts.length; i++) {
      result += textParts[i].charAt(0).toUpperCase() + textParts[i].slice(1, textParts[i].length);
    }
    result = result.charAt(0).toLowerCase() + result.slice(1, result.length);
  }else{
      result = 'Error!';
  }
  document.getElementById('result').textContent = result;
}