<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Menu;

class MenuController extends Controller
{
    public function getMenu()
    {
        $menu = Menu::all();

        return response($menu, 200);
    }

}
