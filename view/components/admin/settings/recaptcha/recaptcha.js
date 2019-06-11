/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 *  Extension: captcha
 *  Component: captcha::admin.settings.form
 */

arikaim.page.onReady(function() {
    arikaim.form.addRules("#config_form",{
        inline: false,
        fields: {
            title: {
            identifier: "secret",      
                rules: [{
                    type: "minLength[2]"       
                }]
            }
        }
    });

    arikaim.form.onSubmit("#config_form",function() {  
        var name = $('#name').val();
        return arikaim.post('/core/api/module/config/' + name,'#config_form');
    }).then(function(data) {
       $('#view_button').click();
    });
});