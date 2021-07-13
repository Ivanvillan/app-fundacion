// Variables
var typeuser = null;
var associated = null;
// 
$(document).ready(function () {
    // Datepicker
    $('.fi-date').datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        language: "es"
    });
    // 
    // Habilita o deshabilita segun el tipo de usuario. Es para asociarlo a algun lider al nuevo usuario.
    $("#input-typeuser").change(function(){
        typeuser = $(this).children("option:selected").val();
        console.log(typeuser);
        if (typeuser == "1") {
            $('#input-users').prop('disabled', true);
        }else{
            $('#input-users').prop('disabled', false);
            $('#input-users').find('option').remove().end().append('<option>Elige a quien asociar</option>');
            $.ajax({
                type: "GET",
                url: "/api-fundacion/public/users/get/all/1/all",
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    let rows = response.result;
                    let html = [];
                    for (let i=0; i < rows.length; i++){
                    html.push(
                        `<option value="${rows[i].iduser}">${rows[i].name} ${rows[i].surname}</option>`
                    );
                }
                $('.input-users').append(html.join(''));
                $("#input-users").change(function(){
                    associated = $(this).children("option:selected").val();
                });
                }
            });
        }
    });
    // 
});
    // Nuevo usuario, con asociacion o sin asociacion con un lider
    $('.new-user').click(function (e) { 
        e.preventDefault();
        $('.login').addClass('d-none');
        $('.loading').removeClass('d-none');
        var input_date = $('input[name="input-birthdate"]').val().split('-');
        var birthdate = input_date[0] + input_date[1] + input_date[2];
        var dataSA = {
            "name": $('input[name="input-name"]').val(),
            "surname": $('input[name="input-surname"]').val(),
            "username": $('input[name="input-username"]').val(),
            "email": $('input[name="input-email"]').val(),
            "password": $('input[name="input-password"]').val(),
            "phone": $('input[name="input-phone"]').val(),
            "about_me": $('textarea[name="input-about"]').val(),
            "birthdate": birthdate,
            "role": typeuser,
            "enabled": "1",
        }
        var dataCA = {
            "name": $('input[name="input-name"]').val(),
            "surname": $('input[name="input-surname"]').val(),
            "username": $('input[name="input-username"]').val(),
            "email": $('input[name="input-email"]').val(),
            "password": $('input[name="input-password"]').val(),
            "phone": $('input[name="input-phone"]').val(),
            "about_me": $('textarea[name="input-about"]').val(),
            "birthdate": birthdate,
            "role": typeuser,
            "associated_at": associated,
            "enabled": "1",
        }
        if (associated == null) {
            $.ajax({
                type: "POST",
                url: "/api-fundacion/public/users/save",
                data: dataSA,
                dataType: "json",
                success: function (response) {
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
                        title: 'Usuario creado'
                    });
                    $('form').trigger("reset");
                    $('.loading').addClass('d-none');
                    $('.login').removeClass('d-none');
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
                        title: 'Error al crear usuario'
                    });
                    $('.loading').addClass('d-none');
                    $('.login').removeClass('d-none');
                }
            });
        }else{
            $.ajax({
                type: "POST",
                url: "/api-fundacion/public/users/save",
                data: dataCA,
                dataType: "json",
                success: function (response) {
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
                        title: 'Usuario creado'
                    });
                    $('form').trigger("reset");
                    $('.loading').addClass('d-none');
                    $('.login').removeClass('d-none');
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
                        title: 'Error al crear usuario'
                    });
                    $('.loading').addClass('d-none');
                    $('.login').removeClass('d-none');
                }
            });
        }
    });
    // 