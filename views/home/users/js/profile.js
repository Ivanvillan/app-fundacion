// Traer datos del usuario para mostrarlo en el perfil
$.ajax({
    type: "GET",
    url: "/api-fundacion/public/users/get/all/" + user_role + "/" + user_id,
    dataType: "json",
    success: function (response) {
        var rol;
        var associated;
        console.log(response);
        data = response.result[0];
        if (data.role == "1") {
            rol = "Administrador";
        }
        if (data.role == "2") {
            rol = "Lider";
        }
        if (data.role == "3") {
            rol = "Invitado";
        }
        if (data.associated_to == "0") {
            associated = "";
        }
        if (data.associated_to == null) {
            associated = "";
        }
        if (data.associated_to != null && data.associated_to != "0") {
            $.ajax({
                type: "GET",
                url: "/api-fundacion/public/users/get/all/all/" + data.associated_to,
                dataType: "json",
                success: function (response) {
                    $('.span-associated').html(response.result[0].username);
                }
            });
        }
        $('.span-name').html(data.name + ' ' + data.surname);   
        $('.span-user').html(data.username);   
        $('.span-date').html(data.registered);   
        $('.span-email').html(data.email);   
        $('.span-range').html(rol);   
        $('.span-about').html(data.about_me);    
    }
});
// 
// Boton para ir a la interfaz de editar perfil
$('.edit-profile').click(function (e) { 
    e.preventDefault();
    location.href="/app-fundacion/views/home/users/edit_profile.php";
});