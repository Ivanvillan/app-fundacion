<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="/app-fundacion/views/home/quizzes/css/list_quizz.css">
    <title>Lista de encuestas</title>
</head>
<body>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/app-fundacion/views/navigation/navigation.php'); ?>
    <div class="container">
        <div class="section-title">
            <div class="row">
                <div class="col col-md-6 font-weight-bold style-title ml-3 mt-4">
                    <h3 class="font-weight-bold style-title">Todas las encuestas</h3>
                </div>
                <div class="col col-md-5 mt-4">
                    <button class="btn btn-sm quizz-realized float-right d-none">Realizadas</button>
                </div>
            </div>
        </div>
        <div class="section-quizz mt-2">
            <div class="row">
                <div class="col col-md-12 col-lg-12">
                    <div class="list-quizz">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/app-fundacion/views/home/quizzes/js/list_quizz.js"></script>
</body>
</html>