function lockedProfile() {
    Array.from(document.querySelectorAll('button')).forEach(el => el.addEventListener('click', onClick));

    function onClick(ev){
        let parent = ev.target.parentElement;
        let profileState = parent.querySelector('input[type="radio"][value="unlock"]').checked;
        
        if(profileState){
            let moreInformation = parent.querySelector('div');
            if(ev.target.textContent == "Show more"){
                moreInformation.style.display = 'block';
                ev.target.textContent = "Hide it";
            }else{
                moreInformation.style.display = '';
                ev.target.textContent = "Show more";
            }
        }
    }
}