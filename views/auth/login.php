<?php
session_start();
if(!empty($_SESSION['ID'])){
    header('Location: /app-fundacion/views/home/quizzes/list_quizz.php');
};
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/923a9b8023.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/app-fundacion/views/auth/css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.0.16/sweetalert2.css">
    <title>Inicio de sesión</title>
</head>
<body>
    <div class="wrapper">
        <div class="row row-divider">   
            <div class="col col-img col-md-6 col-lg-6">
                <img src="/app-fundacion/assets/img/login-img-2.jpg" class="ml-4 mt-4" alt="Login Imagen">
            </div>
            <div class="col col-form col-md-6 col-lg-6 my-auto">
                <h3 class="text-style text-center">Inicio de sesión</h3>
                <div class="row">
                    <div class="col col-md-6 offset-md-3 offset-lg-3 col-lg-6">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control border-style" id="input-email" name="input-email" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control border-style" id="input-password" name="input-password" placeholder="Contraseña"/>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-block btn-style login">
                                    <span class="continue">Ingresar</span>
                                </button>
                                <button class="btn btn-style btn-block btn-loading d-none loading" type="button" disabled>
                                    Ingresando...
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.0.16/sweetalert2.min.js"></script>
    <script src="/app-fundacion/views/auth/js/login.js"></script>
</body>
</html>