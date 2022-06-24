window.addEventListener('load', solve);

function solve() {
    const getModel = document.getElementById('model');
    const getYear = document.getElementById('year');
    const getDescription = document.getElementById('description');
    const getPrice = document.getElementById('price');
    const addButton = document.getElementById('add');
    addButton.type = 'button';

    addButton.addEventListener('click', addFurniture);

    const tbody = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');

    function addFurniture(event) {
        event.preventDefault();

        const modelValue = getModel.value;
        const yearValue = getYear.value;
        const descriptionValue = getDescription.value;
        const priceValue = getPrice.value;

        if (!modelValue || yearValue < 0 || !descriptionValue || priceValue < 0) {
            return;
        }

        const trMainInfo = document.createElement('tr');
        const tdFurniture = document.createElement('td');
        const tdPrice = document.createElement('td');
        const tdButtons = document.createElement('td');
        const moreButton = document.createElement('button');
        const buyButton = document.createElement('button');
        const trHiddenInfo = document.createElement('tr');
        const tdYear = document.createElement('td');
        const tdDescription = document.createElement('td');

        trMainInfo.classList.add('info');
        trHiddenInfo.classList.add('hide');
        moreButton.classList.add('moreBtn');
        buyButton.classList.add('buyBtn');

        tdDescription.colSpan = "3";

        tdFurniture.textContent = modelValue;
        tdPrice.textContent = Number(priceValue).toFixed(2);
        tdYear.textContent = `Year: ${yearValue}`;
        tdDescription.textContent = `Description: ${descriptionValue}`;
        moreButton.textContent = 'More Info';
        buyButton.textContent = 'Buy it';

        moreButton.addEventListener('click', moreInfo);
        buyButton.addEventListener('click', buyBook);

        function moreInfo() {
            if (moreButton.textContent == 'Less Info') {
                moreButton.textContent = 'More Info';
                trHiddenInfo.style.display = 'none';
            } else {
                moreButton.textContent = 'Less Info';
                trHiddenInfo.style.display = 'contents';
            }
        }
        function buyBook() {
            tbody.removeChild(trMainInfo);
            tbody.removeChild(trHiddenInfo);

            totalPrice.textContent = (Number(totalPrice.textContent) + Number(priceValue)).toFixed(2);
        }

        tdButtons.appendChild(moreButton);
        tdButtons.appendChild(buyButton);

        trMainInfo.appendChild(tdFurniture);
        trMainInfo.appendChild(tdPrice);
        trMainInfo.appendChild(tdButtons);
        trHiddenInfo.appendChild(tdYear);
        trHiddenInfo.appendChild(tdDescription);

        tbody.appendChild(trMainInfo);
        tbody.appendChild(trHiddenInfo);

        getModel.value = '';
        getYear.value = '';
        getDescription.value = '';
        getPrice.value = '';
    }
}
