/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 *  Extension: Captcha
 *  Component: captcha:admin
 */

function CaptchaControlPanel() {
   
    this.init = function() {    
        arikaim.ui.tab('.tab-item');
    };
}

var captcha = new CaptchaControlPanel();

arikaim.page.onReady(function() {
    captcha.init();
});