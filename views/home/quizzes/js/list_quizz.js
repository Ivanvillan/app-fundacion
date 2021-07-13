$(document).ready(function () {
    getQuizz();
});
// Funcion para traer encuestas
function getQuizz(){
    $.ajax({
        type: "GET",
        url: "/api-fundacion/public/quizzes/all/all",
        dataType: "json",
        success: function (response) {
            console.log(response);
            let rows = response.result;
            let html = [];
            for (let i=0; i < rows.length; i++){
            date = rows[i].date_from.split(' ')[0];
            html.push(
                `
                <div class="card my-3 mx-3" idQuizz="${rows[i].idquiz}">
                    <div class="card-header bg-transparent">
                        <h5 class="font-weight-bold">${rows[i].title}</h5>
                        <span class="text-span created-quizz-admin d-none">Administrador | Creada ${date}</span>
                        <span class="text-span created-quizz-user">Administrador</span>
                    </div>
                    <div class="card-body text-secondary">
                        <p class="card-text text-style">${rows[i].description}</p>
                    </div>
                    <div class="card-footer bg-footer">
                        <a href="!#" class="float-right mx-3 btn-answer">
                            <div class="btn-reply">
                                <i class="fas fa-caret-right fa-2x icon-reply"></i>
                            </div>
                        </a>
                        <span class="text-span date-quizz-user text-white">Creada ${date}</span>
                        <a href="!#" class="mt-md-1 mx-md-2 btn-edit d-none">Editar</a>
                        <a href="!#" class="mt-md-1 mx-md-2 btn-delete d-none">Eliminar</a>
                        <a href="!#" class="mt-md-1 mx-md-2 btn-question d-none">Preguntas</a>
                    </div>
                </div>
                `
            );
        }
        $('.list-quizz').html(html.join(''));
        $('.btn-edit').click(function (e) { 
            e.preventDefault();
            element = $(this)[0].parentElement.parentElement;
            idQuizz = $(element).attr('idQuizz');
            localStorage.setItem('idQuizz', idQuizz);
            location.href="/app-fundacion/views/home/quizzes/edit_quizz.php";
        });
        $('.btn-delete').click(function (e) { 
            e.preventDefault();
            element = $(this)[0].parentElement.parentElement;
            idQuizz = $(element).attr('idQuizz');
            Swal.fire({
                title: '¿Eliminar encuesta?',
                    showDenyButton: true,
                    confirmButtonText: `Si`,
                    confirmButtonColor: '#f47d31',
                    denyButtonText: `No`,
                    denyButtonColor: '#514d4a'
                }).then((result) => {
                if (result.isConfirmed) {
                    var data = {
                        "id": idQuizz,
                    }
                    $.ajax({
                        type: "POST",
                        url: "/api-fundacion/public/quizzes/delete",
                        data: data,
                        dataType: "json",
                        success: function (response) {
                            location.reload();
                        }
                    });
                }
            })
        });
        $('.btn-question').click(function (e) { 
            e.preventDefault();
            element = $(this)[0].parentElement.parentElement;
            idQuizz = $(element).attr('idQuizz');
            localStorage.setItem('idquizz', idQuizz);
            location.href="/app-fundacion/views/home/questions/new_question.php";
        });
        $('.btn-answer').click(function (e) { 
            e.preventDefault();
            element = $(this)[0].parentElement.parentElement;
            idQuizz = $(element).attr('idQuizz');
            localStorage.setItem('idquizz', idQuizz);
            location.href="/app-fundacion/views/home/questions/answer_question.php";
        });
        if (user_role == "1") {
            $('.btn-edit').removeClass('d-none');
            $('.btn-delete').removeClass('d-none');
            $('.btn-question').removeClass('d-none');
            $('.created-quizz-admin').removeClass('d-none');
            $('.created-quizz-user').addClass('d-none');
            $('.date-quizz-user').addClass('d-none');
        }
        if (user_role != "1") {
            $('.quizz-realized').removeClass('d-none');
        }
        $('.quizz-realized').click(function (e) { 
            e.preventDefault();
            idUser = user_id;
            localStorage.setItem('idUser', idUser);
            location.href="/app-fundacion/views/home/quizzes/list_quizz_user.php";
        });
        }
    });
}
// 