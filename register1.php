<?php
// Define the email address to receive the form data
$to_email = "atuhaumar@gmail.com";

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Collect the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $date=$_POST["date"];
  $message = $_POST["message"];
  

  // Create a subject for the email
  $subject = "New Form Submission";

  // Create the email body
  $body = "Name: $name\nEmail: $email\nPhone: $date\nDate: $phone\nMessage: $message";

  // Send the email
  mail($to_email, $subject, $body);

  // Display a success message
  echo "Form submitted successfully!";
}
?>