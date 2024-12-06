  $(document).ready(function () {
                // $(document).on("click", ".show_signup,#trial", function () {
                //     $("#signupmodel").modal("show");

                //     $("#loginmodel").modal("hide");

                //     $(".close_modal").on("click", function () {
                //         $("#signupmodel").modal("hide");
                //     });
                // });

                // $(document).on("click", "#login_button", function () {
                //     $("#signupmodel").modal("hide");

                //     $("#loginmodel").modal("show");
                // });

                // $(".close_modal").on("click", function () {
                //     $("#loginmodel").modal("hide");
                // });


               // $(document).on("click", ".user_button", function () {
               //      $("#login_model").modal("show");
               //      $(".close_modal").on("click", function () {
               //          $("#login_model").modal("hide");
               //      });
               //  });
                 $(".dropdown").click(function () {
                    $(this).find(".dropdown-menu").slideToggle("fast");
                });


                  // executes when HTML-Document is loaded and DOM is ready

                // breakpoint and up

                $(window).resize(function () {
                    if ($(window).width() >= 980) {
                        // when you hover a toggle show its dropdown menu

                        $(".navbar .dropdown-toggle").hover(function () {
                            $(this).parent().toggleClass("show");

                            $(this).parent().find(".dropdown-menu").toggleClass("show");
                        });

                        // hide the menu when the mouse leaves the dropdown

                        $(".navbar .dropdown-menu").mouseleave(function () {
                            $(this).removeClass("show");
                        });

                        // do something here
                    }
                });


                 $("#write-btn").click(function(){
    $("#write").slideToggle('slow','linear');
    $("#question").hide();
  });

                 $("#ask-btn").click(function(){
    $("#question").slideToggle('slow','linear');
    $("#write").hide();
  });

  $('.num-in span').click(function () {
      var $input = $(this).parents('.num-block').find('input.in-num');
    if($(this).hasClass('minus')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      if (count < 2) {
        $(this).addClass('dis');
      }
      else {
        $(this).removeClass('dis');
      }
      $input.val(count);
    }
    else {
      var count = parseFloat($input.val()) + 1
      $input.val(count);
      if (count > 1) {
        $(this).parents('.num-block').find(('.minus')).removeClass('dis');
      }
    }
    
    $input.change();
    return false;
  });


 triggers = $("[showIfIdChecked]")
    .map(function() {
      return $("#" + $(this).attr("showIfIdChecked")).get()
    })
  $.unique(triggers);
  triggers.each(function() {
    executeAutomaticVisibility(this.name);
    $(this).change(function() {
      executeAutomaticVisibility(this.name);
    });
  });

            });



    var $owl = $(".owl-carousel");

            $owl.children().each(function (index) {
                $(this).attr("data-position", index); // NB: .attr() instead of .data()
            });

            $owl.owlCarousel({
                center: true,

                loop: true,

                items: 5,

                autoplay: true,

                responsive: {
                    0: {
                        items: 1,
                    },

                    600: {
                        items: 3,
                    },

                    1000: {
                        items: 4,
                    },
                },
            });

            $(document).on("click", ".owl-item>div", function () {
                // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel

                var $speed = 300; // in ms

                $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
            });


               (function ($) {
                $(function () {
                    $("nav ul li a:not(:only-child)").click(function (e) {
                        $(this).siblings(".dropdown-menu").slideToggle("slow");

                        $(".dropdown-menu").not($(this).siblings()).hide("slow");
                        e.stopPropagation();
                    });
                    $("html").click(function () {
                        $(".dropdown-menu").hide();
                    });
                });
            })(jQuery);


               $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

                $('.moreless-button').click(function() {

  $('.moretext').slideToggle();

  if ($('.moreless-button').text() == "Read more") {

    $(this).text("Read less")

  } else {

    $(this).text("Read more")

  }

});

                 var buttonPlus  = $(".qty-btn-plus");

var buttonMinus = $(".qty-btn-minus");



var incrementPlus = buttonPlus.click(function() {

  var $n = $(this)

  .parent(".qty-container")

  .find(".input-qty");

  $n.val(Number($n.val())+1 );

});



var incrementMinus = buttonMinus.click(function() {

  var $n = $(this)

  .parent(".qty-container")

  .find(".input-qty");

  var amount = Number($n.val());

  if (amount > 0) {

    $n.val(amount-1);

  }

});


  $('.showmore-button').click(function() {
  $('.showmoretext').slideToggle();
  if ($('.showmore-button').text() == "Show more") {
    $(this).text("Show less")
  } else {
    $(this).text("Show more")
  }
});

  