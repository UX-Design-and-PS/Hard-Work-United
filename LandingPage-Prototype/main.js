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

    // search icon events
    $('#search-nav').hover(
        function () {
            $('#search-nav a img').attr('src', "./images/search_hovered.PNG");
            $('#search-nav a').css('background-color', 'white');
        },
        function () {
            $('#search-nav a img').attr('src', "./images/search.PNG");
            $('#search-nav a').css('background-color', '#3D4E62');
        }
    );

    //=====
    $('#search-nav ul').hover(
        function () {
            $('#search-nav a img').attr('src', './images/search_hovered.PNG');
            $('#search-nav a').css('background-color', 'white');
        },
        function () {
            $('#search-nav a img').attr('src', './images/search.PNG');
            $('#search-nav a').css('background-color', '#3D4E62');
        }
    );
    $('#search-nav ul li div').hover(
        function () {
            $('#search-nav a img').attr('src', './images/search_hovered.PNG');
            $('#search-nav a').css('background-color', 'white');
        }
    );
    $('#search-nav ul li div input').hover(
        function () {
            $('#search-nav a img').attr('src', './images/search_hovered.PNG');
            $('#search-nav a').css('background-color', 'white');
        }
    );
    $('#search-nav ul li div div').hover(
        function () {
            $('#search-nav a img').attr('src', './images/search_hovered.PNG');
            $('#search-nav a').css('background-color', 'white');
        }
    );

    // search box events
    $('#search-box-btn').hover(
        function () {
            $('#search-box-btn img').attr('src', './images/search_hovered.PNG');
        },
        function () {
            $('#search-box-btn img').attr('src', './images/search.PNG');
        }
    );

    // user icon events
    $('#user-profile-nav').hover(
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile_hovered.PNG");
            $('#user-profile-nav a').css('background-color', 'white');
        },
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile.PNG");
            $('#user-profile-nav a').css('background-color', '#3D4E62');
        }
    );
    $('#user-profile-nav').mouseover(
        function () {
            $('#user-profile-nav ul.user-hover li a').css('background-color', 'white');
        }
    );
    //=====
    $('#user-profile-nav ul').hover(
        function () {
            $('#user-profile-nav a img').attr('src', './images/profile_hovered.PNG');
            $('#user-profile-nav a').css('background-color', 'white');
        },
        function () {
            $('#user-profile-nav a img').attr('src', './images/profile.PNG');
            $('#user-profile-nav a').css('background-color', '#3D4E62');
        }
    );
    $('#user-profile-nav ul li a').hover(
        function () {
            $('#user-profile-nav a img').attr('src', './images/profile_hovered.PNG');
            $('#user-profile-nav a').css('background-color', 'white');
        }
    );

    // massage icon events
    $('#user-profile-massages-nav').hover(
        function () {
            $('#user-profile-massages-nav a img').attr('src', "./images/notifications_hovered.PNG");
            $('#user-profile-massages-nav a').css('background-color', 'white');
        },
        function () {
            $('#user-profile-massages-nav a img').attr('src', "./images/notifications.PNG");
            $('#user-profile-massages-nav a').css('background-color', '#3D4E62');
        }
    );
    //=====
    $('#user-profile-massages-nav ul').hover(
        function () {
            $('#user-profile-massages-nav a img').attr('src', './images/notifications_hovered.PNG');
            $('#user-profile-massages-nav a').css('background-color', 'white');
        },
        function () {
            $('#user-profile-massages-nav a img').attr('src', './images/notifications.PNG');
            $('#user-profile-massages-nav a').css('background-color', '#3D4E62');
        }
    );

    $('#user-profile-massages-nav ul li div').hover(
        function () {
            $('#user-profile-massages-nav').attr('src', './images/notifications_hovered.PNG');
            $('#user-profile-massages-nav a').css('background-color', 'white');
        }
    );

    // mega-dropdown events

    $('.mdd-first').hover(
        function () {
            $('.mdd-link-first')
                .css('background-color', 'white')
                .css('color', '#3D4E62')
                .css('font-weight', 'bolder');
        },
        function () {
            $('.mdd-link-first')
                .css('background-color', '#3D4E62')
                .css('color', 'white')
                .css('font-weight', 'normal');
        }
    );

    $('.mdd-second').hover(
        function () {
            $('.mdd-link-second')
                .css('background-color', 'white')
                .css('color', '#3D4E62')
                .css('font-weight', 'bolder');
        },
        function () {
            $('.mdd-link-second')
                .css('background-color', '#3D4E62')
                .css('color', 'white')
                .css('font-weight', 'normal');
        }
    );

    $('.mdd-third').hover(
        function () {
            $('.mdd-link-third')
                .css('background-color', 'white')
                .css('color', '#3D4E62')
                .css('font-weight', 'bolder');
        },
        function () {
            $('.mdd-link-third')
                .css('background-color', '#3D4E62')
                .css('color', 'white')
                .css('font-weight', 'normal');
        }
    );
});
