<?
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require './PHPMailer/src/Exception.php';
    require './PHPMailer/src/PHPMailer.php';
    require './PHPMailer/src/SMTP.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //кому письмо
    $mail->addAddress('');
    //тема письма
    $mail->Subject = 'Письмо';
    //тело письма
    $body = '';

    if(trim(!empty($_POST['name']))){
        $body.='<p> Имя: '.$_POST['name']. ' </p>';
    }
    if(trim(!empty($_POST['company']))){
        $body.='<p> Компания: '.$_POST['company']. ' </p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p> Почта: '.$_POST['email']. ' </p>';
    }
    if(trim(!empty($_POST['phoneNumber']))){
        $body.='<p> Телефон: '.$_POST['phoneNumber']. ' </p>';
    }
    if(!empty($_POST['servises'])){
        $body.='<p> Сервисы: '.$_POST['phoneNumber']. ' </p>';
    }
    if(trim(!empty($_POST['description']))){
        $body.='<p> Описание : '.$_POST['phoneNumber']. ' </p>';
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Письмо отправлено';
    }

    $responce = ['message'=>$message];
    header( 'Content-Type:application/json');
    echo json_encode($responce)
   

?>