document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('php/place_order.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        // După plasarea comenzii, redirecționează utilizatorul către o pagină de confirmare
    })
    .catch(error => console.error('Error:', error));
});
