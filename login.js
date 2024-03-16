function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    var correctUsername = 'admin';
    var correctPassword = 'pass';

    
    if (username === "kimball" && password === "pass") {
        loginMessage.textContent = 'Login successful!';
        usernameDisplay.textContent = 'Welcome, ' + username + '!';

        localStorage.setItem('username', username);

    } else {
        loginMessage.textContent = 'Login failed: Incorrect username or password.';
        usernameDisplay.textContent = ''; // Clear the username display

        localStorage.removeItem('username');
    }
}
function displayStoredUsername() {
    var storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        usernameDisplay.textContent = 'Welcome, ' + storedUsername + '!';
    }
}


displayStoredUsername();
