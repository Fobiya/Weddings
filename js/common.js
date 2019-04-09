// $(function () {
//     try {
//         $.browserSelector();
//         if ($("html").hasClass("chrome")) {
//             $.smoothScroll();
//         }
//     } catch (err) {
//     }
//     ;
//     $("img, a").on("dragstart", function (event) {
//         event.preventDefault();
//     });
// });
$(function () {
    $("[name=send]").click(function () {
		
		
		
	 // conversion  выбор
		var submit = $(this),
        form = submit.closest('form'),
        conversion = form.attr('data-conversion');
		
		
	
		
        $(":input.error").removeClass('error');
        $(".allert").remove();
        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var send_options = btn.closest('form').find('[name=campaign_token]');
        $(ref).each(function () {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if(!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
              var patterntel = /^()[0-9+()]{7,16}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
		

        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });
            $(send_options).each(function () {
                var form = $(this).closest('form'), name = form.find('.name').val();
                if ($(this).val() == '') {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success: function() {
                            $('form').trigger("reset");
                            setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                            // Настройки модального окна после удачной отправки
                            $('div.md-show').removeClass('md-show');
                            $("#call_ok")[0].click();
                        },
                        error: function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                } else {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success:
                            $.ajax({
                                type: 'POST',
                                url: 'https://app.getresponse.com/add_subscriber.html',
                                data: msg,
                                statusCode: {0:function() {
                                    $('form').trigger("reset");
                                    setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                                    // Настройки модального окна после удачной отправки
                                    $('div.md-show').removeClass('md-show');
                                    $("#call_ok")[0].click();
                                }}
                            }),
                        error:  function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                }
            });
        }
        return false;
    })
});


$(function () {
    $('.view-source .v-hide').hide();
    $a = $('.view-source a');
    $a.on('click', function (event) {
        event.preventDefault();
        $a.not(this).next().slideUp(500);
        $(this).next().slideToggle(500);
    });
});



$(function () {
      $("#phone1").mask("+7(999) 999-9999");
    $("#phone2").mask("+7(999) 999-9999");
    $("#phone3").mask("+7(999) 999-9999");
    $("#phone4").mask("+7(999) 999-9999");
    $("#phone5").mask("+7(999) 999-9999");
    $("#phone6").mask("+7(999) 999-9999");
    $("#phone7").mask("+7(999) 999-9999");
});



//
// function set(obj) {
//     var id = obj.title;
//     $('.pacet').val(id);
// }
// function setbtn(obj) {
//     var id = obj.title;
//     $('.pacet').val("Кнопка: " + id);
// }
 // $(function() {
 //         $(".md-trigger").click(function() {
 //             $("#page-preloader").removeClass("active");
 //             $(this).toggleClass("active");
 //         })
 //    });


// $(".md-trigger").click(function(){
//   $("body").addClass("expand");
// });
//
// $(".md-close").click(function(){
//  $("body").removeClass();
// });





function set(obj) {var id=obj.title; $('.pacet').val(id);}
function setbtn(obj) {var id=obj.title; $('.pacet').val("Кнопка: " + id);}


//
//AOS.init({
//    easing: 'ease-in-out-sine',
//     disable: 'mobile'
//});
//
//
//
// $('article').readmore({speed: 500});



//$('#info').readmore({
//    moreLink: '<a href="#">Usage, examples, and options</a>',
//
//    afterToggle: function(trigger, element, expanded) {
//        if(! expanded) { // The "Close" link was clicked
//            $('html, body').animate({scrollTop: element.offset().top}, {duration: 100});
//        }
//    }
//});
//
//$('article').readmore({speed: 500});
//
//$('article__w').readmore({speed: 500});
// СКРОЛ ИД

//$(".scroll_to_id").mPageScroll2id();


/// YTUBE

'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }

    var nb_videos = videos.length;
    for (var i=0; i<nb_videos; i++) {
        // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
       // videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

        // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);

        videos[i].onclick = function() {
            // создаем iframe со включенной опцией autoplay
            var iframe = document.createElement("iframe");
           var iframe_url = "https://www.youtube.com/embed/" + this.id + "?rel=0&amp&controls=0&amp&showinfo=0&autoplay=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');

            // Высота и ширина iframe должны быть такими же, как и у родительского блока
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;

            // Заменяем миниатюру плеером с YouTube
            this.parentNode.replaceChild(iframe, this);
        }
    }
});



//
//$('.multiple-items').slick({
//    infinite: true,
//    slidesToShow: 3,
//    slidesToScroll: 3,
//
//    responsive: [
//
//        {
//            breakpoint: 992,
//            settings: {
//                slidesToShow: 2,
//                slidesToScroll: 2
//            }
//        },
//        {
//            breakpoint: 600,
//            settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1
//            }
//        }
//]
//});
//

var initializeContactsMap;

initializeContactsMap = function() {
    var canvasMap, location, locationMarker, options, x, y;
    if ($('#map').length) {
        x = 60.9436151;
        y = 76.6310003;
        location = new google.maps.LatLng(x, y);
        options = {
            center: location,
            zoom: 15,
            mapTypeControl: false,
            scrollwheel: false
        };

        var markerImage = new google.maps.MarkerImage(
            'images/icon__map.png',
            new google.maps.Size(75,100),
            new google.maps.Point(0,0),
            new google.maps.Point(-0,0)
        );


        canvasMap = new google.maps.Map(document.getElementById('map'), options);
        locationMarker = new google.maps.Marker({
            icon: markerImage,
            position: location
        });

        return locationMarker.setMap(canvasMap);
    }
};
$(document).ready(initializeContactsMap);




$('.single-item').slick({
 
    dots: true,

});


$('.single-item-rtl').slick({
  rtl: true,
  speed: 400,

  cssEase: 'ease-in-out'
});


$('.slik_slid').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1

});





 $(document).on('ready', function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
           speed: 900,
          
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
]
          
          
          
          
      });
  
    });








  // Elements
  var scene = document.getElementById('scene');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene, {
  });


  // Elements
  var scene = document.getElementById('scene_1');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_1, {
  });

  // Elements
  var scene = document.getElementById('scene_2');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_2, {
  });


  // Elements
  var scene = document.getElementById('scene_3');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_3, {
  });



  // Elements
  var scene = document.getElementById('scene_4');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_4, {
  }); 


  // Elements
  var scene = document.getElementById('scene_5');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_5, {
  }); 

  // Elements
  var scene = document.getElementById('scene_6');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_6, {
  }); 
