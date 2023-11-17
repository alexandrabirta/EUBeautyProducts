<?php
$servername = "localhost";
$username = "root"; // Numele de utilizator implicit în XAMPP
$password = ""; // Parola implicită în XAMPP este goală
$dbname = "eu_beauty_products"; // Numele bazei de date

// Crează conexiunea
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifică conexiunea
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
