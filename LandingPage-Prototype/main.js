'use strict';

function loadTemplate(selector) {
    let postTemplateHTML = $(selector).html();
    let compiledTemplate = Handlebars.compile(postTemplateHTML);
    return $('#content-main').html(compiledTemplate());
}

$(document).ready(function () {
    // dropdown events
    $('.dropdown').hover(
        function () {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp('400');
            $(this).toggleClass('open');
        },
        function () {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown('400');
            $(this).toggleClass('open');
        }
    );
    $('.dropdown').on('click', function (event) {
        event.stopPropagation();
    });

    // user icon events
    $('#user-profile-nav').hover(
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile_hovered.PNG");
        },
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile.PNG");
        }
    );
    $('#user-profile-nav a img').hover(
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile_hovered.PNG");
        },
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile.PNG");
        }
    );
    
    $('#user-profile-nav').mouseover(
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile_hovered.PNG");
        }
    );
    $('#user-profile-nav a img').mouseout(
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile.PNG");
        }
    );

    // search icon events
    $('#search-nav').hover(
        function () {
            $('#search-nav a img').attr('src', "./images/search_hovered.PNG");
        },
        function () {
            $('#search-nav a img').attr('src', "./images/search.PNG");
        }
    );
    $('#search-nav a img').hover(
        function () {
            $('#search-nav a img').attr('src', "./images/search_hovered.PNG");
        },
        function () {
            $('#search-nav a img').attr('src', "./images/search.PNG");
        }
    );

    $('#search-nav').mouseout(
        function () {
            $('#search-nav a img').attr('src', "./images/search.PNG");
        }
    );
    $('#search-nav a img').mouseout(
        function () {
            $('#search-nav a img').attr('src', "./images/search_hovered.PNG");
        }
    );

    $('#search-box-btn').hover(
        function () {
            $('#search-box-btn img').attr('src', "./images/search_hovered.PNG");
        },
        function () {
            $('#search-box-btn img').attr('src', "./images/search.PNG");
        }
    );
});