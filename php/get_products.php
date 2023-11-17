<?php
include 'db_connect.php';

$sql = "SELECT id, name, description, price, country, image_url FROM products";
$result = $conn->query($sql);

$products = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    echo json_encode($products);
} else {
    echo json_encode($products); // Trimite un array gol dacă nu există produse
}
$conn->close();
?>
