jQuery(document).ready(function(l){l(function(){l(".scrollup").click(function(){l("html, body").animate({scrollTop:0},1e3)})}),l(window).scroll(function(){200<l(this).scrollTop()?l(".scrollup").fadeIn():l(".scrollup").fadeOut()}),l(window).scroll(function(){var t=l(".tel-num");300<l(this).scrollTop()?t.fadeIn():t.fadeOut()}),l(function(){var t=l(".menu-st-link1"),e=l("menu"),n=l(".close-btn"),o=l("li a");t.click(function(){e.toggleClass("active-menu")}),n.click(function(){e.toggleClass("active-menu")}),o.on("click",function(t){t.preventDefault();var n=l(this).attr("href"),o=l(n).offset().top;l("html,body").animate({scrollTop:o},500),e.toggleClass("active-menu")})}),l(function(){var t=l(".menu-st-link2"),n=l(".menu-st-link3");t.on("click",function(t){t.preventDefault();var n=l(this).attr("href"),o=l(n).offset().top;l("html,body").animate({scrollTop:o},500)}),n.on("click",function(t){t.preventDefault();var n=l(this).attr("href"),o=l(n).offset().top;l("html,body").animate({scrollTop:o},500)})}),l("form").submit(function(){var t=l(this);return l.ajax({type:"POST",url:"mail.php",data:t.serialize()}).done(function(){alert("Спасибо за коментарий!</br>Ваше мнение важно для нас"),setTimeout(function(){l.magnificPopup.close(),t.trigger("reset")},500)}),!1}),l(".popup").magnificPopup(),l("#phoneIn").mask("(999) 999-99-99",{autoclear:!0})});