<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="/app-fundacion/views/home/users/css/profile.css">
    <title>Perfil</title>
</head>
<body>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/app-fundacion/views/navigation/navigation.php'); ?>
    <div class="container">
        <div class="section-title">
            <div class="row">
                <div class="col col-md-6 font-weight-bold style-title mt-2">
                    <h3 class="font-weight-bold style-title">Mi perfil</h3>
                </div>
                <div class="col col-md-4 mt-2">
                    <button class="btn btn-sm edit-profile float-right">Editar perfil</button>
                </div>
            </div>
        </div>
        <div class="section-profile">
            <div class="row">
                <div class="col col-md-2 mt-4 col-img">
                    <img class="card-img-left rounded-circle" src="/app-fundacion/assets/img/img-avatar.png" alt="">
                </div>
                <div class="col col-md-4 mt-4">
                    <div class="name">
                        <span class="d-flex span-title">Nombre</span>
                        <span class="span-subtitle span-name"></span>
                    </div>
                    <div class="user mt-4">
                        <span class="d-flex span-title">Usuario</span>
                        <span class="span-subtitle span-user"></span>
                    </div>
                    <div class="creates mt-4">
                        <span class="d-flex span-title">Fecha de registro</span>
                        <span class="span-subtitle span-date"></span>
                    </div>
                </div>
                <div class="col col-md-4 mt-4">
                    <div class="range">
                        <span class="d-flex span-title">Rango</span>
                        <span class="span-subtitle span-range"></span>
                    </div>
                    <div class="email mt-4">
                        <span class="d-flex span-title">Email</span>
                        <span class="span-subtitle span-email"></span>
                    </div>
                    <div class="inst mt-4">
                        <span class="d-flex span-title">Asociado a</span>
                        <span class="span-subtitle span-associated"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-6 offset-md-2 mt-4">
                    <span class="d-flex span-title">Bio</span>
                    <span class="span-subtitle span-about"></span>
                </div>
            </div>
        </div>
    </div>
    <script src="/app-fundacion/views/home/users/js/profile.js"></script>
</body>
</html>