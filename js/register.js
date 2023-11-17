document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('php/register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data.includes('New user registered successfully')) {
            window.location.href = 'login.html';
        }
    })
    .catch(error => console.error('Error:', error));
});
