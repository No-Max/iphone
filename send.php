<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['model'])) {$model = $_POST['model'];}
    if (isset($_POST['service'])) {$service = $_POST['service'];}
    if (isset($_POST['price'])) {$price = $_POST['price'];}
    $formData="Заявка на ремонт Iphone";

    $to = "malyavko.max@gmail.com"; /*адрес, на который приходит письмо*/
    
    $sendfrom   = $name; /*адрес, с которого будет приходить письмо*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "<b>$formData</b> <br><br>
    	<b>Имя:</b> $name <br><br>
    	<b>Телефон:</b> $phone <br><br>
    	<b>Модель:</b> $model <br><br>
    	<b>Услуга:</b> $service <br><br>
    	<b>Цена:</b> $price руб.<br>";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true'){
    	echo 'Спасибо за отправку вашего сообщения!';
    } else {
    	echo 'Ошибка. Сообщение не отправлено!';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>