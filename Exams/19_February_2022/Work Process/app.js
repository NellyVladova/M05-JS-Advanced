function solve() {
    const getFirstName = document.getElementById('fname');
    const getLastName = document.getElementById('lname');
    const getEmail = document.getElementById('email');
    const getBirth = document.getElementById('birth');
    const getPosition = document.getElementById('position');
    const getSalary = document.getElementById('salary');
    const addButton = document.getElementById('add-worker');
    addButton.addEventListener('click', addWorker);

    const tbody = document.getElementById('tbody');
    const span = document.getElementById('sum');

    function addWorker(ev) {
        ev.preventDefault();
        const firstNameValue = getFirstName.value;
        const lastNameValue = getLastName.value;
        const emailValue = getEmail.value;
        const birthValue = getBirth.value;
        const positionValue = getPosition.value;
        const salaryValue = Number(getSalary.value);
        let sum = 0;

        if (!firstNameValue || !lastNameValue || !emailValue || !birthValue || !positionValue || !salaryValue) {
            return;
        }
        const tr = document.createElement('tr');
        const tdFirstName = document.createElement('td');
        const tdLastName = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdBirth = document.createElement('td');
        const tdPosition = document.createElement('td');
        const tdSalary = document.createElement('td');
        const tdButtons = document.createElement('td');
        const firedButton = document.createElement('button');
        const editButton = document.createElement('button');

        tdFirstName.textContent = firstNameValue;
        tdLastName.textContent = lastNameValue;
        tdEmail.textContent = emailValue;
        tdBirth.textContent = birthValue;
        tdPosition.textContent = positionValue;
        tdSalary.textContent = salaryValue;
        firedButton.textContent = 'Fired';
        editButton.textContent = 'Edit';

        firedButton.classList.add('fired');
        editButton.classList.add('edit');
        tdButtons.appendChild(firedButton);
        tdButtons.appendChild(editButton);
        firedButton.addEventListener('click', fired);
        editButton.addEventListener('click', edit);

        function fired() {
            tbody.removeChild(tr);

            let spanValue = Number(span.textContent);
            sum = spanValue - salaryValue;
            span.textContent = sum.toFixed(2);
        }
        function edit() {
            getFirstName.value = firstNameValue;
            getLastName.value = lastNameValue;
            getEmail.value = emailValue;
            getBirth.value = birthValue;
            getPosition.value = positionValue;
            getSalary.value = salaryValue;

            tbody.removeChild(tr);

            let spanValue = Number(span.textContent);
            sum = spanValue - salaryValue;
            span.textContent = sum.toFixed(2);
        }

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirth);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(tdButtons);

        tbody.appendChild(tr);

        getFirstName.value = '';
        getLastName.value = '';
        getEmail.value = '';
        getBirth.value = '';
        getPosition.value = '';
        getSalary.value = '';

        let spanValue = Number(span.textContent);
        sum = spanValue + salaryValue;
        span.textContent = sum.toFixed(2);

    }
}
solve();
