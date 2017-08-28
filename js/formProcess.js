function procesarFormInscripcion() {
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
                topFunction();
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