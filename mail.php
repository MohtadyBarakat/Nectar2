<?php
ini_set('default_charset','UTF-8'); 
require_once('PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer();

$name = $_POST['your-name'];
$email = $_POST['your-email'];
$phone = $_POST['your-phone'];
$subject = $_POST['your-subject'];
$message = $_POST['your-message'];
$formcontent="From: ".$name."\n subject: ".$subject."\n EMail: ".$email."\n Phone: ".$phone."\n  Message: ".$message;

$mail->isSMTP();                                        // Set mailer to use SMTP
$mail->Host = 'smtp.zoho.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@nectarfoundation.org';                 // SMTP username
$mail->Password = '1234567890987654321';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->CharSet = 'UTF-8';

$mail->setFrom('info@nectarfoundation.org', 'Info @ Nectar_benectarian');
$mail->addAddress('info@nectarfoundation.org', 'Info @ Nectar_benectarian');     // Add a recipient

$mail->isHTML(false);                                  // Set email format to HTML

$mail->Subject = 'Nectar_Contact _ '.$subject;
$mail->Body    = $formcontent;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    header('Location:index.html');
}
?>