$(document).ready(function () {

    (function($) {
      var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
      $.fn.nodoubletapzoom = function() {
        if (IS_IOS)
          $(this).bind('touchstart', function preventZoom(e) {
            var t2 = e.timeStamp
              , t1 = $(this).data('lastTouch') || t2
              , dt = t2 - t1
              , fingers = e.originalEvent.touches.length;
            $(this).data('lastTouch', t2);
            if (!dt || dt > 500 || fingers > 1) return;
    
            e.preventDefault();
            $(this).trigger('click').trigger('click');
          });
      };
    })(jQuery);

   // SLIDER INITIALIZATION==================================================
   $(".js-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
// ===========================================================================

  // Animation with buttons and Video playing===================================
  play_video_iphone(".js-feature__video-scan");
  $(".js-handler-for-hover").mouseover(function(event) {
    let hover_target = event.target;
    if (hover_target.classList.contains("js-scan-button")) {
      // $(".js-feature__video-scan").attr('src', '/img/videos/scan/Camera_Scanned.mp4');
      play_video_iphone(".js-feature__video-scan");
      stop_video_iphone(".js-feature__video-border");
      stop_video_iphone(".js-feature__video-sign");
      stop_video_iphone(".js-feature__video-turn-text");
      stop_video_iphone(".js-feature__video-color");
      stop_video_iphone(".js-feature__video-share");
    }

    if (hover_target.classList.contains("js-border-button")) {
      // $(".js-feature__video-border").attr('src', '/img/videos/border/Camera_Edit.mp4');
      play_video_iphone(".js-feature__video-border");
      stop_video_iphone(".js-feature__video-scan");
      stop_video_iphone(".js-feature__video-sign");
      stop_video_iphone(".js-feature__video-turn-text");
      stop_video_iphone(".js-feature__video-color");
      stop_video_iphone(".js-feature__video-share");
    }

    if (hover_target.classList.contains("js-sign-button")) {
      // $(".js-feature__video-sign").attr('src', '/img/videos/sign/Signature.mp4');
      play_video_iphone(".js-feature__video-sign");
      stop_video_iphone(".js-feature__video-scan");
      stop_video_iphone(".js-feature__video-border");
      stop_video_iphone(".js-feature__video-turn-text");
      stop_video_iphone(".js-feature__video-color");
      stop_video_iphone(".js-feature__video-share");
    }

    if (hover_target.classList.contains("js-turn-text-button")) {
      // $(".js-feature__video-turn-text").attr('src', '/img/videos/turn_text/Hwrighting_OCR.mp4');
      play_video_iphone(".js-feature__video-turn-text");
      stop_video_iphone(".js-feature__video-scan");
      stop_video_iphone(".js-feature__video-border");
      stop_video_iphone(".js-feature__video-sign");
      stop_video_iphone(".js-feature__video-color");
      stop_video_iphone(".js-feature__video-share");
    }

    if (hover_target.classList.contains("js-color-perspect-button")) {
      // $(".js-feature__video-color").attr('src', '/img/videos/color/CC_Moving.mp4');
      play_video_iphone(".js-feature__video-color");
      stop_video_iphone(".js-feature__video-scan");
      stop_video_iphone(".js-feature__video-border");
      stop_video_iphone(".js-feature__video-sign");
      stop_video_iphone(".js-feature__video-turn-text");
      stop_video_iphone(".js-feature__video-share");
    }

    if (hover_target.classList.contains("js-share-button")) {
      // $(".js-feature__video-share").attr('src', '/img/videos/share/Share screen.mp4');
      play_video_iphone(".js-feature__video-share");
      stop_video_iphone(".js-feature__video-scan");
      stop_video_iphone(".js-feature__video-border");
      stop_video_iphone(".js-feature__video-sign");
      stop_video_iphone(".js-feature__video-turn-text");
      stop_video_iphone(".js-feature__video-color");
    }
  });

  $(".js-handler-for-hover-tablet").on("click", function (event) {
    let hover_target = event.target;
    $(".js-feature__video-scan-tablet").hide();
    if (hover_target.classList.contains("js-scan-button")) {
      $(".js-feature__video-scan-tablet").show();
      $(".js-feature__video-border-tablet").hide();
      $(".js-feature__video-sign-tablet").hide();
      $(".js-feature__video-turn-text-tablet").hide();
      $(".js-feature__video-color-tablet").hide();
      $(".js-feature__video-share-tablet").hide();
    }

    if (hover_target.classList.contains("js-border-button")) {
      // $(".features__video-wrapper").addClass("_appear");
      $(".js-feature__video-border-tablet").show();
      $(".js-feature__video-scan-tablet").hide();
      $(".js-feature__video-sign-tablet").hide();
      $(".js-feature__video-turn-text-tablet").hide();
      $(".js-feature__video-color-tablet").hide();
      $(".js-feature__video-share-tablet").hide();
    }

    if (hover_target.classList.contains("js-sign-button")) {
      // $(".features__video-wrapper").addClass("_appear");
      $(".js-feature__video-sign-tablet").show();
      $(".js-feature__video-scan-tablet").hide();
      $(".js-feature__video-border-tablet").hide();
      $(".js-feature__video-turn-text-tablet").hide();
      $(".js-feature__video-color-tablet").hide();
      $(".js-feature__video-share-tablet").hide();
    }

    if (hover_target.classList.contains("js-turn-text-button")) {
      // $(".features__video-wrapper").addClass("_appear");
      $(".js-feature__video-turn-text-tablet").show();
      $(".js-feature__video-scan-tablet").hide();
      $(".js-feature__video-border-tablet").hide();
      $(".js-feature__video-sign-tablet").hide();
      $(".js-feature__video-color-tablet").hide();
      $(".js-feature__video-share-tablet").hide();
    }

    if (hover_target.classList.contains("js-color-perspect-button")) {
      // $(".features__video-wrapper").addClass("_appear");
      $(".js-feature__video-color-tablet").show();
      $(".js-feature__video-scan-tablet").hide();
      $(".js-feature__video-border-tablet").hide();
      $(".js-feature__video-sign-tablet").hide();
      $(".js-feature__video-turn-text-tablet").hide();
      $(".js-feature__video-share-tablet").hide();
    }

    if (hover_target.classList.contains("js-share-button")) {
      // $(".features__video-wrapper").addClass("_appear");
      $(".js-feature__video-share-tablet").show();
      $(".js-feature__video-scan-tablet").hide();
      $(".js-feature__video-border-tablet").hide();
      $(".js-feature__video-sign-tablet").hide();
      $(".js-feature__video-turn-text-tablet").hide();
      $(".js-feature__video-color-tablet").hide();
    }
  });

  function play_video_iphone(video_tag) {
    $(video_tag).get(0).load();
    $(video_tag).addClass("d-block");
    $(video_tag)[0].autoplay = true;
    $(video_tag).get(0).play();
  }

  function stop_video_iphone(video_tag) {
    $(video_tag)[0].autoplay = false;
    $(video_tag).get(0).pause();
    $(video_tag).removeClass("d-block");
  }
  // ===========================================================================

  // ANIMATION WITH ARROW DOTS (APPEAR WITH SCROLL)=============================
  let header_arrow = $(".line-header_arrow");
  let how_works_arrow = $(".line-how-work-arrow");
  let features_arrow = $(".line-futures-arrow");
  let testimonials_arrow = $(".line-testimonials-arrow");

  header_arrow.addClass("_appear_dots");
  header_arrow.show()

  $(window).scroll(function () {

    // SHOW TOP MENU ===========================================================
    if ($(window).scrollTop() > 565) {
      $(".top-menu").removeClass("_disappear");
      $(".top-menu").show();
      $(".top-menu").addClass("_appear");
      $(".top-menu").addClass("position-fixed fixed-top");
    }
    if ($(window).scrollTop() < 500) {
      $(".top-menu").removeClass("_appear");
      $(".top-menu").addClass("_disappear");
    }

    if ($(window).scrollTop() > 2400) {
      how_works_arrow.addClass("_appear_dots");
      how_works_arrow.show();
    }

    if ($(window).scrollTop() > 550) {
      testimonials_arrow.addClass("_appear_dots");
      testimonials_arrow.show()
    }

    if ($(window).scrollTop() > 1350) {
      features_arrow.addClass("_appear_dots");
      features_arrow.show();
    };

  });
  // ===========================================================================

});  