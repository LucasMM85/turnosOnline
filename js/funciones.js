$(document).ready(function () {
    $('form[name="form-turno"]').on("submit", function (e) {
        var documento = $(this).find('input[name="documento"]');
        var sexo = $('#sexo');
        if ($.trim(documento.val()) === "") {
            e.preventDefault();
            $('#alertLogin').text('Debe ingresar el DNI.');
            $("#formAlert").fadeIn(400);
        } else if (sexo.val() == null){
            e.preventDefault();
            $('#alertLogin').text('Debe seleccionar el sexo.');
            $("#formAlert").fadeIn(400);
        } else if (!$("#g-recaptcha-response").val()) {
            e.preventDefault();
            $('#alertLogin').text('Debe completar el captcha.');
            $("#formAlert").fadeIn(400);
        } else {
            e.preventDefault();
            $("#formAlert").fadeOut(400, function () {
                var request;

                if (request) {
                    request.abort();
                }
                var $form = $("#form-turno");
                var $inputs = $form.find("input, select, button, textarea");
                var serializedData = $form.serialize();

                $inputs.prop("disabled", true);

                request = $.ajax({
                    url: "php/procesaInscripcion.php",
                    dataType: 'json',
                    type: "post",
                    data: serializedData
                });

                request.done(function (response, textStatus, jqXHR){
                    if(response.status == 0){
                        completarDatos(response);
                    } else if(response.status == 1){
                        mostrarError(response);
                    }
                });

                request.fail(function (jqXHR, textStatus, errorThrown){
                    console.error(
                        "Ocurrió un error: "+
                        textStatus, errorThrown
                    );
                });

                request.always(function () {
                    $inputs.prop("disabled", false);
                });
            });
        }
    });

    $(".alert").find(".close").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).closest(".alert").fadeOut(400);
    });


});

$(function() {
    $('#documento').keydown(function(e) {
        var key   = e.keyCode ? e.keyCode : e.which;

        if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
                (key == 65 && ( e.ctrlKey || e.metaKey  ) ) ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
                (key >= 96 && key <= 105)
            )) e.preventDefault();
    });
});

function completarDatos($response) {
    $('#turno').text($response._idTurno);
    $('#nombres').text($response._nombre);
    $('#apellidos').text($response._apellido);
    $('#dni').text($response._dni);
    $('#fechaTurno').text($response._fechaTurno);
    $('#descripcionTurno').text($response._descripcionTurno);
    $('#mensajeConfirmacion').text('Se ha otorgado el turno correctamente!')
    $("#ajaxDivRequest").hide();
    $("#advertencia").hide();
    $("#ajaxDivResponse").show();
}

function mostrarError($response) {
    $('#alertLogin').text($response.errorMessage);
    $("#formAlert").fadeIn(400);
}