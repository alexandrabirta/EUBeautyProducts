<?php
session_start();
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $username = $_POST['username'];
    $email = $_POST['email'];

    $stmt = $conn->prepare("UPDATE users SET username = ?, email = ? WHERE id = ?");
    $stmt->bind_param("ssi", $username, $email, $user_id);

    if ($stmt->execute()) {
        echo "User information updated successfully";
    } else {
        echo "Error updating user information: " . $conn->error;
    }

    $stmt->close();
} else {
    echo "User not logged in or invalid request";
}

$conn->close();
?>
