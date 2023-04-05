<?php

    if(isset($_GET['m'])) {
        $message = $_GET['m'];
        $class = $_GET['c'];
    }
    //print_r($_POST);
    if (
        isset($_POST['first_name']) AND
        isset($_POST['last_name']) AND
        isset($_POST['subject']) AND
        isset($_POST['message'])
    ) {
        if (
            $_POST['first_name'] === '' ||
            $_POST['last_name'] === '' ||
            $_POST['subject'] === '' ||
            $_POST['message'] === ''
        ) {
            $message = 'Netinkamai uzpildyta forma';
            $class = 'alert-danger';
        } else {
            $data = implode(',', $_POST);
            file_put_contents('data.txt', $data);
            $message = 'Duomenys sekmingai issaugoti';
            $class = 'alert-success';

            //header('Location: forms.php?m=' . $message . '&c=' . $class);
            //exit;

        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head> 
<body>
    <!-- FAILA PERDUOTI GALIMA TIK SU POST METODU -->
    <div class="container">
        <?php if(isset($message)) { ?>
        <div class="alert <?= $class ?>"><?= $message ?></div>
        <?php } ?>
        <form method="POST">
            <div class="mb-3">
                <label>Jusu vardas</label>
                <input type="text" name="first_name" class="form-control" />
            </div>
            <div class="mb-3">
                <label>Jusu pavarde</label>
                <input type="text" name="last_name" class="form-control" />
            </div>
            <div class="mb-3">
                <label>Uzklausos tema</label>
                <input type="text" name="subject" class="form-control" />
            </div>
            <div class="mb-3">
                <label>Jusu zinute</label>
                <textarea name="message" class="form-control"></textarea>
            </div>
            <button class="btn btn-secondary">Siusti</button>
        </form>
    </div>
</body>
</html>