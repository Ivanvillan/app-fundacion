// variables
var idUser = localStorage.getItem("idUser");
// 
// Encuestas hechas por usuario seleccionado
$.ajax({
    type: "GET",
    url: "/api-fundacion/public/users/surveys/" + idUser,
    dataType: "json",
    success: function (response) {
        console.log(response);
        let rows = response.result;
        let html = [];
        for (let i=0; i < rows.length; i++){
        html.push(
            `
            <div class="card my-3 mx-3" idResponse="${rows[i].idresponse}">
                <div class="card-header bg-transparent">
                    <h5 class="font-weight-bold">${rows[i].title}</h5>
                    <span class="text-span">Fecha de subida ${rows[i].date_from}</span>
                </div>
                <div class="card-body text-secondary">
                    <p class="card-text text-style">
                        ${rows[i].description}
                    </p>
                </div>
                <div class="card-footer bg-footer">
                    <span class="text-span text-white">Completada el ${rows[i].registered}</span>
                    <a href="!#" class="float-right mx-3 btn-response">
                        <div class="btn-show">
                            <i class="fas fa-caret-right fa-2x icon-show"></i>
                        </div>
                    </a>
                </div>
            </div>
            `
        );
    }
    $('.list-quizz-user').html(html.join(''));
    $('.btn-response').click(function (e) { 
        e.preventDefault();
        element = $(this)[0].parentElement.parentElement;
        idResponse = $(element).attr('idResponse');
        localStorage.setItem('idResponse', idResponse);
        location.href="/app-fundacion/views/home/questions/list_response_user.php";
    });
    }
});
// 