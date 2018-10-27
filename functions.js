var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/*jslint browser: true*/
/*global $, jQuery, alert*/
function fadeScroll(element, inView) {
    "use strict";
    var alreadyInView = inView;
    $(window).scroll(function () {
        $(element).each(function (i) {
            var bottomObj = $(this).position().top + $(this).outerHeight(), bottomWin = $(window).scrollTop() + $(window).height();
            if ((bottomWin > bottomObj) && (!alreadyInView)) { //alreadyInView prevents the function from running more than once
                $(this).fadeTo(1000, 1, function () {});
                alreadyInView = true;
            }
        });
    });
}