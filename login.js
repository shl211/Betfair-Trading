const btn = document.querySelector(".login-button");


btn.addEventListener("click", () => {
    
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const APIkey = document.querySelector("#key");
    
    validated = validateForm(username.value, password.value, APIkey.value);
    
    if(validated) {
        directToDashboard();
    }
});

function validateForm(username,password,key) {

    validInput = checkInput(username,password,key);

    if(!validInput) {
        return false;
    }

    return true;
}

function directToDashboard() {
    const url = "/dashboard.html";
    window.location.replace(url);
}

function checkInput(username,password,key) {
    if(username == "") {
        alert("Please enter your username");
        return false;
    }
    else if(password == "") {
        alert("Please enter your password");
        return false;
    }
    else if(key == "") {
        alert("Please enter your API key");
        return false;
    }

    return true;
}

