<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/app-fundacion/views/home/questions/css/answer_question.css">
    <title>Responder preguntas</title>
</head>
<body>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/app-fundacion/views/navigation/navigation.php'); ?>
    <div class="container">
        <div class="section-title">
            <div class="row">
                <div class="col col-sm-5 col-md-6">
                    <h3 class="font-weight-bold style-title"></h3>
                </div>
                <div class="col col-sm-5 mr-2 col-md-6 div-response d-none">
                    <button class="btn btn-confirm btn-outline-secondary confirm-response">Confirmar</button>
                </div>
            </div>
        </div>
        <div class="section-response mt-0">
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Respuestas</h5>
                    <button type="button" class="close closed" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row mb-1">
                        <div class="col col-md-9 offset-md-1">
                            <label for="input-initial" class="form-label text-style font-weight-bold">Agregar nueva opción</label>
                            <input type="text" name="input-option" id="input-initial" class="form-control border-style input-initial" value=""/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary closed" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-sendAnswer closed" data-dismiss="modal">Confirmar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/app-fundacion/views/home/questions/js/answer_question.js"></script>
</body>
</html>