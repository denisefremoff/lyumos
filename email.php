<?
    //подключение библиотеки
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require './PHPMailer/src/Exception.php';
    require './PHPMailer/src/PHPMailer.php';
    require './PHPMailer/src/SMTP.php';
    // получение данных 
    $json = file_get_contents('php://input'); 
    $data = json_decode($json, true);


   $name = $data['name'];
   $phoneNumber = $data['phoneNumber'];
   $email = $data['email'];
   $company = $data['company'];
    //проверка
   $description = htmlspecialchars($data['description']);
   $description = urldecode(($description));
   $description = trim($description);
  //контент письма
    $title = "Письмо тест";
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
        $body.='<p> Сервисы: '.$_POST['servises']. ' </p>';
    }
    if(trim(!empty($_POST['description']))){
        $body.='<p> Описание : '.$_POST['description']. ' </p>';
    }
    try{
        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->setLanguage('ru', 'phpmailer/language/');
        $mail->SMTPAuth = true;
        // от кого
        $mail->Host = '';
        $mail->Username = '';
        $mail->Password = '';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail-> setFrom('', 'Заявка с сайта');
        //Кому
        $mail->addAddress('');
        //отправка сообщения
        $mail->IsHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;
        $mail->send('d');

        echo ('Сообщение отправлено успешно');

    }catch(Exception $e){
        header('HTTP/1.1 400 Bad Request');
        echo ('Сообщение не было отправлено! Причина ошибки {$mail->ErrorInfo}');
    }
   


    // //кому письмо
    // $mail->addAddress('');
    // //тема письма
    // $mail->Subject = 'Письмо';
    // //тело письма
    // $body = '';

    // if(trim(!empty($_POST['name']))){
    //     $body.='<p> Имя: '.$_POST['name']. ' </p>';
    // }
    // if(trim(!empty($_POST['company']))){
    //     $body.='<p> Компания: '.$_POST['company']. ' </p>';
    // }
    // if(trim(!empty($_POST['email']))){
    //     $body.='<p> Почта: '.$_POST['email']. ' </p>';
    // }
    // if(trim(!empty($_POST['phoneNumber']))){
    //     $body.='<p> Телефон: '.$_POST['phoneNumber']. ' </p>';
    // }
    // if(!empty($_POST['servises'])){
    //     $body.='<p> Сервисы: '.$_POST['phoneNumber']. ' </p>';
    // }
    // if(trim(!empty($_POST['description']))){
    //     $message = htmlspecialchars($_POST['description']);
    //     $message = urldecode(($message));
    //     $message = trim($message);
    //     $body.='<p> Описание : '.$_POST['phoneNumber']. ' </p>';
    // }

    // $mail->Body = $body;

    // if(!$mail->send()){
    //     $message = 'Ошибка';
    // }else{
    //     $message = 'Письмо отправлено';
    // }

    // $responce = ['message'=>$message];
    // header( 'Content-Type:application/json');
    // echo json_encode($responce)



   

?>