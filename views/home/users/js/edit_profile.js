// Variables
var associated;
$(document).ready(function () {
    // Datepicker
    $('.fi-date').datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        language: "es"
    });
    // 
});

// Traer datos del usuarional formulario
$.ajax({
    type: "GET",
    url: "/api-fundacion/public/users/get/all/" + user_role + "/" + user_id,
    dataType: "json",
    success: function (response) {
        console.log(response);
        var data = response.result[0];
        var date = data.birthdate.split(' ')[0];
        associated = data.associated_to;
        $('input[name="input-name"]').val(data.name);
        $('input[name="input-surname"]').val(data.surname);
        $('input[name="input-username"]').val(data.username);
        $('input[name="input-email"]').val(data.email);
        $('input[name="input-phone"]').val(data.phone);
        $('textarea[name="input-about"]').val(data.about_me);
        $('input[name="input-birthdate"]').val(date);
    }
});
// 
// Enviar formulario con los datos actualizados
$('.update').click(function (e) { 
    e.preventDefault();
    var input_date = $('input[name="input-birthdate"]').val().split('-');
    var birthdate = input_date[0] + input_date[1] + input_date[2];
    // Sin contraseña
    var dataSP = {
        "name": $('input[name="input-name"]').val(),
        "surname": $('input[name="input-surname"]').val(),
        "username": $('input[name="input-username"]').val(),
        "email": $('input[name="input-email"]').val(),
        "phone": $('input[name="input-phone"]').val(),
        "about_me": $('textarea[name="input-about"]').val(),
        "birthdate": birthdate,
        "role": user_role,
        "associated_at": associated,
        "enabled": "1",
        "id": user_id
    };
    // 
    // Con contraseña
    var dataCP = {
        "name": $('input[name="input-name"]').val(),
        "surname": $('input[name="input-surname"]').val(),
        "username": $('input[name="input-username"]').val(),
        "password": $('input[name="input-password"]').val(),
        "email": $('input[name="input-email"]').val(),
        "phone": $('input[name="input-phone"]').val(),
        "about_me": $('textarea[name="input-about"]').val(),
        "birthdate": birthdate,
        "role": user_role,
        "associated_at": associated,
        "enabled": "1",
        "id": user_id
    }
    // 
    // Si el input está vacío
    if (!$('input[name="input-password"]').val()) {
        Swal.fire({
            title: '<span style="font-size: 18px;">Para confirmar los cambios, inserte su contraseña</span>',
            html: '<input type="password" id="swal-input1" name="input-password" class="swal2-input" style="color: #514d4a; border: 1px solid #fe6100; height: 30px; margin: 0px; padding: 0px;">',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showDenyButton: true,
            confirmButtonText: `Confirmar`,
            confirmButtonColor: '#f47d31',
            denyButtonText: `Cancelar`,
            denyButtonColor: '#514d4a',
          }).then((result) => {
            if (result.isConfirmed) {
                var pass = $('.swal2-input').val();
                $.extend(dataSP, {
                    "password": pass
                });
                $.ajax({
                    type: "POST",
                    url: "/api-fundacion/public/users/save",
                    data: dataSP,
                    dataType: "json",
                    success: function (response) {
                        console.log(response);
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
                            title: 'Perfil actualizado'
                        });
                        $.ajax({
                            type: "POST",
                            url: "/api-fundacion/public/users/logout",
                            data: {
                                "id": user_id
                            },
                            success: function (response) {
                                location.href="/app-fundacion/views/auth/login.php"; 
                            }
                        });
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
                            title: 'Error al actualizar perfil'
                        });
                    }
                });
            }
          })
    }else{
        // Si el input no está vacío
        $.ajax({
            type: "POST",
            url: "/api-fundacion/public/users/save",
            data: dataCP,
            dataType: "json",
            success: function (response) {
                console.log(response);
                var profilename = $('input[name="input-name"]').val() + ' ' + $('input[name="input-surname"]').val();
                $('.loading').addClass('d-none');
                $('.update').removeClass('d-none');
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
                    title: 'Perfil actualizado'
                }); 
                $.ajax({
                    type: "POST",
                    url: "/api-fundacion/public/users/logout",
                    data: {
                        "id": user_id
                    },
                    success: function (response) {
                        location.href="/app-fundacion/views/auth/login.php"; 
                    }
                });
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
                    title: 'Error al actualizar perfil'
                });
                $('.loading').addClass('d-none');
                $('.update').removeClass('d-none');
            }
        });
    }
});
// 
// Deshabilitar la cuenta
$('.profile-delete').click(function (e) { 
    e.preventDefault();
    var input_date = $('input[name="input-birthdate"]').val().split('-');
    var birthdate = input_date[0] + input_date[1] + input_date[2];
    var dataSP = {
        "name": $('input[name="input-name"]').val(),
        "surname": $('input[name="input-surname"]').val(),
        "username": $('input[name="input-username"]').val(),
        "email": $('input[name="input-email"]').val(),
        "phone": $('input[name="input-phone"]').val(),
        "about_me": $('textarea[name="input-about"]').val(),
        "birthdate": birthdate,
        "role": user_role,
        "associated_at": associated,
        "enabled": "0",
        "id": user_id
    };
    Swal.fire({
        title: '<span style="font-size: 18px;">Para confirmar los cambios, inserte su contraseña</span>',
        html: '<input type="password" id="swal-input1" name="input-password" class="swal2-input" style="color: #514d4a; border: 1px solid #fe6100; height: 30px; margin: 0px; padding: 0px;">',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showDenyButton: true,
        confirmButtonText: `Confirmar`,
        confirmButtonColor: '#f47d31',
        denyButtonText: `Cancelar`,
        denyButtonColor: '#514d4a',
        }).then((result) => {
        if (result.isConfirmed) {
            var pass = $('.swal2-input').val();
            $.extend(dataSP, {
                "password": pass
            });
            $.ajax({
                type: "POST",
                url: "/api-fundacion/public/users/save",
                data: dataSP,
                dataType: "json",
                success: function (response) {
                    console.log(response);
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
                        title: 'Cuenta deshabilitada'
                    });
                    $.ajax({
                        type: "POST",
                        url: "/api-fundacion/public/users/logout",
                        data: {
                            "id": user_id
                        },
                        success: function (response) {
                            location.href="/app-fundacion/views/auth/login.php"; 
                        }
                    });
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
                        title: 'Error al deshabilitar tu cuenta '
                    });
                }
            });
        }
    })
});
// 