<?php

 $contactname    = trim($_POST['contactname']);
 $contactphone   = trim($_POST['contactphone']);
 $contactemail   = trim($_POST['contactemail']);
 $contactsubject = trim($_POST['contactsubject']);
 $contactmessage = trim($_POST['contactmessage']);

 if(empty($contactname) OR empty($contactphone) OR empty($contactemail) OR empty($contactsubject) OR empty($contactmessage)) 
 {
    exit;
 }
 else 
 {
    $recipient = 'info@companyemail.com';
    $mail_body =
    "Name: "      . $contactname  ."\r\n" .
    "Phone: "     . $contactphone ."\r\n".
    "Email: "     . $contactemail ."\r\n" .
    "Message: "   . $contactmessage;

    $header = "From: " . $contactname  . " <" . $recipient . ">\r\n";
    mail($recipient, $contactsubject, $mail_body, $header);
    
    echo 'Send';
 }