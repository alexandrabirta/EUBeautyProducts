<?php
session_start();
include 'db_connect.php';

if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];

    $stmt = $conn->prepare("SELECT products.* FROM favorites JOIN products ON favorites.product_id = products.id WHERE favorites.user_id = ?");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $favorites = array();
    while ($row = $result->fetch_assoc()) {
        $favorites[] = $row;
    }

    echo json_encode($favorites);
    
    $stmt->close();
} else {
    echo "User not logged in";
}

$conn->close();
?>
