<?php
/**
 * Arikaim
 *
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) 2017-2019 Konstantin Atanasov <info@arikaim.com>
 * @license     http://www.arikaim.com/license.html
 * 
*/
namespace Arikaim\Extensions\Captcha\Interfaces;

/**
 * Captcha interface
 */
interface CaptchaInterface
{    
    /**
     * Verify captcha
     *
     * @param mixed|null $captchaResponse
     * @param mixed|null $remoteIp
     * @return bool
     */
    public function verify($captchaResponse, $remoteIp);

    /**
     * Get verification errors
     *
     * @return array|null
     */
    public function getErrors();
}
