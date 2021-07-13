<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="/app-fundacion/views/home/quizzes/css/new_quizz.css">
    <title>Nueva encuesta</title>
</head>
<body>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/app-fundacion/views/navigation/navigation.php'); ?>
    <div class="container">
        <div class="section-title">
            <h3 class=" font-weight-bold style-title">Crear nueva encuesta</h3>
        </div>
        <div class="section-form">
            <form>
                <div class="row row-title">
                    <div class="col col-md-8 col-title">
                        <label for="input-title" class="form-label text-style font-weight-bold">Título</label>
                        <input type="text" class="form-control border-style" id="input-title" name="input-title" />
                    </div>
                </div>
                <div class="row row-description mt-4">
                    <div class="col col-md-8 col-description">
                        <label for="input-description" class="form-label text-style font-weight-bold">Descripción</label>
                        <textarea class="form-control border-style" id="input-description" rows="3" name="input-description"></textarea>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col col-md-4">
                        <label for="input-date1" class="form-label text-style font-weight-bold">Fecha inicio</label>
                        <div class="input-group date fj-date fi-date">
                            <span class="input-group-text" id="inputGroupPrepend1"><i class="far fa-calendar text-style"></i></span>
                            <input type="text" class="form-control border-style" id="input-date1" class="input-datei"><span class="input-group-addon"></span>
                        </div>
                    </div>
                    <div class="col col-md-4">
                        <label for="input-date2" class="form-label text-style font-weight-bold">Fecha límite</label>
                        <div class="input-group date fj-date fl-date">
                            <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-calendar text-style"></i></span>
                            <input type="text" class="form-control border-style" id="input-date2" class="input-datel"><span class="input-group-addon"></span>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col col-md-8">
                        <button class="btn btn-style float-right createQuizz">
                            <span class="continue">Continuar</span>
                        </button>
                        <button class="btn btn-style btn-loading float-right d-none loading" type="button" disabled>
                            Subiendo...
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
<script src="/app-fundacion/views/home/quizzes/js/new_quizz.js"></script>
</body>
</html>