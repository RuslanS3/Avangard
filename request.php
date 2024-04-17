<?php

  $popupname  = trim($_POST['popupname']);
  $popupphone = trim($_POST['popupphone']);
  $popupdate  = trim($_POST['popupdate']);

  if(empty($popupname) AND empty($popupphone) AND empty($popupdate))
  {
    exit;
  }
  else 
  {
    $recipient = 'info@companyemail.com';
    $subject   = 'Request appointment';

    $mail_body =
    "Name:  "  . $popupname  ."\r\n" .
    "Phone: "  . $popupphone ."\r\n" .
    "Date:  "  . $popupdate;

    $header = "From: " . $popupname . " <" . $recipient . ">\r\n";
    mail($recipient, $subject, $mail_body, $header);
    
    echo 'Send';

  }