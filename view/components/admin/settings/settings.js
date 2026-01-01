'use strict';

arikaim.component.onLoaded(function() {
    $('#drivers_dropdown').on('change', function() {
        var name = $(this).val();
        options.save('captcha.current',name);      
    });   
});