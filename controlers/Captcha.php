<?php
/**
 * Arikaim
 *
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) 2016-2018 Konstantin Atanasov <info@arikaim.com>
 * @license     http://www.arikaim.com/license.html
 * 
*/
namespace Arikaim\Extensions\Captcha\Controlers;

use Arikaim\Core\Controlers\ApiControler;
use Arikaim\Core\Arikaim;

/**
 * Category api controler
*/
class Captcha extends ApiControler
{
    /**
     * Add new category
     *
     * @param object $request
     * @param object $response
     * @param object $data
     * @return object
    */
    public function add($request, $response, $data) 
    {       
        $this->requireControlPanelPermission();
 
        $valid = $data
            ->addRule('parent_id','exist:model:Category|field=id')
            ->addRule('title','text:min=2')
            ->addRule('language','text:min=2|max=2')
            ->validate();

        if ($valid == true) {
            try {               
                $category = Model::Category('category');
                $description = Model::CategoryDescription('category');
                $data['parent_id'] = $data->get('parent_id',null);
                // add record                                        
                $category = $category->create($data->toArray());
              
                if (is_object($category) == false) {
                    $this->setError('ERROR_SAVE_DATA');
                } else {
                    $data->set('category_id',$category->id);
                    $result = $description->create($data->toArray());
                    // execute event handler                                   
                    $result = Arikaim::event()->trigger('category.create',$data->toArray());     
                    $this->setResult(['message' => 'Category created','id' => $category->id,'uuid' => $category->uuid]);                 
                }
            } catch(\Exception $e) {
                $this->setError($e->getMessage());
            }
        } else {
            $this->setErrors($data->getErrors());
        }
        return $this->getResponse();   
    }

    
}
