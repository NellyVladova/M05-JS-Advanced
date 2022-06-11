function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');
    
    buttons[0].addEventListener('click', encodeAndSendIt);
    buttons[1].addEventListener('click', decodeAndReadIt);

    function encodeAndSendIt(ev) {
        let encodedMessage = '';
        let input = textAreas[0].value;
        for (let i = 0; i < input.length; i++) {
            encodedMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }
        textAreas[1].value = encodedMessage;
        textAreas[0].value = '';
    }

    function decodeAndReadIt(ev) {
        let decodedMessage = '';
        for (let i = 0; i < textAreas[1].value.length; i++) {
            decodedMessage += String.fromCharCode(textAreas[1].value[i].charCodeAt(0) - 1);
        }
        textAreas[1].value = decodedMessage;
    }
}