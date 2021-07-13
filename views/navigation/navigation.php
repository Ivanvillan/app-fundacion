<?php 
session_start();
if (isset($_SESSION['ID'])) {
    $user_id = $_SESSION['ID'];
    $user_email = $_SESSION['EMAIL'];
    $user_name = $_SESSION['USER'];
    $user_username = $_SESSION['USERNAME']; 
    $user_role = $_SESSION['ROLE']; 
  }else{
    header("Location: /app-fundacion/views/auth/login.php");
    die();
  }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/app-fundacion/views/navigation/css/navigation.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.0.16/sweetalert2.css">
</head>
<body>
<div class="wrapper">
    <!--  -->
    <nav id="sidebar" class="sidebar-admin d-none">
        <div class="sidebar-header">
            <div class="profile">
                <div class="row">
                    <a href="/app-fundacion/views/home/users/edit_profile.php">
                        <div class="col p-avatar">
                            <img src="/app-fundacion/assets/img/img-avatar.png" class="img-fluid rounded-circle avatar" alt="">
                            <div class="bg-edit">
                                <i class="fas fa-edit p-edit fa-sm"></i>
                            </div>
                        </div>
                    </a>
                    <div class="col p-username">
                        <span class="text-light font-weight-bold username d-block"></span>
                        <span class="font-weight-light type-user"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="type-menu">
            <span class="font-weight-bold ">Administración</span>
        </div>
        <ul class="list-unstyled components">
            <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                    <i class="far fa-list-alt"></i> <span class="item">Encuestas</span>
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="/app-fundacion/views/home/quizzes/new_quizz.php">Nueva encuesta</a>
                    </li>
                    <li>
                        <a href="/app-fundacion/views/home/quizzes/list_quizz.php">Ver todas las encuestas</a>
                    </li>
                    <li>
                        <!-- <a href="/app-fundacion/views/home/quizzes/resume_quizz.php">Examinar resultados</a> -->
                        <a href="" class="a-disabled">Examinar resultados</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false">
                    <i class="fas fa-users"></i> <span class="item">Usuarios</span>
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu1">
                    <li>
                        <a href="/app-fundacion/views/home/users/new_user.php">Nuevo usuario</a>
                    </li>
                    <li>
                        <a href="/app-fundacion/views/home/users/list_users.php">Ver todos los usuarios</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="" class="a-disabled">
                    <i class="fas fa-newspaper"></i> <span class="item">Novedades</span>
                </a>
            </li>
            <li>
                <a href="/app-fundacion/views/home/users/profile.php">
                    <i class="far fa-user"></i> <span class="item">Perfil</span>
                </a>
            </li>
        </ul>
        <div class="general">
            <span class="font-weight-bold title-general">General</span>
        </div>
        <div class="menu-general">
            <a href="" class="d-block p-1 mt-3 a-disabled"> <i class="fas fa-newspaper news"></i> <span class="item">Novedades</span> <span class="news-noti">&bull;</span></a>
            <a href="" class="d-block p-1 mt-3 a-disabled"><i class="fas fa-star position"></i> <span class="item">Tabla de posiciones</span></a>
        </div>
        <div class="admin-section">
            <span class="font-weight-bold title-admin">Administradores</span>
        </div>
        <div class="menu-admin">
        </div>
        <div class="section-logout d-flex">
            <a href=""><i class="btn-logout fas fa-chevron-circle-left fa-logout fa-lg"></i></a>
            <span class="span-logout">Salir</span>
        </div>
    </nav>
    <!--  -->
    <nav id="sidebar" class="sidebar-noadmin d-none">
        <div class="sidebar-header">
            <div class="profile">
                <div class="row">
                    <a href="/app-fundacion/views/home/users/edit_profile.php">
                        <div class="col p-avatar">
                            <img src="/app-fundacion/assets/img/img-avatar.png" class="img-fluid rounded-circle avatar" alt="">
                            <div class="bg-edit">
                                <i class="fas fa-edit p-edit fa-sm"></i>
                            </div>
                        </div>
                    </a>
                    <div class="col p-username">
                        <span class="text-light font-weight-bold username d-block"></span>
                        <span class="font-weight-light type-user"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="type-menu">
            <span class="font-weight-bold ">Progreso</span>
        </div>
        <ul class="list-unstyled components">
            <li>
                <a href="/app-fundacion/views/home/quizzes/list_quizz.php">
                    <i class="fas fa-list-alt"></i> <span class="item">Encuestas</span>
                </a>
            </li>
            <li>
                <a>
                    <i class="fas fa-users"></i> <span class="item">Equipo</span>
                </a>
            </li>
            <li>
                <a>
                    <i class="fas fa-trophy"></i> <span class="item">Logros</span>
                </a>
            </li>
            <li>
                <a href="/app-fundacion/views/home/users/profile.php">
                    <i class="far fa-user"></i> <span class="item">Perfil</span>
                </a>
            </li>
        </ul>
        <div class="general">
            <span class="font-weight-bold title-general">General</span>
        </div>
        <div class="menu-general">
            <a class="d-block p-1 mt-3"> <i class="fas fa-newspaper news"></i> <span class="item">Novedades</span> <span class="news-noti">&bull;</span></a>
            <a class="d-block p-1 mt-3"><i class="fas fa-star position"></i> <span class="item">Tabla de posiciones</span></a>
        </div>
        <div class="admin-section">
            <span class="font-weight-bold title-admin">Mi equipo</span>
        </div>
        <div class="menu-user">
        </div>
        <div class="section-logout d-flex">
            <a href="!#"><i class="btn-logout fas fa-chevron-circle-left fa-logout fa-lg"></i></a>
            <span class="span-logout">Salir</span>
        </div>
    </nav>
    <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button type="button" id="sidebarCollapse" class="btn button-toggle mr-4 mt-1">
                <i class="fas fa-angle-left onLg"></i>
            </button>
            <a class="navbar-brand d-lg-none ml-auto"><img src="/app-fundacion/assets/img/logo-acindar.png" alt=""></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <a class="navbar-brand"><img src="/app-fundacion/assets/img/logo-acindar.png" alt=""></a>
            </div>
        </nav>
    <div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/923a9b8023.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.0.16/sweetalert2.min.js"></script>
<script>
    var user_id = <?php echo json_encode($user_id) ?>;
    var user_email = <?php echo json_encode($user_email) ?>;
    var user_name = <?php echo json_encode($user_name) ?>;
    var user_username = <?php echo json_encode($user_username) ?>;
    var user_role = <?php echo json_encode($user_role) ?>;
</script>
<script src="/app-fundacion/views/navigation/js/navigation.js"></script>
</body>
</html>