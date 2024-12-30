<?php
require_once 'config.php';

$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

function query($sql) {
  global $conn;
  return $conn->query($sql);
}

function fetch_assoc($result) {
  return $result->fetch_assoc();
}

function close_conn() {
  global $conn;
  $conn->close();
}
?>

