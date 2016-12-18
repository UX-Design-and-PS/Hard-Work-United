'use strict';

function loadTemplate(selector) {
    let postTemplateHTML = $(selector).html();
    let compiledTemplate = Handlebars.compile(postTemplateHTML);
    return $('#content-main').html(compiledTemplate());
}

$(document).ready(function () {
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
    $('#user-profile-nav').hover(
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile_hovered.PNG");
        },
        function () {
            $('#user-profile-nav a img').attr('src', "./images/profile.PNG");
        }
    );
    $('#search-nav').hover(
        function () {
            $('#search-nav a img').attr('src', "./images/search_hovered.PNG");
        },
        function () {
            $('#search-nav a img').attr('src', "./images/search.PNG");
        }
    );
});