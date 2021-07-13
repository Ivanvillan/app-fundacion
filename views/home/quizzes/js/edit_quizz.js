// Variables
var state;
var idQuizz = localStorage.getItem("idQuizz");
// 
// ejecucion de la funcion para traer la encuesta
getQuizz(idQuizz);
// 
// Select para el estado de la encuesta
$("#input-state").change(function(){
    state = $(this).children("option:selected").val();
});
// 
$(document).ready(function () {
    // datepicker
    $('.fi-date').datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        language: "es"
    });
    $('.fl-date').datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        language: "es"
    });
    // 
});
// funcion para traer la encuesta
function getQuizz(id){
    $.ajax({
        type: "GET",
        url: "/api-fundacion/public/quizzes/get/" + id,
        dataType: "json",
        success: function (response) {
            console.log(response);
            var data = response.data;
            $('input[name="input-title"]').val(data.title);
            $('textarea[name="input-description"]').val(data.description);
            $('input[name="input-datei"]').val(data.date_from.split(' ')[0]);
            $('input[name="input-datel"]').val(data.date_to.split(' ')[0]);
            state = data.state;
            console.log(state);
        }
    });
}
// 
// enviar datos actualizados de la encuesta
$('.editQuizz').click(function (e) { 
    e.preventDefault();
    $('.editQuizz').addClass('d-none');
    $('.loading').removeClass('d-none');
    var date1 = $('#input-date1').val().split('-');
    var date2 = $('#input-date2').val().split('-');
    var datei = date1[0] + date1[1] + date1[2];
    var datel = date2[0] + date2[1] + date2[2];
    var data = {
        "title": $('input[name="input-title"]').val(),
        "description": $('textarea[name="input-description"]').val(),
        "date_from": datei,
        "date_to": datel,
        "id": idQuizz,
        "active": state,
    };
    $.ajax({
        type: "POST",
        url: "/api-fundacion/public/quizzes/edit",
        data: data,
        dataType: "json",
        success: function (response) {
            $('.loading').addClass('d-none');
            $('.editQuizz').removeClass('d-none');
            $('form').trigger("reset");
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
                title: 'Encuesta actualizada'
            });
            setTimeout(function(){location.href="/app-fundacion/views/home/quizzes/list_quizz.php"} , 1000); 
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
                title: 'Error al actualizar encuesta'
            });
            $('.loading').addClass('d-none');
            $('.editQuizz').removeClass('d-none');
        }
    });
});
// 
