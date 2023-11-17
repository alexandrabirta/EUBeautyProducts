<?php
session_start();
include 'db_connect.php';

// Verifică dacă cererea este POST și utilizatorul este autentificat
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $product_id = $_POST['product_id'];

    // Verifică dacă produsul este deja în lista de favorite
    $stmt = $conn->prepare("SELECT * FROM favorites WHERE user_id = ? AND product_id = ?");
    $stmt->bind_param("ii", $user_id, $product_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        // Produsul nu este în favorite, adaugă-l
        $stmt = $conn->prepare("INSERT INTO favorites (user_id, product_id) VALUES (?, ?)");
        $stmt->bind_param("ii", $user_id, $product_id);

        if ($stmt->execute()) {
            echo "Product added to favorites";
        } else {
            echo "Error adding to favorites: " . $conn->error;
        }
    } else {
        echo "Product already in favorites";
    }

    $stmt->close();
} else {
    echo "User not logged in or invalid request";
}

$conn->close();
?>
