// variables
var idResponse = localStorage.getItem("idResponse");
var html = [];
// 
// Listado de respuestas del usuario en encuesta
$.ajax({
    type: "GET",
    url: "/api-fundacion/public/users/response/" + idResponse,
    dataType: "json",
    success: function (response) {
        console.log(response);
        $('.style-title').html('Encuesta respondida: ' + response.data.title)
        $.each(response.data.questions, function(i, item){
               n1 = `
                    <div class="ml-3">
                        <h6 class="font-weight-bold mt-4">Pregunta ${item.orden}</h6>
                        <span class="span-style">${item.query}</span>
                    </div>
               `;
               type_answer = item.type;
               html.push(n1);
               $.each(item.options, function(index, items){
                    n2 = `
                        <label class="d-flex mt-3 mb-1 option-user">
                            ${items.text}
                        </label>
                    `;
                    n3 = `
                        <label class="d-flex mt-3 mb-1 option-user">
                                ${items.text} 
                        </label>
                    `;
                   if (type_answer == '1') {
                       html.push(n2); 
                   }else{
                       html.push(n3); 
                   }
               });
        });
        $('.section-response-user').html(html.join(''));

   }
});
// 