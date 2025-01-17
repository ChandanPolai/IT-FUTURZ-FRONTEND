/** @format */

var THEMETAGS = THEMETAGS || {};
jQuery(function ($) {
  "use strict";

  //preloader
  $(window).ready(function () {
    $("#preloader").delay(100).fadeOut("fade");
  });

  //dropdown menu hover js
  $("ul.nav li.dropdown").hover(function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
  }, function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
  });

  //sticky header
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 2) {
      $("nav.sticky-header").removeClass("affix");
    } else {
      $("nav.sticky-header").addClass("affix");
    }
  });

  // Aih Price
  var selectedBtn = document.querySelectorAll(".select-pricing-btn");
  if (selectedBtn) {
    selectedBtn.forEach(function (item) {
      item.addEventListener("click", function () {
        // Add "active" class to the clicked item
        item.classList.add("active");

        // Remove "active" class from sibling items
        selectedBtn.forEach(function (sibling) {
          if (sibling !== item) {
            sibling.classList.remove("active");
          }
        });
      });
    });
  }
  const selectMontlyPricing = document.querySelector("#selectMonthly");
  const selectYearlPricing = document.querySelector("#selectYearly");
  const monthlyPricing = document.querySelectorAll(".qty-price-card__price-monthly");
  const yearlyPricing = document.querySelectorAll(".qty-price-card__price-yearly");
  if (selectYearlPricing) {
    selectYearlPricing.addEventListener("click", () => {
      monthlyPricing.forEach(e => {
        e.style.cssText = `display: none;`;
      });
      yearlyPricing.forEach(e => {
        e.style.cssText = `display: flex;`;
      });
    });
    selectMontlyPricing.addEventListener("click", () => {
      monthlyPricing.forEach(e => {
        e.style.cssText = `display: flex;`;
      });
      yearlyPricing.forEach(e => {
        e.style.cssText = `display: none;`;
      });
    });
  }
  // Aih Price

  //slide controls
  $(".crm-next-control-outer").on("click", function () {
    $(".crm-next-control").trigger("click");
  });
  $(".crm-prev-control-outer").on("click", function () {
    $(".crm-prev-control").trigger("click");
  });

  //mk accordion
  $(".mk-accordion").each(function () {
    var accordionButton = $(this).find(".accordion-button");
    accordionButton.each(function () {
      $(this).on("click", function () {
        $(this).parents(".mk-accordion").find(".accordion-item.active").removeClass("active");
        $(this).parents(".accordion-item").addClass("active");
      });
    });
  });

  //mk pricing plan
  $(".mk-pricing-control li a").each(function () {
    $(this).on("click", function () {
      $(this).parents(".mk-pricing-control").find("a.active").removeClass("active");
      $(this).addClass("active");
    });
  });
  $(".mk-pricing-control .mk_monthly_switch").on("click", function () {
    $(".mk_monthly_price").show();
    $(".mk_yearly_price").hide();
    return false;
  });
  $(".mk-pricing-control .mk_yearly_switch").on("click", function () {
    $(".mk_monthly_price").hide();
    $(".mk_yearly_price").show();
    return false;
  });

  // Price ai

  $(".aiart-price-btn").on("click", function () {
    $(this).toggleClass("clicked");
    $(".aiart-month").toggleClass("hide");
    $(".aiart-year").toggleClass("show");
    return false;
  });

  //mk feedback slider
  var mkCarousel = $("#mkCarousel");
  $("#mkCarouselControl button").each(function () {
    $(this).on("click", function () {
      $(this).parent().find("button.active").removeClass("active");
      $(this).addClass("active");
    });
  });
  mkCarousel.on("slide.bs.carousel", function () {
    var findNumber = mkCarousel.find(".active").index();
    findNumber = findNumber + 2;
    var totalSlides = $("#mkCarousel .carousel-item").length;
    if (findNumber > totalSlides) {
      findNumber = 1;
    }
    $("#mkCarouselControl").find("button.active").removeClass("active");
    $("#mkCarouselControl button:nth-child(" + findNumber + ")").addClass("active");
  });
  $(".crm-monthly").on("click", function () {
    $(".crm-checkbox-switch").prop("checked", false);
  });
  $(".crm-yearly").on("click", function () {
    $(".crm-checkbox-switch").prop("checked", true);
  });
  $(".crm-pricing-switch").on("click", function () {
    var isBoxChecked = $(".crm-checkbox-switch").is(":checked");
    if (isBoxChecked !== true) {
      $(".crm_monthly_price").show();
      $(".crm_yearly_price").hide();
    } else {
      $(".crm_yearly_price").show();
      $(".crm_monthly_price").hide();
    }
  });

  //hd accordion
  $(".hd-accordion .accordion-header a").each(function () {
    $(this).on("click", function () {
      $(this).parents(".hd-accordion").find(".accordion-item.active").removeClass("active");
      $(this).parents(".accordion-item").addClass("active");
    });
  });

  //sc pricing component
  if ($(".sc-pricing-switch").length) {
    var pricingSwitchBtn = $(".sc-pricing-switch");
    var dataActiveValue = pricingSwitchBtn.find("button.active").data("value");
    if (dataActiveValue == "monthly") {
      $(".sc-pricing-column").find(".pricing-amount.yearly").hide();
      $(".sc-pricing-column").find(".pricing-amount.monthly").show();
    } else if (dataActiveValue == "yearly") {
      $(".sc-pricing-column").find(".pricing-amount.yearly").show();
      $(".sc-pricing-column").find(".pricing-amount.monthly").hide();
    }
    $(".sc-pricing-switch button").each(function () {
      $(this).on("click", function () {
        var dataActiveValue = $(this).data("value");
        $(this).parents(".sc-pricing-switch").find("button.active").removeClass("active");
        $(this).addClass("active");
        if (dataActiveValue == "monthly") {
          $(".sc-pricing-column").find(".pricing-amount.yearly").hide();
          $(".sc-pricing-column").find(".pricing-amount.monthly").show();
        } else if (dataActiveValue == "yearly") {
          $(".sc-pricing-column").find(".pricing-amount.yearly").show();
          $(".sc-pricing-column").find(".pricing-amount.monthly").hide();
        }
      });
    });
  }
  THEMETAGS.initialize = {
    init: function () {
      THEMETAGS.initialize.general();
    },
    general: function () {
      // Mouse Move Parallax Element
      // var $scene = $(".parallax-element").parallax({
      //   scalarX: 100,
      //   scalarY: 100
      // });
    }
  };
  THEMETAGS.documentOnReady = {
    init: function () {
      THEMETAGS.initialize.init();
    }
  };
  $(document).ready(THEMETAGS.documentOnReady.init);
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

  //magnific popup js
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name"
  });

  //    dark light mood
  var setDarkMode = (active = false) => {
    var wrapper = document.querySelector(":root");
    if (active) {
      wrapper.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      wrapper.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };
  var toggleDarkMode = () => {
    var theme = document.querySelector(":root").getAttribute("data-bs-theme");
    // If the current theme is "light", we want to activate dark
    setDarkMode(theme === "light");
  };
  var initDarkMode = () => {
    var theme = localStorage.getItem("theme");
    if (theme == "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    var toggleButton = document.querySelector(".tt-theme-toggle");
    toggleButton && toggleButton.addEventListener("click", toggleDarkMode);
  };
  initDarkMode();
});