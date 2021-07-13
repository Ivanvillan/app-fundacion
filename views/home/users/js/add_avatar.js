// var folderV1 = "/app-fundacion/assets/img/avatares/avataresV1/";
// var folderV2 = "/app-fundacion/assets/img/avatares/avataresV2/";
// var folderV3 = "/app-fundacion/assets/img/avatares/avataresV3/";
// var valueImg;
// $.ajax({
//     url : folderV1,
//     success: function (data) {
//         $(data).find("a").attr("href", function (i, val) {
//             if( val.match(/\.(jpe?g|jpg|png|gif)$/) ) {
//                 $(".section-avatarV1").append("<div class='section-img' value='"+ val + "'><img class='img-fluid rounded-circle' src='"+ folderV1 + val +"'> <input type='file' class='d-none' value='"+ folderV1 + val +"' /> </div>");
//             } 
//         });
//         $('.section-img').click(function (e) { 
//             e.preventDefault();
//             element = $(this)[0];
//             inputValue = $(element).find('input')[0];
//             imgName = $(inputValue).attr('name');
//             console.log(imgName);
//         });
//     }
// });
// $.ajax({
//     url : folderV2,
//     success: function (data) {
//         $(data).find("a").attr("href", function (i, val) {
//             if( val.match(/\.(jpe?g|jpg|png|gif)$/) ) { 
//                 $(".section-avatarV2").append("<div class='section-img' value='"+ val + "'><img class='img-fluid rounded-circle' src='"+ folderV2 + val +"'></div>");
//             } 
//         });
//         $('.section-img').click(function (e) { 
//             e.preventDefault();
//             element = $(this)[0];
//             valueImg = $(element).attr('value');
//         });
//     }
// });
// $.ajax({
//     url : folderV3,
//     success: function (data) {
//         $(data).find("a").attr("href", function (i, val) {
//             if( val.match(/\.(jpe?g|jpg|png|gif)$/) ) { 
//                 $(".section-avatarV3").append("<div class='section-img' value='"+ val + "'><img class='img-fluid rounded-circle' src='"+ folderV3 + val +"'></div>");
//             } 
//         });
//         $('.section-img').click(function (e) { 
//             e.preventDefault();
//             element = $(this)[0];
//             valueImg = $(element).attr('value');
//         });
//     }
// });

// $('.add-avatar').click(function (e) { 
//     e.preventDefault();	
//     console.log(valueImg);
//     $.ajax({
//         type: "POST",
//         url: "/api-fundacion/public/users/avatar",
//         data: {
//             "picture[]": valueImg,
//             "id": user_id
//         },
//         dataType: "json",
//         success: function (response) {
//             console.log(response);
//         }
//     });
// });