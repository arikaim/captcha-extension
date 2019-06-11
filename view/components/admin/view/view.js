/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 *  Extension: Captcha
 *  Component: captcha::admin.view
*/

function CaptchaControlPanelView() {

    var self = this;

    this.init = function() {
        arikaim.ui.button('.settings-button',function(element) {
            var driver_name = $(element).attr('driver-name');         
            arikaim.ui.setActiveTab('#settings_button');

            return self.loadSettings(driver_name);
        });

        arikaim.ui.button('.view-button',function(element) {
            var driver_name = $(element).attr('driver-name');         
            arikaim.ui.setActiveTab('#captcha_view_button');

            return self.loadCapcha(driver_name);
        });
    };

    this.loadCapcha = function(driver_name) {
        return arikaim.page.loadContent({
            id: 'tab_content',
            component: 'captcha::code',
            params: { driver_name: driver_name }
        });
    };

    this.loadSettings = function(driver_name) {
        return arikaim.page.loadContent({
            id: 'tab_content',
            component: 'captcha::admin.settings',
            params: { name: driver_name }
        });
    }
}

var captchaView = new CaptchaControlPanelView();

arikaim.page.onReady(function() {
    captchaView.init();
});