$(document).ready(function () {
    // Variables
    var rol;
    var width = $(window).width();
    // Tipo de usuario en menú
    if (user_role == "1") {
        rol = "Administrador";
        $('.sidebar-admin').removeClass('d-none');
        $('.sidebar-noadmin').remove();
    }
    if (user_role == "2") {
        rol = "Lider";
        $('.sidebar-noadmin').removeClass('d-none');
        $('.sidebar-admin').remove();
    }
    if (user_role == "3") {
        rol = "Usuario";
        $('.sidebar-noadmin').removeClass('d-none');
        $('.sidebar-admin').remove();
    }
    // 
    // Cambio de icono flecha en menú según la resolución
    if (width <= 768) {
        $('.onLg').removeClass('fa-angle-left');
        $('.onLg').addClass('fa-angle-right');
    }
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if ($('#sidebar').hasClass('active')) {
            $('.onLg').removeClass('fa-angle-left');
            $('.onLg').addClass('fa-angle-right');
        }else{
            $('.onLg').addClass('fa-angle-left');
            $('.onLg').removeClass('fa-angle-right');
        }
    });
    // 
    // Nombre y rol en menú
    $('.username').html(user_name);
    $('.type-user').html(rol);
    // 
});

// Botón pra logout
$('.btn-logout').click(function (e) { 
    e.preventDefault();
    var data = {
        "id": user_id
    }
    $.ajax({
        type: "POST",
        url: "/api-fundacion/public/users/logout",
        data: data,
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.loading').addClass('d-none');
            $('.login').removeClass('d-none');
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Sesión cerrada'
            });
            setTimeout(function(){location.href="/app-fundacion/views/auth/login.php"} , 1000); 
        },
        error: function(err){
            console.log(err);
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Error al cerrar sesión'
            });
        }
    });
});
// 
// Logout en el text salir
$('.span-logout').click(function (e) { 
    e.preventDefault();
    var data = {
        "id": user_id
    }
    $.ajax({
        type: "POST",
        url: "/api-fundacion/public/users/logout",
        data: data,
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.loading').addClass('d-none');
            $('.login').removeClass('d-none');
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Sesión terminada'
            });
            setTimeout(function(){location.href="/app-fundacion/views/auth/login.php"} , 1000); 
        },
        error: function(err){
            console.log(err);
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Error al cerrar sesión'
            });
        }
    });
});
// 
// Listado de usuarios administrador o del equipo en menú
if (user_role == "1") {
    $.ajax({
        type: "GET",
        url: "/api-fundacion/public/users/get/all/" + user_role + "/all",
        dataType: "json",
        success: function (response) {
            console.log(response);
            let rows = response.result;
            let html = [];
            for (let i=0; i < rows.length; i++){
            html.push(
                `
                    <img src="/app-fundacion/assets/img/img-avatar.png" class="img-fluid rounded-circle admin-avatar" alt="" data-toggle="tooltip" title="${rows[i].username}">
                `
            );
        }
        $('.menu-admin').html(html.join(''));
        $('[data-toggle="tooltip"]').tooltip({
            animated: 'fade',
            placement: 'top',
            html: true
        });
        }
    });
}else{
    $.ajax({
        type: "GET",
        url: "/api-fundacion/public/users/get/all/" + user_role + "/all",
        dataType: "json",
        success: function (response) {
            console.log(response);
            let rows = response.result;
            let html = [];
            for (let i=0; i < rows.length; i++){
            html.push(
                `
                    <img src="/app-fundacion/assets/img/img-avatar.png" class="img-fluid rounded-circle admin-avatar" alt="" data-toggle="tooltip" title="${rows[i].username}">
                `
            );
        }
        $('.menu-user').html(html.join(''));
        $('[data-toggle="tooltip"]').tooltip({
            animated: 'fade',
            placement: 'top',
            html: true
        });
        }
    });
}
// 