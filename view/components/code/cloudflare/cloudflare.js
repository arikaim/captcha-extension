'use strict';

window.onloadTurnstileCallback = function () {
    var siteKey = $('#turnsite_captcha').attr('data-sitekey');

    turnstile.render('#turnsite_captcha',{
        sitekey: siteKey
    });
};
