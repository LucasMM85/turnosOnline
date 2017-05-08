$(document).ready(function () {
    $('form[name="form-turno"]').on("submit", function (e) {
        var documento = $(this).find('input[name="documento"]');
        var sexo = $('#sexo');
        if ($.trim(documento.val()) === "") {
            e.preventDefault();
            $("#formAlert").fadeIn(400);
        } else if (sexo.val() == null){
            e.preventDefault();
            $("#formAlert").fadeIn(400);
        }
    });

    $(".alert").find(".close").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).closest(".alert").fadeOut(400);
    });

    var request;

    $("#form-turno").submit(function(event){

        event.preventDefault();

        if (request) {
            request.abort();
        }
        var $form = $(this);
        var $inputs = $form.find("input, select, button, textarea");
        var serializedData = $form.serialize();

        $inputs.prop("disabled", true);

        request = $.ajax({
            url: "php/procesa.php",
            dataType: 'json',
            type: "post",
            data: serializedData
        });

        request.done(function (response, textStatus, jqXHR){
            console.log("Hooray, it worked!");
            $("#dni").text($inputs[0].value);
            $("#ajaxDivRequest").hide();
            $("#ajaxDivResponse").show();
        });

        request.fail(function (jqXHR, textStatus, errorThrown){
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });

        request.always(function () {
            $inputs.prop("disabled", false);
        });

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