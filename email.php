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

    $messagePositive = 'Сообщение отправлено успешно';
    $messageNegative = 'Сообщение не было отправлено!';
//регулярные выражения
    $nameReg = '/^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/';
    $phoneNumberReg = '/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/';
    $emailReg = '/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u';    
    $companyReg='/^[а-яА-ЯёЁa-zA-Z0-9]$/i';
// проверка
    $name = preg_match($nameReg, $data['name']);
    $phoneNumber = preg_match($phoneNumberReg, $data['phoneNumber']);
    $email = preg_match($emailReg, $data['email']);
    $company = preg_match($companyReg,$data['company']);
    $servises = $data['servises'];
    $description = htmlspecialchars($data['description']);
    $description = urldecode(($description));
    $description = trim($description);

//Контетн письма
    $title = 'Заявка с сайта';
    $body = '';
//настройка phpMailer
    $mail = new PHPMailer();
    try{
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->setLanguage('ru', 'phpmailer/language/');
        $mail->SMTPAuth = true;
// посчта отправителя
        $mail->Host = '';
        $mail->Username = '';
        $mail->Password = '';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
// адрес почты и имя отправителя
        $mail-> setFrom('info@mail.com', 'Заявка с сайта');
//получатель письма
        $mail->addAddress($email);
//отправка сообщения
        $mail->IsHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;
        $mail->send();
        $responce = ['message'=>$messagePositive];
        header( 'Content-Type:application/json');
        echo json_encode($responce);
    }catch(Exception $e){
        $responce = ['message'=>$messageNegative];
        header( 'Content-Type:application/json');
        echo json_encode($responce);
    }


    
    // $mail->Body = $body;
    //отправка
    // if(!$mail->send()){
    //     $message = 'Ошибка';
    // }else{
    //     $message = 'Письмо отправлено';
    // }
    // $responce = ['message'=>$message];
    // header( 'Content-Type:application/json');
    // echo json_encode($responce)



    // $nameReg = '/^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/';
    // $phoneNumberReg = '/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/';
    // $emailReg = '/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u';

//    $name = $data['name'];
//    $phoneNumber = $data['phoneNumber'];
//    $email = $data['email'];
//    $company = $data['company'];
//    $servises = $data['servises'];
    //проверка
//    $description = htmlspecialchars($data['description']);
//    $description = urldecode(($description));
//    $description = trim($description);

//    $messagePositive = 'Сообщение отправлено успешно';
//    $messageNegative = 'Сообщение не было отправлено! Причина ошибки {$mail->ErrorInfo}';

  //контент письма
    //$title = "Письмо тест";
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
    //     $body.='<p> Сервисы: '.$_POST['servises']. ' </p>';
    // }
    // if(trim(!empty($_POST['description']))){
    //     $body.='<p> Описание : '.$_POST['description']. ' </p>';
    // }
    // try{
        // $mail = new PHPMailer();
        // $mail->CharSet = 'UTF-8';
        // $mail->isSMTP();
        // $mail->setLanguage('ru', 'phpmailer/language/');
        // $mail->SMTPAuth = true;
        // от кого
        // $mail->Host = '';
        // $mail->Username = '';
        // $mail->Password = '';
        // $mail->SMTPSecure = 'ssl';
        // $mail->Port = 465;

        //$mail-> setFrom('', 'Заявка с сайта');
        //Кому
        //$mail->addAddress('');
        //отправка сообщения
        // $mail->IsHTML(true);
        // $mail->Subject = $title;
        // $mail->Body = $body;
        // $mail->send('d');

        // echo ('Сообщение отправлено успешно');
        // $responce = ['message'=>$messagePositive];
        // header( 'Content-Type:application/json');
        // json_encode($responce);

    // }catch(Exception $e){
    //     header('HTTP/1.1 400 Bad Request');
    //     // echo ('Сообщение не было отправлено! Причина ошибки {$mail->ErrorInfo}');
    //     $responce = ['message'=>$messageNegative];
    //     header( 'Content-Type:application/json');
    //     json_encode($responce);
    // }
   


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

    

    // $responce = ['message'=>$message];
    // header( 'Content-Type:application/json');
    // echo json_encode($responce)



   

?>