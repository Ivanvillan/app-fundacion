<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/app-fundacion/views/home/questions/css/new_question.css">
    <title>Añadir preguntas</title>
</head>
<body>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/app-fundacion/views/navigation/navigation.php'); ?>
    <div class="container">
        <div class="section-title">
        <div class="row">
            <div class="col col-sm-5">
                <h3 class="font-weight-bold style-title">Añadir preguntas</h3>
            </div>
            <div class="col col-sm-5 mr-2">
                <button class="btn btn-confirm btn-outline-secondary confirm-question float-right">Confirmar</button>
            </div>
        </div>
        </div>
        <div class="section-form">
            <form>
                <div class="row row-question">
                    <div class="col col-md-8 col-question">
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Qué te gusta hacer los fines de semana?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#exampleModal" id="customCheck1"><i class="fas fa-plus fa-sm icon-plus"></i></button>
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Luego de la escuela haces alguna actividad?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck2"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Haces deporte? ¿Cuál?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck3"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Escuchas música? ¿Cuál?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck4"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Tenes computadora? ¿Ipad? ¿Celular? ¿Playstation?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck5"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Que youtubers seguis en redes sociales? ¿Tenes IG? ¿TW? ¿FB? ¿Tiktok?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck6"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Ves tele? ¿Qué tipo de programe ves? ¿Ves Netflix? ¿Serie o película, Cual? ¿Terror, suspenso, comedia, romance?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck7"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Te gusta leer? ¿Cuál libro?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck8"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿El año pasado como te sentiste con la virtualidad? ¿Sentís que aprendiste algo? ¿Qué fue lo bueno o malo de la virtualidad? ¿Tuviste covid?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck9"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Te gusta pasar más tiempo solo o te gusta estar con amigos? ¿Te gusta tomar mates? ¿Los fines de semana vas a algún bar o heladería a tomar algo?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck10"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Dónde vivís? ¿Usualmente vas a algún otro barrio, porque?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck11"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Qué te gusta de Villa C? ¿Qué no te gusta? ¿Qué te gustaría para la ciudad?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck12"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Usas transporte local? ¿te trasladas en auto, bici, moto?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck13"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿A dónde van cuando salen de VC? ¿Por qué?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck14"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Qué aula te gusta más? ¿Qué materia?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck15"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Cómo te organizaste el año pasado con la escuela y la pandemia? ¿Te gustan más las clases presenciales que antes?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck16"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Qué haces antes de entrar a la escuela? Y luego">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck17"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Con quién vivís? ¿Tia, abuela, mamá, papá?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck18"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Qué adulto es tu referente? ¿Con quién te identificas más?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck19"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Qué haces con el adulto con el que vivís? ¿Cocina, hacen algún juego juntos, van de compras?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck20"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Quién es tu profesor favorito?¿Porque? ¿Cómo supones que sería un profesor genial?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck21"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Tienes muchos amigos? ¿Cuantos? ¿Donde los conociste? ¿Que hacen cuando están juntos? ¿Son de tu misma escuela o del barrio o club? ¿Normalmente se ven de tarde o noche?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck22"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿En su escuela identifican diferentes grupos de chicos? ¿Como seria esa clasificación?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck23"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Hacen actividades comunitarias, culturales, barriales, religiosas?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck24"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Que te gusta hacer? ¿Porque?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck25"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Cuál es tu comida preferida?¿ Dulce o salado? ¿Te gusta el helado? De que gusto?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck26"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Qué haces para divertirte?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck27"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Que te gustaría hacer cuando seas grande? ¿Que te gustaría estudiar? ¿Cual es tu sueño, tenes alguna pasión? ¿Cual?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck28"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Le tenes miedo a algo? ¿Cual situación te da terror? ¿Tuviste alguna situación donde se desencadeno ese miedo?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck29"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Que cambiarias del mundo actual? ¿Que no te gusta del país donde vivís? ¿Que te gustaría hacer para cambiar el mundo?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck30"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Te interesa la política, te gustaría pertenecer a la política? ¿Por qué?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck31"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Como te gustaría que sea el LAB, que te gustaría que exista en él? ¿Qué actividades te gustaría realizar? ¿Te gustaría que existan capacitaciones de temas de tu interés? ¿Cuales? ¿Como te imaginas que va a ser el LAB? ¿Sabes que es un LAB? ¿Que juegos te gustaría que tenga? ¿Cuales tecnologías? ¿Como te imaginas que será el espacio de ciencia, tecnología, exploración y creación?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck32"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Te gustan los animales? ¿Cual? ¿Por qué?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck33"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Viste alguna vez una charla TED?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck34"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Que materias pensas que te servirían en el mundo adulto, finanzas, nutrición, oratoria y no se dictan en la escuela? ¿Por qué pensas que es?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck35"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Sabes la definición de líder? ¿Sabes la diferencia entre líder y jefe? ¿Por qué pensas que estas acá? ¿Crees que serias un gran líder?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck36"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control border-style mt-2" value="¿Cómo te sentís al responder estas preguntas? ¿Preferirías que sean de forma virtual? ¿Cuál fue la pregunta que te gustó mas?">
                            <div class="custom-control form-control-lg custom-checkbox">  
                                <button type="button" class="btn btn-style" data-toggle="modal" data-target="#exampleModal" id="customCheck37"><i class="fas fa-plus fa-sm icon-plus"></i></button>  
                            </div> 
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Respuestas</h5>
                    <button type="button" class="close closed" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="radio-value">
                        <div class="row row-type mb-3">
                            <div class="col col-md-4 offset-md-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="type-radio" id="exampleRadios1" value="1">
                                    <label class="form-check-label mt-1" for="exampleRadios1">
                                        De tipo opción
                                    </label>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="type-radio" id="exampleRadios2" value="2">
                                    <label class="form-check-label mt-1" for="exampleRadios2">
                                        De tipo selección
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="field_wrapper">
                        <div class="row mb-1">
                            <div class="d-flex col col-md-9 offset-md-1">
                                <input type="text" name="field_name[]" class="form-control border-style mt-2 input-initial" value=""/>
                                <a href="javascript:void(0);" class="add_button ml-3 mt-3" title="Add field"><i class="fas fa-plus fa-sm icon-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary closed" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-sendAnswer closed" data-dismiss="modal">Confirmar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/app-fundacion/views/home/questions/js/new_question.js"></script>
</body>
</html>