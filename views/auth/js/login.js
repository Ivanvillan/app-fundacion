//Login botón
$('.login').click(function (e) { 
    e.preventDefault();
    $('.login').addClass('d-none');
    $('.loading').removeClass('d-none');
    var data = {
        "email": $('input[name="input-email"]').val(),
        "password": $('input[name="input-password"]').val(),
    };
    $.ajax({
        type: "POST",
        url: "/api-fundacion/public/users/login",
        data: data,
        dataType: "json",
        success: function (response) {
            if (response.message == "Login failed") {
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
                    title: 'Error al iniciar sesión'
            });
                $('.loading').addClass('d-none');
                $('.login').removeClass('d-none');
            }else{
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
                    title: 'Sesión iniciada'
                });
                setTimeout(function(){location.href="/app-fundacion/views/home/quizzes/list_quizz.php"} , 1000);  
            }
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
                title: 'Error al iniciar sesión'
            });
            $('.loading').addClass('d-none');
            $('.login').removeClass('d-none');
        }
    });
});
//
// Login boton enter
$('#input-email').keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
    $('.login').click();
    return false;
    }
});
$('#input-password').keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
    $('.login').click();
    return false;
    }
});
//