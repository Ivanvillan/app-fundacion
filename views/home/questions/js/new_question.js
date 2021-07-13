// Variables
var idquizz = localStorage.getItem('idquizz');
var count = 0;
var x = 1;
var queryArray = [];
var options = [];
var type_radio;
// 
$(document).ready(function(){
    // Agregrar o quitar inputs de opcion de pregunta
    $('#radio-value').change(function(){
        type_radio = $("input[name='type-radio']:checked").val();
    });
    var maxField = 10;
    var addButton = $('.add_button');
    var wrapper = $('.field_wrapper');
    var fieldHTML = 
    `<div class="row row-created">
        <div class="d-flex col col-md-9 offset-md-1 mt-2">
            <input type="text" class="form-control border-style" name="field_name[]"/>
            <a href="javascript:void(0);" class="remove_button ml-3 mt-2">
                <i class="fas fa-minus fa-sm icon-plus">
                </i>
            </a>
        </div>
    </div>`;     
    $(addButton).click(function(){
        if(x < maxField){ 
            x++;
            $(wrapper).append(fieldHTML);
        }
    });    
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
    // 
});

// Icono de add toma el valor del input o sea la pregunta al hacer click
$(".btn-style").click(function(e) {
    e.preventDefault();
    article = $(this).parent().parent().find('input')[0];
    query = $(article).val();    
});
// 
// Se envia pregunta y opciones a array de objetos
$('.btn-sendAnswer').click(function (e) { 
        count += 1;
        $('input[name^=field_name]').each(function(){
            options.push({"text": $(this).val()});
        });
        queryArray.push(
            {
                "orden": count, "query": query, "type": type_radio, "options": options
            }
        );
        data = {
            "data": {
                "id": idquizz,
                "questions": queryArray
            }
        }
        options = [];
});
// 
// Se confirma y se envia todas las preguntas y opciones a encuesta
$('.confirm-question').click(function (e) { 
    e.preventDefault();
    console.log(data);
    Swal.fire({
        title: '¿Enviar contenido a la encuesta?',
            showDenyButton: true,
            confirmButtonText: `Si`,
            confirmButtonColor: '#f47d31',
            denyButtonText: `No`,
            denyButtonColor: '#514d4a'
        }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "POST",
                url: "/api-fundacion/public/quizzes/questions/generate",
                data: data,
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
                        title: 'Enviado correctamente'
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
                        title: 'Error enviar'
                    });
                }
            });
        }
    })
});
// 
// Reinicia los inputs y valores de inputs
$('.closed').click(function (e) { 
    e.preventDefault();
    $('.input-initial').val('');
    $('.row-created').remove();
    options = [];
    x = 1;
});
// 