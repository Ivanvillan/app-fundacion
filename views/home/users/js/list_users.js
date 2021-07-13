// Botón para nuevo usuario
$('.new-user').click(function (e) { 
    e.preventDefault();
    location.href = "/app-fundacion/views/home/users/new_user.php";
});
// 
// Listado de usuarios
$.ajax({
    type: "GET",
    url: "/api-fundacion/public/users/get/all/all",
    dataType: "json",
    success: function (response) {
        console.log(response);
        let rows = response.result;
        let html = [];
        for (let i=0; i < rows.length; i++){
        html.push(
            `
            <div class="card content" idUser="${rows[i].iduser}">
                <div class="card-body d-flex">
                    <div class="img-user">
                        <img class="card-img-left img-fluid rounded-circle" src="/app-fundacion/assets/img/img-avatar.png" alt="">
                    </div>
                    <div class="user-data d-block">
                        <span class="card-title">${rows[i].name} ${rows[i].surname} (<span style="font-size: 12px !important; color: #ed7425">${rows[i].email}</span>)</span>
                        <span class="card-text">${rows[i].role} - Invitado por ${rows[i].associated_to}</span>
                    </div>
                </div>
            </div>
            `
        );
    }
    $('.user-list').html(html.join(''));
    $('.card').click(function (e) { 
        e.preventDefault();
        element = $(this)[0];
        idUser = $(element).attr('idUser');
        localStorage.setItem('idUser', idUser);
        location.href="/app-fundacion/views/home/quizzes/list_quizz_user.php";
    });
    }
});
// 
// Input search
$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
        $(".content").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
});
// 