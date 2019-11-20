<?php


//..... connecting to MySQL .....
	$host = "localhost";
	$user = "root";
	$password = "";
	$db = "drcsystem";

// Create connection
$conn = new mysqli($host, $user, $password, $db);
mysqli_set_charset($conn, "utf8");
// Check connection
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
} 

?>