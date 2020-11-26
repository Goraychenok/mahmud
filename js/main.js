//slider
var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
      },
});


$('.popup-btn').on('click',  function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
    $('body').addClass('stop');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var popup = $("#popup-dialog"); // тут указываем ID элемента
    var close = $(".popup-close");
    $('body').addClass('stop');
    if (!popup.is(e.target)// если клик был не по нашему блоку
        && popup.has(e.target).length === 0 // и не по его дочерним элементам
        || close.is(e.target)) { 
            $('body').addClass('stop');
            event.preventDefault();
            $('.popup').fadeOut();
            $('body').removeClass('stop');
    }
});


$('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено");
        $("form").trigger("reset");
        event.preventDefault();
        $('.popup').fadeOut();
        $('.modal').fadeOut();
        $('body').removeClass('stop');
    });
    return false;
});

jQuery(function($){
    $("#phone").mask("+7 (999) 999-99-99");
 });
 jQuery(function($){
    $("#phones").mask("+7 (999) 999-99-99");
 });