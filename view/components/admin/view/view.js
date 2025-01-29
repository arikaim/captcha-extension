/**
 *  Arikaim
 *  @copyright  Copyright (c)  <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
*/
'use strict';

function CaptchaControlPanelView() {
    var self = this;

    this.init = function() {
        arikaim.events.on('driver.config',function(element,name,category) {
            arikaim.ui.setActiveTab('#settings_button');
            return drivers.loadConfig(name,'capcha_driver_config');           
        },'driverConfig');       
        
        arikaim.ui.button('.view-button',function(element) {
            var driverName = $(element).attr('driver-name');         
            return self.previewCapcha(driverName);
        });
    };

    this.previewCapcha = function(driverName) {
        return arikaim.page.loadContent({
            id: 'capcha_driver_config',
            component: 'captcha::admin.preview',
            params: { driver_name: driverName }
        });
    };
}

var captchaView = new CaptchaControlPanelView();

arikaim.component.onLoaded(function() {
    captchaView.init();
});