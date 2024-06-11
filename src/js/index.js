function initFE() {
  closeByClickOutside('[data-menu="mainmenu"]', '[data-menutoggle="mainmenu"]');
}




function closeByClickOutside(element, button) {
  $(document).click(function (event) {
    if (!$(event.target).closest(`${element},${button}`).length) {
      $(button).removeClass("active")
      $(element).removeClass("active")
    }
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      $(button).removeClass("active")
      $(element).removeClass("active")
    }
  })
}

$(document).ready(function () {
  new WOW().init();

  
var statsStart = (function () {
  var executed = false
  return function () {
    if (!executed) {
      executed = true
      $(".stats__number span").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(this).text(numberWithSpace(Math.ceil(now)))
              },
            }
          )
      })
    }
  }
})();

function numberWithSpace(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

$(window).scroll(function () {
  if ($(".stats").length) {
    var top_of_element = $(".stats").offset().top
    var bottom_of_element =
      $(".stats").offset().top + $(".stats").outerHeight()
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
    var top_of_screen = $(window).scrollTop()

    if (
      bottom_of_screen > top_of_element &&
      top_of_screen < bottom_of_element
    ) {
      statsStart()
    }
  }
})

 
  $("a.scrollTo").click(function () {

    var destination = $($(this).attr("href")).offset().top - 30;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1100);
    return false;
  });

 

  $(".tpbutton").on("click", function (e) {
    e.preventDefault()
    e.stopPropagation()
    $('.tp-tooltip').removeClass('active')
    $(this).closest("[data-tooltip='tooltip']").find('.tp-tooltip').addClass('active')
  })
  $(".tpclose").on("click", function (e) {
    e.preventDefault()
    e.stopPropagation()
    $(this).closest("[data-tooltip='tooltip']").find('.tp-tooltip').removeClass('active')
  })


  $("[data-menutoggle='mobilemenu']").on("click", function (e) {
    e.preventDefault()
    let menu = $(this).data("menutoggle")
    $(`[data-menu=${menu}]`).toggleClass("active")
    $(this).toggleClass("active")
    $(".jsbackdrop").toggleClass("active")
  })
  $(".jsbackdrop").on("click", function (e) {
    $(this).removeClass("active")
    $("[data-menu]").removeClass("active")
    $("[data-menutoggle]").removeClass("active")
  })

  $("input[type=tel]").mask("7 (999) 999-99-99")
 
})


window.addEventListener("load", function () {
  initFE()
})
