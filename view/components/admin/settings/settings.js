'use strict';

arikaim.component.onLoaded(function() {
    $('#drivers_dropdown').dropdown({
        onChange: function(name) {              
            options.save('captcha.current',name);
        }
    });   
});