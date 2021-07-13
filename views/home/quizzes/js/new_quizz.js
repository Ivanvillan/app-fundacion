$(document).ready(function () {
    // Datepicker
    $('.fi-date').datepicker({
        format: "yyyy/mm/dd",
        autoclose: true,
        language: "es"
    });
    $('.fl-date').datepicker({
        format: "yyyy/mm/dd",
        autoclose: true,
        language: "es"
    });
    // 
});
// Enviar datos para crear encuesta
$('.createQuizz').click(function (e) { 
    e.preventDefault();
    $('.createQuizz').addClass('d-none');
    $('.loading').removeClass('d-none');
    var date1 = $('#input-date1').val().split('/');
    var date2 = $('#input-date2').val().split('/');
    var datei = date1[0] + date1[1] + date1[2];
    var datel = date2[0] + date2[1] + date2[2];
    var data = {
        "title": $('input[name="input-title"]').val(),
        "description": $('textarea[name="input-description"]').val(),
        "date_from": datei,
        "date_to": datel,
    };
    $.ajax({
        type: "POST",
        url: "/api-fundacion/public/quizzes/create",
        data: data,
        dataType: "json",
        success: function (response) {
            $('.loading').addClass('d-none');
            $('.createQuizz').removeClass('d-none');
            Swal.fire({
                title: '¿Agregar preguntas?',
                    showDenyButton: true,
                    confirmButtonText: `Si`,
                    confirmButtonColor: '#f47d31',
                    denyButtonText: `No`,
                    denyButtonColor: '#514d4a'
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    localStorage.setItem('idquizz', response);
                    location.href="/app-fundacion/views/home/questions/new_question.php";
                } else if (result.isDenied) {
                    $('form').trigger("reset");
                }
            })
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
                title: 'Error al crear encuesta'
            });
            $('.loading').addClass('d-none');
            $('.createQuizz').removeClass('d-none');
        }
    });
});
// 