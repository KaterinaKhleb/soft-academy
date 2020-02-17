
<?php
$to="info@softacademy.ru";
$subject="Request from the website.";
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);
$name = urldecode($name);
$massage = urldecode($mesasge);
$email = urldecode($email);
$phone = urldecode($phone);
$name = trim($name);
$message = trim($message);
$email = trim($email);
$phone = trim($phone);
$headers = array(
    'From' => $name ,
    'Reply-To' => $email,
    'Call-to' => $phone,
    'X-Mailer' => 'PHP/' . phpversion()
);

if (@mail($to, $subject, $message, $headers))
{
    echo "Request is received";
    $name=$email=$mesasge="";
}else {
    echo "Message was not sent";
}
?>



<?php
$to="info@softacademy.ru";
$subject="Request from the website.";
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$email_message = "Form details below.\n\n";
 
     
function clean_string($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"",$string);
}

$email_message .= "Name: ".clean_string($name)."\n";
$email_message .= "Email: ".clean_string($email)."\n";
$email_message .= "Telephone: ".clean_string($phone)."\n";
$email_message .= "Comments: ".clean_string($message)."\n";

// create email headers
$headers = 'From: '.$email"\r\n".
'Reply-To: '.$email"\r\n" .
'X-Mailer: PHP/' . phpversion();
if (mail($to, $subject, $email_message, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
?>