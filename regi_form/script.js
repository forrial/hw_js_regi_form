function register() {
    if (passwords()) {
    const   username = document.getElementById("username"),
            email = document.getElementById("email"),
            password = document.getElementById("password"),
            confPassword = document.getElementById("confpassword"),
            checkbox = document.getElementById("check");

    if (username.value && email.value && password.value && confPassword.value && checkbox.checked) {
    
    alert("You are registrated!");
        } else {
    alert("Please! Fill in the fields and accept the rules!");
        }
    }
}

function passwords() {
    const   password = document.getElementById("password"),
            confPassword = document.getElementById("confpassword");

    if (password.value !== confPassword.value) {
        alert("Passwords are mismatched!");
        return false;
    } else {
        return true;
    }
}

function registerWithGoogle() {
    alert("Moved to register with Google!");
}

function registerWithGitHub() {
    alert("Moved to register with GitHub!");
}