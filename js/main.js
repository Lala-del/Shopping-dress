jQuery("#owl-demo").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 1
        },

        1366: {
            items: 1
        }
    }
});


/////////////////////////////////// star rating

function starRating(ratingElem) {

    $(ratingElem).each(function() {

        var dataRating = $(this).attr('data-rating');

        // Rating Stars Output
        function starsOutput(firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
            return ('' +
                '<span class="' + firstStar + '"></span>' +
                '<span class="' + secondStar + '"></span>' +
                '<span class="' + thirdStar + '"></span>' +
                '<span class="' + fourthStar + '"></span>' +
                '<span class="' + fifthStar + '"></span>');
        }

        var fiveStars = starsOutput('star', 'star', 'star', 'star', 'star');

        var fourHalfStars = starsOutput('star', 'star', 'star', 'star', 'star half');
        var fourStars = starsOutput('star', 'star', 'star', 'star', 'star empty');

        var threeHalfStars = starsOutput('star', 'star', 'star', 'star half', 'star empty');
        var threeStars = starsOutput('star', 'star', 'star', 'star empty', 'star empty');

        var twoHalfStars = starsOutput('star', 'star', 'star half', 'star empty', 'star empty');
        var twoStars = starsOutput('star', 'star', 'star empty', 'star empty', 'star empty');

        var oneHalfStar = starsOutput('star', 'star half', 'star empty', 'star empty', 'star empty');
        var oneStar = starsOutput('star', 'star empty', 'star empty', 'star empty', 'star empty');

        // Rules
        if (dataRating >= 4.75) {
            $(this).append(fiveStars);
        } else if (dataRating >= 4.25) {
            $(this).append(fourHalfStars);
        } else if (dataRating >= 3.75) {
            $(this).append(fourStars);
        } else if (dataRating >= 3.25) {
            $(this).append(threeHalfStars);
        } else if (dataRating >= 2.75) {
            $(this).append(threeStars);
        } else if (dataRating >= 2.25) {
            $(this).append(twoHalfStars);
        } else if (dataRating >= 1.75) {
            $(this).append(twoStars);
        } else if (dataRating >= 1.25) {
            $(this).append(oneHalfStar);
        } else if (dataRating < 1.25) {
            $(this).append(oneStar);
        }

    });

}
starRating('.star-rating');


/////////////////product image

$("select").on("click" , function() {

    $(this).parent(".custom-select").toggleClass("open");

});

$(document).mouseup(function (e)
{
    var container = $(".custom-select");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$("select").on("change" , function() {

    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");

    label.find(".selection-choice").html(selection);

});


/////// live search

$(document).ready(function(){
    $("#filter").keyup(function(){

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the comment list
        $(".control-group .control").each(function(){

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });

        // Update the count
        var numberItems = count;
        $("#filter-count").text("Number of Filter = "+count);
    });
});


/////////////plus-minus counter

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


/////////// category js

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready

// breakpoint and up
    $(window).resize(function(){
        if ($(window).width() >= 767){

            // when you hover a toggle show its dropdown menu
            $(" .navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $( ".navbar .dropdown-menu" ).mouseleave(function() {
                $(this).removeClass("show");
            });

            // do something here
        }
    });



// document ready
});