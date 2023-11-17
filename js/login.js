document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('php/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data === "Login successful") {
            window.location.href = 'index.html'; // Redirect to the main page after login
        }
    })
    .catch(error => console.error('Error:', error));
});
