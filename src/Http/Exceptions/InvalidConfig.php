<?php

namespace codicastudio\Filemanager\Http\Exceptions;

use Exception;

class InvalidConfig extends Exception
{
    public static function driverNotSupported()
    {
        return new static('Driver not supported. Please check your configuration');
    }
}