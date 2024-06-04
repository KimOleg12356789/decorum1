$(document).ready(function(){


 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");



  $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
});



  $('.three_mobile_sl').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.five_sl').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.eight_sl').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.two_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.two_sl2').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });


  $("select").change(function() {
    $(this).find("option:selected").each(function() {
      var optionValue = $(this).attr("value");
      if (optionValue) {
        $(".box").not("." + optionValue).hide();
        $("." + optionValue).show();
      } else {
        $(".box").hide();
      }
    });
  }).change();


  jQuery(function($) {
    //play video btn
    $(".position-relative video").removeAttr("controls"); //hide controls by default
    //on clicking play button
    $(".video-section").each(function() {
      $(".play-btn").click(function() {
        var video = $(this)
          .closest(".position-relative")
          .find("video")
          .get(0);
        video.play();
        video.controls = true;
        $(this).css("visibility", "hidden");
        return false;
      });
  
      //when video is paused
      $(this)
        .find("video")
        .click(function() {
          var video = $(this).get(0);
          video.pause();
          video.controls = false;
          $(this)
            .siblings(".play-btn")
            .css("visibility", "visible");
          return false;
        });
  
      //when video has ended
      $(this)
        .find("video")
        .on("ended", function() {
          $(this).get(0).controls = false;
          $(this)
            .siblings(".play-btn")
            .css("visibility", "visible");
          $(this)
            .get(0)
            .load();
        });
    });
  });


});



const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


let triggersModal = document.querySelectorAll(".js-show-modal");
let modals = document.querySelectorAll(".js-modal");

function closeModal() {
  modals.forEach(modal => {
    if (modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
    }
  });
}


modals.forEach(modal => {
  modal.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal__inner");
    const isCloseButton = event.target.matches(".js-close-modal");
    if (isCloseButton || isOutside) {
      closeModal();
    }
  });
});

triggersModal.forEach((button) =>
button.addEventListener("click", function (e) {
  e.preventDefault();
  let modalID = this.dataset.modal;
  console.log(modalID);
  modals.forEach(function (modal) {
    if (modal.dataset.modal == modalID) {
      modal.classList.add("is-open");
    }
  });
}));
