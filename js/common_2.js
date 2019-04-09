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
        x = 60.9449972;
        y = 76.5257868;
        location = new google.maps.LatLng(x, y);
        options = {
            center: location,
            zoom: 13,
            mapTypeControl: false,
            scrollwheel: false
        };

        var markerImage = new google.maps.MarkerImage(
            'images/icon__map.png',
            new google.maps.Size(75,100),
            new google.maps.Point(0,0),
            new google.maps.Point(-150,30)
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








$(document).ready(function(){
   
    $('#n1').click(function(){
        
      var html = $('#boxinfo__block1').html('<input name="n1" value="Свадебное платье">');
  
        
    });    
     $('#n2').click(function(){
        
        html = $('#boxinfo__block2').html('<input name="n2" value="Фата">');

    });    
    
       $('#n3').click(function(){
        
        var html = $('#boxinfo__block3').html('<input name="n3" value="Свадебное платье">');

    });    
       $('#n4').click(function(){
        
        var html = $('#boxinfo__block4').html('<input name="n4" value="Подвязка">');

    });  
  
      $('#n5').click(function(){
        
        var html = $('#boxinfo__block5').html('<input name="n5" value="Свадебное платье5">');

    }); 
  
      $('#n6').click(function(){
        
        var html = $('#boxinfo__block6').html('<input name="n6" value="Свадебное платье6">');

    }); 
  
      $('#n7').click(function(){
        
        var html = $('#boxinfo__block7').html('<input name="n7" value="Свадебное платье7">');

    }); 
  
       $('#n8').click(function(){
        
        var html = $('#boxinfo__block8').html('<input name="n8" value="Свадебное платье8">');

    }); 
  
      $('#n9').click(function(){
        
        var html = $('#boxinfo__block9').html('<input name="n9" value="Свадебное платье9">');

    }); 
  
      $('#n10').click(function(){
        
        var html = $('#boxinfo__block10').html('<input name="n10" value="Свадебное платье10">');

    }); 
  
     $('#n11').click(function(){
        
        var html = $('#boxinfo__block11').html('<input name="n11" value="Свадебное платье11">');

    });
  
      $('#n12').click(function(){
        
        var html = $('#boxinfo__block12').html('<input name="n12" value="Свадебное платье12">');

    }); 
  
        $('#n13').click(function(){
        
        var html = $('#boxinfo__block13').html('<input name="n13" value="Свадебное платье13">');

    }); 
  
  
       $('#n14').click(function(){
        
        var html = $('#boxinfo__block14').html('<input name="n14" value="Свадебное платье14">');

    }); 
  
  
      $('#n15').click(function(){
        
        var html = $('#boxinfo__block15').html('<input name="n15" value="Свадебное платье15">');

    }); 
  
      $('#n16').click(function(){
        
        var html = $('#boxinfo__block16').html('<input name="n16" value="Свадебное платье16">');

    }); 
});



$(document).ready(function(){
   
    $('#f1').click(function(){
        
      var html = $('#boxinfo__block_f1').html('<input name="f1" value="Свадебное платьеf1">');
  
        
    });    
     $('#f2').click(function(){
        
        html = $('#boxinfo__block_f2').html('<input name="f2" value="Свадебное платьеf2">');

    });    
    
       $('#f3').click(function(){
        
        var html = $('#boxinfo__block_f3').html('<input name="f3" value="Свадебное платьеf3">');

    });    
     
});



$(document).ready(function(){
   
    $('#b1').click(function(){
        
      var html = $('#boxinfo__block_b1').html('<input name="b1" value="Свадебное платьеb1">');
  
        
    });    
     $('#b2').click(function(){
        
        html = $('#boxinfo__block_b2').html('<input name="b2" value="Свадебное платьеb2">');

    });    
    
       $('#b3').click(function(){
        
        var html = $('#boxinfo__block_b3').html('<input name="b3" value="Свадебное платьеb3">');

    });  
    
        
       $('#b4').click(function(){
        
        var html = $('#boxinfo__block_b4').html('<input name="b4" value="Свадебное платьеb4">');

    });  
    
    
        
       $('#b5').click(function(){
        
        var html = $('#boxinfo__block_b5').html('<input name="b5" value="Свадебное платьеb5">');

    });  
    
    
        
       $('#b6').click(function(){
        
        var html = $('#boxinfo__block_b6').html('<input name="b6" value="Свадебное платьеb6">');

    });  
    
    
        
       $('#b7').click(function(){
        
        var html = $('#boxinfo__block_b7').html('<input name="b7" value="Свадебное платьеb7">');

    });  
    
    
        
       $('#b8').click(function(){
        
        var html = $('#boxinfo__block_b8').html('<input name="b8" value="Свадебное платьеb8">');

    });  
    
    
        
       $('#b9').click(function(){
        
        var html = $('#boxinfo__block_b9').html('<input name="b9" value="Свадебное платьеb9">');

    });  
     
});





$(document).ready(function(){
   
    $('#d1').click(function(){
        
      var html = $('#boxinfo__block_d1').html('<input name="d1" value="Свадебное платьеd1">');
  
        
    });    
     $('#d2').click(function(){
        
        html = $('#boxinfo__block_d2').html('<input name="d2" value="Свадебное платьеd2">');

    });    
    
       $('#d3').click(function(){
        
        var html = $('#boxinfo__block_d3').html('<input name="d3" value="Свадебное платьеd3">');

    });  
    
        
       $('#d4').click(function(){
        
        var html = $('#boxinfo__block_d4').html('<input name="d4" value="Свадебное платьеd4">');

    });  

     
});



$(document).ready(function(){
   
    $('#s1').click(function(){
        
      var html = $('#boxinfo__block_s1').html('<input name="s1" value="Свадебное платьеs1">');
  
        
    });    
     $('#s2').click(function(){
        
        html = $('#boxinfo__block_s2').html('<input name="s2" value="Свадебное платьеs2">');

    });    
    
       $('#s3').click(function(){
        
        var html = $('#boxinfo__block_s3').html('<input name="s3" value="Свадебное платьеs3">');

    });  
    
        
       $('#s4').click(function(){
        
        var html = $('#boxinfo__block_s4').html('<input name="s4" value="Свадебное платьеs4">');

    });  

     
});





$(document).ready(function(){
   
    $('#u1').click(function(){
        
      var html = $('#boxinfo__block_u1').html('<input name="u1" value="Свадебное платьеu1">');
  
        
    });    
     $('#u2').click(function(){
        
        html = $('#boxinfo__block_u2').html('<input name="u2" value="Свадебное платьеu2">');

    });    
    
       $('#u3').click(function(){
        
        var html = $('#boxinfo__block_u3').html('<input name="u3" value="Свадебное платьеu3">');

    });  
    
        
       $('#u4').click(function(){
        
        var html = $('#boxinfo__block_u4').html('<input name="u4" value="Свадебное платьеu4">');

    });  
    
    
        
       $('#u5').click(function(){
        
        var html = $('#boxinfo__block_u5').html('<input name="u5" value="Свадебное платьеu5">');

    });  
    
    
        
       $('#u6').click(function(){
        
        var html = $('#boxinfo__block_u6').html('<input name="u6" value="Свадебное платьеu6">');

    });  
    
    
        
       $('#u7').click(function(){
        
        var html = $('#boxinfo__block_u7').html('<input name="u7" value="Свадебное платьеu7">');

    });  
    
    
        
       $('#u8').click(function(){
        
        var html = $('#boxinfo__block_u8').html('<input name="u8" value="Свадебное платьеu8">');

    });  
    
    
        
       $('#u9').click(function(){
        
        var html = $('#boxinfo__block_u9').html('<input name="u9" value="Свадебное платьеu9">');

    });  
    
    
       $('#u10').click(function(){
        
        var html = $('#boxinfo__block_u10').html('<input name="u10" value="Свадебное платьеu10">');

    });  
    
    
       $('#u11').click(function(){
        
        var html = $('#boxinfo__block_u11').html('<input name="u11" value="Свадебное платьеu11">');

    });  
     
});





$(document).ready(function(){
   
    $('#k1').click(function(){
        
      var html = $('#boxinfo__block_k1').html('<input name="k1" value="Свадебное платьеk1">');
  
        
    });    
     $('#k2').click(function(){
        
        html = $('#boxinfo__block_k2').html('<input name="k2" value="Свадебное платьеk2">');

    });    
    
       $('#k3').click(function(){
        
        var html = $('#boxinfo__block_k3').html('<input name="k3" value="Свадебное платьеk3">');

    });  
    
        
       $('#k4').click(function(){
        
        var html = $('#boxinfo__block_k4').html('<input name="k4" value="Свадебное платьеk4">');

    });  
    
    
        
       $('#k5').click(function(){
        
        var html = $('#boxinfo__block_k5').html('<input name="k5" value="Свадебное платьеk5">');

    });  
    
    
        
       $('#k6').click(function(){
        
        var html = $('#boxinfo__block_k6').html('<input name="k6" value="Свадебное платьеk6">');

    });  
    
    
        
       $('#k7').click(function(){
        
        var html = $('#boxinfo__block_k7').html('<input name="k7" value="Свадебное платьеk7">');

    });  
    
    
     
     
});
