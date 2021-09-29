<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if($name === '' || $mail=== '' || $phone=== '' || $message=== ''){
    echo json_encode('error');
}else{
    echo json_encode('Correcto: <br>Usuario:'.$name.'<br>Pass:'.$mail);
}

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'edoleddemo@gmail.com';
$asunto = 'Ayudame maestro';

mail($para, $asunto, $message, $header);

?>