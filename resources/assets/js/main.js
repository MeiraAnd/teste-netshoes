import $ from 'jquery';
window.jQuery = $;

//require('bootstrap-sass/assets/javascripts/bootstrap/affix.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/alert.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/button.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/carousel.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/collapse.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/dropdown.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/modal.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/popover.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/tab.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/tooltip.js');
//require('bootstrap-sass/assets/javascripts/bootstrap/transition.js');

//import 'bootstrap-select';
/*import 'parsleyjs';
import 'parsleyjs/dist/i18n/pt-br';*/
//import Handlebars from 'handlebars';
//import 'slick-carousel';
//import 'magnific-popup';

$(() => {
    'use strict';

    // bootstrap-select and Parsley adaptation
    /*let $parsleyForms = $('form[data-parsley-validate]');
    if ($parsleyForms.length > 0) {
        $parsleyForms.find('.selectpicker').selectpicker({ title: '' });

        $parsleyForms.parsley().on('field:error', function () {
            if (this.$element.prop('tagName').toLowerCase() === 'select' && this.$element.hasClass('selectpicker')) {
                this.$element.parents('.bootstrap-select').find('button').removeClass('parsley-success').addClass('parsley-error');
            }
        }).on('field:success', function () {
            if (this.$element.prop('tagName').toLowerCase() === 'select' && this.$element.hasClass('selectpicker')) {
                this.$element.parents('.bootstrap-select').find('button').removeClass('parsley-error').addClass('parsley-success');
            }
        });
    }*/

    // AJAX forms
    /*$(document).on('submit', 'form.js-ajax', event => {
        event.preventDefault();

        let $form = $(event.currentTarget),
            $submit = $form.find('[type="submit"]').attr('disabled', 'disabled'),
            data = $form.serialize(),
            multipart = false;

        if ($form.prop('enctype') === 'multipart/form-data') {
            data = new FormData($form.get(0));
            multipart = true;
        }

        $.ajax({
            timeout: 60 * 1000, // milliseconds
            url: $form.prop('action'),
            type: $form.prop('method'),
            data: data,
            processData: !multipart,
            contentType: multipart ? false : 'application/x-www-form-urlencoded; charset=UTF-8'
        })
            .done((data, textStatus, jqXHR) => {
                alert(data.message);

                $form.get(0).reset();
            })
            .fail((jqXHR, textStatus, errorThrown) => {
                switch (textStatus) {
                    case 'timeout':
                    case 'error':
                    case 'abort':
                    case 'parsererror':
                        console.error(errorThrown);
                        break;
                }
            })
            .always((jqXHR, textStatus) => {
                $submit.removeAttr('disabled');
            });
    });*/

    // AJAX - load more (Handlebars)
    /*$('.js-load-more').removeAttr('disabled');
    $(document).on('click', '.js-load-more', event => {
        event.preventDefault();

        let $btn = $(event.currentTarget).attr('disabled', 'disabled');

        $.ajax({
            url: $btn.data('src'),
            type: 'GET',
            data: {
                page: $btn.data('page'),
                results: $btn.data('results')
            }
        })
            .done((data, textStatus, jqXHR) => {
                let $container = $( $btn.data('container') ),
                    template = Handlebars.compile(
                        $($btn.data('template')).html()
                    );

                $container.append(template(data));

                if (data.page > 0) {
                    $btn.data('page', data.page);
                    $btn.removeAttr('disabled');
                } else {
                    $btn.hide();
                }
            })
            .fail((jqXHR, textStatus, errorThrown) => {
                switch (textStatus) {
                    case 'timeout':
                    case 'error':
                    case 'abort':
                    case 'parsererror':
                        console.error(errorThrown);
                        $btn.removeAttr('disabled');
                        break;
                }
            });
    });*/

    // slick
    /*$('.showcase').slick({
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        draggable: false,
        speed: 900,
        slide: 'img'
    });*/

    // Magnific Popup
    /*$.extend(true, $.magnificPopup.defaults, {
        type: 'image',
        tClose: 'Fechar (Esc)',
        tLoading: 'Carregando&hellip;',
        ajax: {
            tError: '<a href="%url%">O conteúdo</a> não pôde ser carregado.'
        },
        image: {
            tError: '<a href="%url%">A imagem</a> não pôde ser carregada.'
        },
        zoom: {
            //enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        },
        gallery: {
            //enabled: true,
            tPrev: 'Anterior (seta para esquerda)',
            tNext: 'Próxima (seta para direita)',
            tCounter: '%curr% de %total%'
        }
    });*/
});
