<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="/app-fundacion/views/home/users/css/list_users.css">
    <title>Usuarios</title>
</head>
<body>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/app-fundacion/views/navigation/navigation.php'); ?>
    <div class="container">
        <div class="section-title mt-4 ml-4">
            <div class="row">
                <div class="col col-md-3">
                    <h3 class="font-weight-bold style-title">Usuarios</h3>
                </div>
                <div class="col col-md-8">
                    <button class="btn btn-sm btn-outline-secondary new-user float-right">Nuevo usuario</button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col col-md-4">
                    <div class="input-group">
                        <span class="input-group-append">
                            <div class="input-group-text bg-transparent border-style-search border-right-0"><i class="fa fa-search" style="color: #e1e1e1;"></i></div>
                        </span>
                        <input class="form-control border-left-0 border border-style" id="search" type="text">
                    </div>
                </div>
            </div>
        </div>
        <div class="section-list-users">
            <div class="row">
                <div class="col col-sm-12 col-md-12 col-lg-12">
                    <div class="user-list">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/app-fundacion/views/home/users/js/list_users.js"></script>
</body>
</html>