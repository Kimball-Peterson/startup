function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if(data.token) {
            console.log('Login successful!', data.token);
            window.location.href= "classifieds.html";
            // Handle login success, e.g., redirect or store token
        } else {
            alert('Login failed: ' + data.token);
        }
    })
    .catch(error => console.error('Login error:', error));
}

function register() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful!');
    })
    .catch(error => console.error('Registration error:', error));
}