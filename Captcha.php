<?php
/**
 * Arikaim
 *
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) 2016-2018 Konstantin Atanasov <info@arikaim.com>
 * @license     http://www.arikaim.com/license.html
 * 
*/
namespace Arikaim\Extensions\Captcha;

use Arikaim\Core\Extension\Extension;
use Arikaim\Core\Arikaim;

/**
 * Captcha extension
*/
class Captcha extends Extension
{
    /**
     * Install extension routes, events, jobs
     *
     * @return boolean
    */
    public function install()
    {
        // Api Routes
        $result = $this->addApiRoute('GET','/api/captcha/validate','Captcha','validate');  
        $result = $this->addApiRoute('GET','/api/captcha/[{provider}]','Captcha','show');   
        // Control Panel
       
            
        // Register events
        $this->registerEvent('captcha.error','Trigger after captcha validation error');
    
        return true;
    }   
}
