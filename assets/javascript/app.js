/*
 * Application
 */

$('#layout-mobile-nav').sidebar({
    animation: 'overlay'
});

function togglePrimarySidebar() {
    $('#layout-mobile-nav').sidebar('toggle');
}

$(document).render(function(){
    $('.ui.checkbox').checkbox()
    $('[data-control=dropdown]').dropdown()
    $('[data-control=popup]').popup()
    $('[data-control=accordion]').accordion()
    $('[data-control=tabs] > .item').tab()
    $('[data-control=progress]').progress()
    $('[data-control=dimmer]').dimmer({ on: 'hover' })
    $('[data-control=rating]').rating({ interactive: false, maxRating: 5 })
    $('[data-dismiss=message]:not(.loaded)').addClass('loaded').on('click', function() {
        $(this).closest('.message').transition('vertical flip out')
    })
});
