<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
	require_once($_SERVER['DOCUMENT_ROOT'].'/lib/phpmailer/src/Exception.php');
	require_once($_SERVER['DOCUMENT_ROOT'].'/lib/phpmailer/src/PHPMailer.php');
	require_once($_SERVER['DOCUMENT_ROOT'].'/lib/phpmailer/src/SMTP.php');

$mail = new PHPMailer;
	$sendto   = "evgenkarp01@ya.ru";
	$usermail = "noreply@vesem-s-umom.ru";
    $mail->setFrom($usermail, 'Обработчик почты VESEM-S-UMOM');
    $mail->addAddress($sendto,'Грузоперевозки');
    $mail->addReplyTo($sendto,'Грузоперевозки');


     $mail->isHTML(true);   


           












	

	if(isset($_POST['name_modal'])){
		$name = strip_tags($_POST['name_modal']);
	}else if(isset($_POST['name_cont'])){
		$name = strip_tags($_POST['name_cont']);
	}else{
		$name = '';
	}
		$name = htmlspecialchars($name);
		$name = trim($name);
	if ($name == ""){
		$name .= "Не было указано имя, поэтому указываю внешний IP: ";
		$name .=  $_SERVER['REMOTE_ADDR'];
	}
	
	if(isset($_POST['phone_modal'])){
		$tel = strip_tags($_POST['phone_modal']);
	}else if(isset($_POST['phone'])){
		$tel = strip_tags($_POST['phone']);
	}else if(isset($_POST['phone_cont'])){
		$tel = strip_tags($_POST['phone_cont']);
	}else{
		$tel = '';
	}
		$tel = htmlspecialchars($tel);
		$tel = trim($tel);

		

		$content  = nl2br($_POST['phone_message']);
		$content = strip_tags($content);
		$content = htmlspecialchars($content);
		$content = trim($content);
		


		$subject  = "Новое сообщение - с сайта ROSTOVBAGET.RU - ПИСЬМО->ФОРМА";

			
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новое сообщение - ПИСЬМО</h2>\r\n";
	$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$tel."</p>\r\n";
	if(isset($_POST['phone_message'])){
		$msg .= "<p><strong>Сообщение:</strong> ".$content."</p>\r\n";
	}
	$msg .= "</body></html>";




	$mail->Subject = $subject;
    $mail->Body = $msg;


            if($mail->send()) {
                echo "<div id='contact_successfully'>Мы уже обрабатываем ваше сообщение!</div>";
            } else {
				echo "Ошибка при передаче данных";
			}



?>