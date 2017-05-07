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
        } else {
            e.preventDefault();
            $("#formAlert").fadeOut(400, function () {
                alert("Would be submitting form");
                documento.val("");
                sexo.val(-1);
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