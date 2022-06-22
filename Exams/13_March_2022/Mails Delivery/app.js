function solve() {
    const getRecipient = document.getElementById('recipientName');
    const getTitle = document.getElementById('title');
    const getMessage = document.getElementById('message');
    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');

    const mailList = document.getElementById('list');
    const sentMails = document.querySelector('.sent-list');
    const deletedMails = document.querySelector('.delete-list');

    addButton.type = 'button';
    resetButton.type = 'button';

    addButton.addEventListener('click', addMail);
    resetButton.addEventListener('click', resetMail);


    function addMail(){
        const recipientText = getRecipient.value;
        const titleText = getTitle.value;
        const messageText = getMessage.value;
        let toRemove = null;

        if(!recipientText || !titleText || !messageText){
            return;
        }

        const li = document.createElement('li');
        const title = document.createElement('h4');
        title.textContent = `Title: ${titleText}`;

        const recipient = document.createElement('h4');
        recipient.textContent = `Recipient Name: ${recipientText}`;

        const message = document.createElement('span');
        message.textContent = messageText;

        const div = document.createElement('div');
        div.id = 'list-action';

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.id = 'send';
        submitButton.textContent = 'Send';

        submitButton.addEventListener('click', (event) => {
            toRemove = event.target.parentElement.parentElement;
            mailList.removeChild(toRemove);
            div.removeChild(submitButton);

            const mailTitle = document.createElement('span');
            mailTitle.textContent = `Title: ${titleText}`;

            const mailRecipient = document.createElement('span');
            mailRecipient.textContent = `To: ${recipientText}`;

            const divEl = document.createElement('div');
            divEl.classList.add('btn');

            const button = document.createElement('button');
            button.addEventListener('click', (e) => {
                toRemove = e.target.parentElement.parentElement;
                toRemove.removeChild(divEl);
                deletedMails.appendChild(toRemove);
            });

            button.type = 'submit';
            button.classList.add('delete');
            button.textContent = 'Delete';
            div.appendChild(button);

            li.removeChild(title);
            li.removeChild(recipient);
            li.removeChild(message);
            li.removeChild(div);

            li.appendChild(mailRecipient);
            li.appendChild(mailTitle);
            li.appendChild(divEl);

            sentMails.appendChild(toRemove);
        });

        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', (event) => {
            toRemove = event.target.parentElement.parentElement;
            deletedMails.appendChild(toRemove);

            const mailTitle = document.createElement('span');
            mailTitle.textContent = `Title: ${titleText}`;

            const mailRecipient = document.createElement('span');
            mailRecipient.textContent = `To: ${recipientText}`;

            li.removeChild(title);
            li.removeChild(recipient);
            li.removeChild(message);
            li.removeChild(div);

            li.appendChild(mailRecipient);
            li.appendChild(mailTitle);
        });

        deleteButton.type = 'submit';
        deleteButton.id = 'delete';
        deleteButton.textContent = 'Delete';

        div.appendChild(submitButton);
        div.appendChild(deleteButton);

        li.appendChild(title);
        li.appendChild(recipient);
        li.appendChild(message);
        li.appendChild(div);

        mailList.appendChild(li);

        resetMail();

    }
    function resetMail(){
        getRecipient.value = '';
        getTitle.value = '';
        getMessage.value = '';
    }
}
solve();


