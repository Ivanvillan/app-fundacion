// Variables
var idquizz = localStorage.getItem('idquizz');
var html = [];
var responseRadio;
var responseBox;
// listado de preguntas de la encuesta
$.ajax({
    type: "GET",
    url: "/api-fundacion/public/quizzes/get/" + idquizz,
    dataType: "json",
    success: function (response) {
         $('.style-title').html('Respoder encuesta: ' + response.data.title);
         $.each(response.data.questions, function(i, item){
            //  Si el usuario es administrador tiene opcion de agregar o quitar preguntas y opciones sino solo responder
            if (user_role == "1") {
                n1 = `
                    <div class="d-flex">
                        <a href="!#" class="btn-quest" style="margin-top: 25px; margin-right: 5px; color: #f02424;"><i class="fas fa-minus-circle"></i></a>
                        <h6 class="font-weight-bold mt-4" idQuest="${item.idquest}">Pregunta ${item.orden}</h6>
                    </div>
                    <div>
                        <span class="span-style" idParent="${item.idquest}">${item.query}</span>
                        <a href="!#" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#exampleModal" id="customCheck1" class="btn-parent ml-2" style="color: #34b338;"><i class="fas fa-plus-circle"></i></a>
                    </div>
                `;   
            }else{
                n1 = `
                    <h6 class="font-weight-bold mt-4">Pregunta ${item.orden}</h6>
                    <span class="span-style">${item.query}</span>
                `;
            }
                type_answer = item.type;
                html.push(n1);
                $.each(item.options, function(index, items){
                    if (user_role == "1") {
                        n2 = `
                            <div class="d-flex option-admin">
                                <a href="!#" class="btn-radio ml-3" style="margin-top: 18px !important; color: #f02424;"><i class="fas fa-minus-circle"></i></a>
                                <div class="form-check ml-3 mt-3 mb-1">
                                    <input class="form-check-input" type="radio" name="type-radio" id="exampleRadios${items.idoption}" value="${items.idoption}">
                                    <label class="form-check-label" for="exampleRadios${items.idoption}" idOption="${items.idoption}">
                                        ${items.text}
                                    </label>
                                </div>
                            </div>
                        `;
                    }else{
                        n2 = `
                            <div class="form-check ml-3 mt-3 mb-1 option-user">
                                <input class="form-check-input" type="radio" name="type-radio" id="exampleRadios${items.idoption}" value="${items.idoption}">
                                <label class="form-check-label" for="exampleRadios${items.idoption}" idOption="${items.idoption}">
                                    ${items.text}
                                </label>
                            </div>
                        `;
                    }
                    if (user_role == "1") {
                        n3 = `
                            <div class="d-flex option-admin">
                                <a href="!#" class="btn-box ml-3" style="margin-top: 16px !important; color: #f02424;"><i class="fas fa-minus-circle"></i></a>
                                <label class="classbox form-box ml-3 mt-3 mb-1" idOption="${items.idoption}"> ${items.text}
                                    <input type="checkbox" name="type-box" value="${items.idoption}">
                                    <span class="spanbox"></span>
                                </label>
                            </div>
                        `;
                    }else{
                        n3 = `
                            <label class="classbox form-box ml-3 mt-3 mb-1 option-user" idOption="${items.idoption}"> ${items.text}
                                <input type="checkbox" name="type-box" value="${items.idoption}">
                                <span class="spanbox"></span>
                            </label>
                        `;
                    }
                    if (type_answer == '1') {
                        html.push(n2); 
                    }else{
                        html.push(n3); 
                    }
                });
                // 
         });
         $('.section-response').html(html.join(''));
        //  Boton para eliminar pregunta por completo
         $('.btn-quest').click(function (e) { 
             e.preventDefault();
             element = $(this).parents();
             idQuest = $(element).children('h6').attr('idQuest');
             console.log(idQuest);
             var data = {
                "id": idQuest
            }
             $.ajax({
                 type: "POST",
                 url: "/api-fundacion/public/quizzes/questions/quit",
                 data: data,
                 dataType: "json",
                 success: function (response) {
                     location.reload();
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
                         title: 'Error al quitar pregunta, puede que contenga opciones'
                     });
                 }
             });
         });
        //  Boton para eliminar opcion de una pregunta
         $('.btn-box').click(function (e) { 
             e.preventDefault();
             element = $(this).parents();
             idOptionBox = $(element).children('label').attr('idOption');
             console.log(idOptionBox);
             var data = {
                "id": idOptionBox
            };
             $.ajax({
                 type: "POST",
                 url: "/api-fundacion/public/quizzes/options/drop",
                 data: data,
                 dataType: "json",
                 success: function (response) {
                    location.reload();
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
                        title: 'Error al quitar opcion'
                    });
                }
             });
         });
         $('.btn-radio').click(function (e) { 
             e.preventDefault();
             element = $(this).parents()[0];
             idOptionRadio = $(element).children('.form-check').children('label').attr('idOption');
             console.log(idOptionRadio);
             var data = {
                    "id": idOptionRadio
            };
            $.ajax({
                type: "POST",
                url: "/api-fundacion/public/quizzes/options/drop",
                data: data,
                dataType: "json",
                success: function (response) {
                    location.reload();
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
                        title: 'Error al quitar opcion'
                    });
                }
            });
         });
        //  
        // Almacenar valores de respuestas elegidas, tanto de los checkbox como los options
         $(':checkbox[name=type-box]').on('change', function() {
            responseBox = $(':checkbox[name=type-box]:checked').map(function() {
                responseDataBox = {
                    "idoption": this.value
                }
                return responseDataBox;
            }).get();
        });
         $(':radio[name=type-radio]').on('change', function() {
            responseRadio = $(':radio[name=type-radio]:checked').map(function() {
                responseDataRadio = {
                    "idoption": this.value
                }
                return responseDataRadio;
            }).get();
        });
        // 
        // Enviar respuestas elegidas
        $('.confirm-response').click(function (e) { 
            e.preventDefault();
            if (responseBox != undefined && responseRadio != undefined) {
                responseBox = responseBox.concat(responseRadio);
                data = {
                    "data": {
                        "id": idquizz,
                        "answers": responseBox
                    }
                }
            }
            if (responseBox != undefined && responseRadio == undefined) {
                data = {
                    "data": {
                        "id": idquizz,
                        "answers": responseBox
                    }
                }
            }
            if (responseRadio != undefined && responseBox == undefined) {
                data = {
                    "data": {
                        "id": idquizz,
                        "answers": responseRadio
                    }
                }
            }
            console.log(data);
            Swal.fire({
                title: '¿Enviar encuesta?',
                    showDenyButton: true,
                    confirmButtonText: `Si`,
                    confirmButtonColor: '#f47d31',
                    denyButtonText: `No`,
                    denyButtonColor: '#514d4a'
                }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        type: "POST",
                        url: "/api-fundacion/public/quizzes/toanswer",
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
                                title: 'Enviada correctamente'
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
        // Se obtiene el id de la pregunta a la que se tiene que agregar la opcion
        $('.btn-parent').click(function (e) { 
            e.preventDefault();
            element = $(this).parents();
            idParent = $(element).children('span').attr('idParent');
        });
        $('.btn-sendAnswer').click(function (e) { 
            e.preventDefault();
            var valueOption = $("input[name='input-option']").val();
            var data = {
                "text": valueOption,
                "id": idParent
            }
            $.ajax({
                type: "POST",
                url: "/api-fundacion/public/quizzes/options/add",
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
                        title: 'Agregada correctamente'
                    });
                    setTimeout(function(){location.reload()} , 1000);
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
                        title: 'Error agregar'
                    });
                }
            });
        });
        // 
        // Reiniciar input de agregar pregunta
        $('.closed').click(function (e) { 
            e.preventDefault();
            $('.input-initial').val('');
            $('.row-created').remove();
        });
        // 
        // si el usuario es administrador se quita el boton de enviar respuestas
        if (user_role != '1') {
            $('.div-response').removeClass('d-none');
        }
        // 
    }
});