window.addEventListener('load', solution);

function solution() {
  const getName = document.getElementById('fname');
  const getEmail = document.getElementById('email');
  const getPhone = document.getElementById('phone');
  const getAddress = document.getElementById('address');
  const getPostalCode = document.getElementById('code');
  const submitButton = document.getElementById('submitBTN');

  submitButton.addEventListener('click', submit);

  const ul = document.getElementById('infoPreview');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');

  function submit(event) {
    event.preventDefault();

    const nameValue = getName.value;
    const emailValue = getEmail.value;
    const phoneValue = getPhone.value;
    const addressValue = getAddress.value;
    const postalCodeValue = getPostalCode.value;

    if (!nameValue || !emailValue) {
      return;
    }

    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;

    getName.disabled = true;
    getEmail.disabled = true;
    getPhone.disabled = true;
    getAddress.disabled = true;
    getPostalCode.disabled = true;

    const liName = document.createElement('li');
    const liEmail = document.createElement('li');
    const liPhone = document.createElement('li');
    const liAddress = document.createElement('li');
    const liPOstalCode = document.createElement('li');

    liName.textContent = `Full Name: ${nameValue}`;
    liEmail.textContent = `Email: ${emailValue}`;
    liPhone.textContent = `Phone Number: ${phoneValue}`;
    liAddress.textContent = `Address: ${addressValue}`;
    liPOstalCode.textContent = `Postal Code: ${postalCodeValue}`;

    ul.appendChild(liName);
    ul.appendChild(liEmail);
    ul.appendChild(liPhone);
    ul.appendChild(liAddress);
    ul.appendChild(liPOstalCode);

    editButton.addEventListener('click', edit);
    continueButton.addEventListener('click', onContinue);

    function edit() {
      getName.value = nameValue;
      getEmail.value = emailValue;
      getPhone.value = phoneValue;
      getAddress.value = addressValue;
      getPostalCode.value = postalCodeValue;

      submitButton.disabled = false;
      editButton.disabled = true;
      continueButton.disabled = true;

      getName.disabled = false;
      getEmail.disabled = false;
      getPhone.disabled = false;
      getAddress.disabled = false;
      getPostalCode.disabled = false;

      ul.removeChild(liName);
      ul.removeChild(liEmail);
      ul.removeChild(liPhone);
      ul.removeChild(liAddress);
      ul.removeChild(liPOstalCode);
    }
    function onContinue() {
      const divBlock = document.getElementById('block');
      const resultMessage = document.createElement('h3');
      resultMessage.textContent = 'Thank You For Your Reservation!';

      const blockChilds = Array.from(document.getElementById('block').childNodes);

      for (const el of blockChilds) {
        divBlock.removeChild(el);
      }
      
      divBlock.appendChild(resultMessage);
    }

    getName.value = '';
    getEmail.value = '';
    getPhone.value = '';
    getAddress.value = '';
    getPostalCode.value = '';
  }

}
