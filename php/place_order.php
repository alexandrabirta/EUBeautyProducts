<?php
session_start();
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $zip = $_POST['zip'];
    $country = $_POST['country'];
    
    // Aici ar trebui gestionată logica de plată și confirmarea comenzii
    // De exemplu, salvarea detaliilor comenzii în baza de date și golirea coșului de cumpărături din sesiune
    
    echo "Order placed successfully";
} else {
    echo "User not logged in or invalid request";
}

$conn->close();
?>
