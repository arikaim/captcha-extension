'use strict';

function CaptchaControlPanel() {
    this.loadCaptcha = function(driverName, elementId) {
        elementId = getDefaultValue(elementId,'tab_content');
        return arikaim.page.loadContent({
            id: elementId,
            component: 'captcha::code',
            params: { 
                driver_name: driverName 
            }
        });
    };
}

var captcha = new CaptchaControlPanel();
