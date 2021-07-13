<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="/app-fundacion/views/home/quizzes/css/list_quizz_user.css">
    <title>Encuestas realizadas</title>
</head>
<body>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/app-fundacion/views/navigation/navigation.php'); ?>
    <div class="container">
        <div class="section-title">
            <h3 class=" font-weight-bold style-title my-3 mx-3">Encuestas del usuario</h3>
        </div>
        <div class="section-quizz-user mt-4">
            <div class="row">
                <div class="col col-md-12 col-lg-12">
                    <div class="list-quizz-user">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/app-fundacion/views/home/quizzes/js/list_quizz_user.js"></script>
</body>
</html>