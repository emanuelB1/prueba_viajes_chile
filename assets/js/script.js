$(document).ready(function () {

    // funcion para smooth scroll
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // funcion para añadir color al navbar cuando se hace scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-colored');
        } else {
            $('.navbar').removeClass('navbar-colored');
        }
    });

    // Mostrar una alerta con el mensaje
    $('#enviarBtn').click(function () {

        alert('¡Su mensaje fue enviado!');
    });

    // tooltip indicando donde visitar la pagina en github pages
    $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip custom-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
      });
    



});