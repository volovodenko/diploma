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

//    public function test1()
//    {
//
//        return response()->json(['message' => 'test1'], 200);
//    }
//
//    public function test2()
//    {
//
//        return response()->json(['message' => 'test2'], 200);
//    }
}
