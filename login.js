const btn = document.querySelector(".login-button");


btn.addEventListener("click", () => {
    
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const APIkey = document.querySelector("#key");
    
    validateForm(username.value, password.value, APIkey.value);

});

function validateForm(username,password,key) {

    if(username == "") alert("Please enter your username");
    else if(password == "") alert("Please enter your password");
    else if(key == "") alert("Please enter your API key");
    
}


