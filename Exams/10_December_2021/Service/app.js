window.addEventListener('load', solve);

function solve() {
    const getType = document.getElementById('type-product');
    const getDescription = document.getElementById('description');
    const getClientName = document.getElementById('client-name');
    const getClientPhone = document.getElementById('client-phone');
    const sendButton = document.querySelector('form button');
    const clearButton = document.querySelector('.clear-btn');

    sendButton.addEventListener('click', send);
    clearButton.addEventListener('click', clear);

    const receivedSection = document.getElementById('received-orders');
    const completeSection = document.getElementById('completed-orders');

    function send(ev) {
        ev.preventDefault();

        const typeValue = getType.value;
        const descriptionValue = getDescription.value;
        const clientNameValue = getClientName.value;
        const clientPhoneValue = getClientPhone.value;

        if (!descriptionValue || !clientNameValue || !clientPhoneValue) {
            return;
        }

        const div = document.createElement('div');
        div.classList.add('container');

        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const startButton = document.createElement('button');
        const finishButton = document.createElement('button');

        h2.textContent = 'Product type for repair: ' + typeValue;
        h3.textContent = 'Client information: ' + clientNameValue + ', ' + clientPhoneValue;
        h4.textContent = 'Description of the problem: ' + descriptionValue;
        startButton.textContent = 'Start repair';
        finishButton.textContent = 'Finish repair';


        startButton.classList.add('start-btn');
        startButton.addEventListener('click', start);

        finishButton.classList.add('finish-btn');
        finishButton.addEventListener('click', finish);

        finishButton.disabled = true;

        function start() {
            startButton.disabled = true;
            finishButton.disabled = false;
        }
        function finish() {
            div.removeChild(startButton);
            div.removeChild(finishButton);
            receivedSection.removeChild(div);
            completeSection.appendChild(div);
        }
        
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startButton);
        div.appendChild(finishButton);
        
        receivedSection.appendChild(div);

        getType.value = '';
        getDescription.value = '';
        getClientName.value = '';
        getClientPhone.value = '';
    }

    function clear() {
        const orders = document.querySelectorAll('#completed-orders div');

        for (const order of orders) {
            completeSection.removeChild(order);
        }
    }
}