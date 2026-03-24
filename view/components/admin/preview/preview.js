'use strict';

arikaim.component.onLoaded(function() {
    $('#drivers_dropdown').on('change', function() {
        var name = $(this).val();
        captcha.loadCaptcha(name,'preview_captcha');
    }); 
});