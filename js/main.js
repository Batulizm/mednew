jQuery(document).ready(function($) {
  
// Scrolls
$(function() {
  // click scrollup
  $('.scrollup').click(function() {
    // 
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200){
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn()
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});
$(window).scroll(function() {

  var telnum = $('.tel-num');

  if ($(this).scrollTop()>300){
    telnum.fadeIn()
  }

  else {
    telnum.fadeOut();
  }
});
// Menu animation
$(function() {
  var menuLink = $('.menu-st-link1');
  var menu = $('menu');
  var close = $('.close-btn');
  var navLink = $('li a');

  menuLink.click(function() {
    menu.toggleClass('active-menu');
  });
  close.click(function() {
    menu.toggleClass('active-menu');
  });

  navLink.on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html,body').animate({scrollTop: top}, 500)
     menu.toggleClass('active-menu');
  });
});
$(function(){

var otzLink = $('.menu-st-link2');
var contLink = $('.menu-st-link3');

otzLink.on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html,body').animate({scrollTop: top}, 500)
  });
contLink.on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html,body').animate({scrollTop: top}, 500)
  });
});
//E-mail Ajax Send

  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо за коментарий!</br>Ваше мнение важно для нас");
      setTimeout(function() {
        $.magnificPopup.close();
        th.trigger("reset");
      }, 500);
    });
    return false;
  });
//Popup reviews

$('.popup').magnificPopup();

// Mask input
$('#phoneIn').mask('(999) 999-99-99', {autoclear: true});

});