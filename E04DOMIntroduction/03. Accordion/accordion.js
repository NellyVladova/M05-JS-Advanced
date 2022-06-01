function toggle() {
    const buttonName = document.getElementsByClassName('button')[0];
    const buttonContext = buttonName.textContent;
    if(buttonContext == 'More'){
        buttonName.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }else if( buttonContext == 'Less'){
        buttonName.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}