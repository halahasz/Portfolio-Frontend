$(document).ready(function () {
  // Body slide
  $(".menu-item").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // Slide by arrow
  $("#arrow").click(function () {
    $("html, body").animate(
      { scrollTop: $("#skills-title").offset().top },
      1000
    );
  });

  // Scroll reveal
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > $(".bar").offset().top - 600) {
      $(".bar").removeClass("hidden");
    }

    if ($(document).scrollTop() > $(".bar").offset().top - 600) {
      $(".bar").removeClass("hidden_right");
    }

    if ($(document).scrollTop() > $(".wrapper-enzymatica").offset().top - 700) {
      $(".wrapper-enzymatica").removeClass("hidden");
    }
    if ($(document).scrollTop() > $(".wrapper-graphics").offset().top - 700) {
      $(".wrapper-graphics").removeClass("hidden_right");
    }
    if ($(document).scrollTop() > $(".wrapper-coldzyme").offset().top - 700) {
      $(".wrapper-coldzyme").removeClass("hidden_right");
    }
    if ($(document).scrollTop() > $(".wrapper-recipes").offset().top - 700) {
      $(".wrapper-recipes").removeClass("hidden");
    }

    if ($(document).scrollTop() > $(".wrapper-opta-tech").offset().top - 700) {
      $(".wrapper-opta-tech").removeClass("hidden");
    }

    if ($(document).scrollTop() > $(".wrapper-react_app").offset().top - 700) {
      $(".wrapper-react_app").removeClass("hidden_right");
    }

    if (
      $(document).scrollTop() >
      $(".wrapper-poland-travel").offset().top - 700
    ) {
      $(".wrapper-poland-travel").removeClass("hidden");
    }

    if ($(document).scrollTop() > $(".wrapper-zeeko").offset().top - 700) {
      $(".wrapper-zeeko").removeClass("hidden_right");
    }

    if ($(document).scrollTop() > $(".wrapper-wola").offset().top - 700) {
      $(".wrapper-wola").removeClass("hidden");
    }

    if (
      window.matchMedia("(max-width: 400px)").matches &&
      $(".bar").offset().top - 700
    ) {
      $(".html").delay(1500).animate({ width: 180 }, 1000);
      $(".css").delay(1700).animate({ width: 200 }, 1000);
      $(".js").delay(1900).animate({ width: 190 }, 1000);
      $(".vue").delay(2100).animate({ width: 190 }, 1000);
      // $(".wordpress").delay(2300).animate({ width: 160 }, 1000);
      // $(".bootstrap").delay(2500).animate({ width: 120 }, 1000);
      $(".git").delay(2300).animate({ width: 150 }, 1000);
      $(".rwd").delay(2500).animate({ width: 200 }, 1000);
    } else {
      $(".html").delay(1500).animate({ width: 230 }, 1000);
      $(".css").delay(1700).animate({ width: 250 }, 1000);
      $(".js").delay(1900).animate({ width: 230 }, 1000);
      $(".vue").delay(2100).animate({ width: 230 }, 1000);
      // $(".wordpress").delay(2300).animate({ width: 200 }, 1000);
      // $(".bootstrap").delay(2500).animate({ width: 140 }, 1000);
      $(".git").delay(2300).animate({ width: 170 }, 1000);
      $(".rwd").delay(2500).animate({ width: 250 }, 1000);
    }
  });

  // Detect Mobile
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  // Parallax Scroll
  function parallaxScroll1() {
    var scrolledY = jQuery(window).scrollTop();
    var headerImage = jQuery(".background1");
    headerImage.css(
      "background-position",
      "center -" + scrolledY * 0.25 + "px"
    );
  }

  function parallaxScroll2() {
    var scrolledY = jQuery(window).scrollTop() - 700;
    var headerImage = jQuery(".background2");
    headerImage.css(
      "background-position",
      "center -" + scrolledY * 0.25 + "px"
    );
  }

  // Parallax Background on Desktop
  if (!isMobile.any()) {
    jQuery(window).on("scroll", function () {
      parallaxScroll1();
      parallaxScroll2();
    });
  }
});
