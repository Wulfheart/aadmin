<?php

namespace Wulfheart\Aadmin;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Wulfheart\Aadmin\Aadmin
 */
class AadminFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'aadmin';
    }
}
