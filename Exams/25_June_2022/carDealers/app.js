window.addEventListener("load", solve);

function solve() {
  const getMake = document.getElementById('make');
  const getModel = document.getElementById('model');
  const getYear = document.getElementById('year');
  const getFuel = document.getElementById('fuel');
  const getOriginalCost = document.getElementById('original-cost');
  const getSellingPrice = document.getElementById('selling-price');
  const publishButton = document.getElementById('publish');

  publish.type = 'button';
  publishButton.addEventListener('click', publish);

  const tbody = document.getElementById('table-body');
  const ul = document.getElementById('cars-list');
  const totalProfit = document.getElementById('profit');

  function publish(event) {
    event.preventDefault();

    const makeValue = getMake.value;
    const modelValue = getModel.value;
    const yearValue = getYear.value;
    const fuelValue = getFuel.value;
    const originalCostValue = getOriginalCost.value;
    const sellingPriceValue = getSellingPrice.value;

    if (sellingPriceValue <= originalCostValue || !makeValue || !modelValue || !yearValue || !fuelValue || !originalCostValue || !sellingPriceValue) {
      return;
    }

    const tr = document.createElement('tr');
    const tdMake = document.createElement('td');
    const tdModel = document.createElement('td');
    const tdYear = document.createElement('td');
    const tdFuel = document.createElement('td');
    const tdOriginalCost = document.createElement('td');
    const tdSellingPrice = document.createElement('td');
    const tdButtons = document.createElement('td');
    const editButton = document.createElement('button');
    const sellButton = document.createElement('button');

    tr.classList.add('row');
    editButton.classList.add('action-btn', 'edit');
    sellButton.classList.add('action-btn', 'sell');

    editButton.addEventListener('click', edit);
    sellButton.addEventListener('click', sell);

    tdMake.textContent = makeValue;
    tdModel.textContent = modelValue;
    tdYear.textContent = yearValue;
    tdFuel.textContent = fuelValue;
    tdOriginalCost.textContent = originalCostValue;
    tdSellingPrice.textContent = sellingPriceValue;
    editButton.textContent = 'Edit';
    sellButton.textContent = 'Sell';

    function edit() {
      getMake.value = makeValue;
      getModel.value = modelValue;
      getYear.value = yearValue;
      getFuel.value = fuelValue;
      getOriginalCost.value = originalCostValue;
      getSellingPrice.value = sellingPriceValue;

      tbody.removeChild(tr);
    }
    function sell() {
      tbody.removeChild(tr);

      const li = document.createElement('li');
      const makeAndModelSpan = document.createElement('span');
      const yearSpan = document.createElement('span');
      const priceSpan = document.createElement('span');

      li.classList.add('each-list');

      makeAndModelSpan.textContent = `${makeValue} ${modelValue}`;
      yearSpan.textContent = yearValue;
      let difference = sellingPriceValue - originalCostValue;
      priceSpan.textContent = (difference);

      li.appendChild(makeAndModelSpan);
      li.appendChild(yearSpan);
      li.appendChild(priceSpan);
      ul.appendChild(li);

      totalProfit.textContent = (Number(totalProfit.textContent) + Number(difference)).toFixed(2);
    }

    tdButtons.appendChild(editButton);
    tdButtons.appendChild(sellButton);

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOriginalCost);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdButtons);

    tbody.appendChild(tr);

    getMake.value = '';
    getModel.value = '';
    getYear.value = '';
    getFuel.value = '';
    getOriginalCost.value = '';
    getSellingPrice.value = '';
  }
}
