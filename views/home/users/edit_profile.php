<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="/app-fundacion/views/home/users/css/edit_profile.css">
    <title>Lista de encuestas</title>
</head>
<body>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/app-fundacion/views/navigation/navigation.php'); ?>
    <div class="container">
        <div class="section-title">
            <div class="row">
                <div class="col col-md-3">
                    <h3 class="font-weight-bold style-title">Editar perfil</h3>
                </div>
                <div class="col col-md-5 mt-3">
                    <button class="btn btn-sm profile-delete float-right">Deshabilitar cuenta</button>
                </div>
            </div>
        </div>
        <div class="section-edit-profile">
            <form>
                <div class="row ml-4 mt-3">
                    <div class="col col-md-4 col-name">
                        <label for="input-name" class="form-label text-style font-weight-bold">Nombre</label>
                        <input type="text" class="form-control border-style" id="input-name" name="input-name" />
                    </div>
                    <div class="col col-md-4 col-surname">
                        <label for="input-surname" class="form-label text-style font-weight-bold">Apellido</label>
                        <input type="text" class="form-control border-style" id="input-surname" name="input-surname" />
                    </div>
                </div>
                <div class="row ml-4 mt-3">
                    <div class="col col-md-4 col-username">
                        <label for="input-username" class="form-label text-style font-weight-bold">Nombre de usuario</label>
                        <input type="text" class="form-control border-style" id="input-username" name="input-username" />
                    </div>
                    <div class="col col-md-4 col-email">
                        <label for="input-email" class="form-label text-style font-weight-bold">Email</label>
                        <input type="text" class="form-control border-style" id="input-email" name="input-email" />
                    </div>
                </div>
                <div class="row ml-4 mt-3">
                    <div class="col col-md-4 col-password">
                        <label for="input-password" class="form-label text-style font-weight-bold">Clave</label>
                        <input type="text" class="form-control border-style" id="input-password" name="input-password" />
                    </div>
                    <div class="col col-md-4 col-phone">
                        <label for="input-phone" class="form-label text-style font-weight-bold">Teléfono</label>
                        <input type="number" class="form-control border-style" id="input-phone" name="input-phone" />
                    </div>
                </div>
                <div class="row ml-4 mt-3">
                    <div class="col col-md-4 col-about">
                        <label for="input-about" class="form-label text-style font-weight-bold">Sobre mi...</label>
                        <textarea class="form-control border-style" id="input-about" rows="3" name="input-about"></textarea>
                    </div>
                    <div class="col col-md-4">
                        <label for="input-birthdate" class="form-label text-style font-weight-bold">Fecha de cumpleaños</label>
                        <div class="input-group date fj-date fi-date">
                            <span class="input-group-text" id="inputGroupPrepend"><i class="far fa-calendar text-style"></i></span>
                            <input type="text" class="form-control border-style" id="input-birthdate" class="input-birthdate" name="input-birthdate"><span class="input-group-addon"></span>
                        </div>
                        <div class="update-profile">
                            <button class="btn btn-style update float-right">Actualizar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
    <script src="/app-fundacion/views/home/users/js/edit_profile.js"></script>
</body>
</html>