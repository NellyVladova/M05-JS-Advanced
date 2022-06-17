function validate() {
    document.querySelector("#submit").type = "button";
    document.querySelector("#company").addEventListener("change", (event) => {
        console.log(event.target);
        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }
    });

    document.querySelector("#submit").addEventListener("click", (event) => {

        let validOutputArr = [];
        let getUserName = document.querySelector("#username");
        let getEmail = document.querySelector("#email");
        let getPassword = document.querySelector("#password");
        let getConfirmPassword = document.querySelector("#confirm-password");
        let checkBox = document.querySelector("#company");
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let passwordPattern = /^[\w]{5,15}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

        if (getUserName.value.match(usernamePattern)) {
            getUserName.style.borderColor = "";
            validOutputArr.push(true);
        } else {
            getUserName.style.borderColor = "red";
            validOutputArr.push(false);
        }
        if (getEmail.value.match(emailPattern)) {
            getEmail.style.borderColor = "";
            validOutputArr.push(true);
        } else {
            getEmail.style.borderColor = "red";
            validOutputArr.push(false);
        }
        if (getPassword.value == getConfirmPassword.value &&
            getPassword.value.match(passwordPattern) &&
            getConfirmPassword.value.match(passwordPattern)) {
            getConfirmPassword.style.borderColor = "";
            getPassword.style.borderColor = "";
            validOutputArr.push(true);
        } else {
            getConfirmPassword.style.borderColor = "red";
            getPassword.style.borderColor = "red";
            validOutputArr.push(false);
        }
        if (checkBox.checked) {
            let companyNumber = document.querySelector("#companyNumber");
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                validOutputArr.push(false);
            } else {
                companyNumber.style.borderColor = "";
                validOutputArr.push(true);
            }
        }
        if (!validOutputArr.includes(false)) {
            document.querySelector("#valid").style.display = "block";
        } else {
            document.querySelector("#valid").style.display = "none";
        }
    });
}
