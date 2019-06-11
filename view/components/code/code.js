arikaim.page.onReady(function() {
    $('#modules_dropdown').dropdown({
        onChange: function(name) {              
            captchaView.loadCapcha(name);
        }
    });   
});