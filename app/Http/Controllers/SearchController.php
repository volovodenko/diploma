<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;


class SearchController extends Controller
{
    public function getSearch(Request $request)
    {
        $searchString = $request->search;

        $searchList = Product::where('title', 'like', "%{$searchString}%")
            ->orWhere('code', 'like', "%{$searchString}%")
            ->orWhere('catalog_number', 'like', "%{$searchString}%")
            ->orWhere('factory_number', 'like', "%{$searchString}%")
            ->get();


        return response($searchList, 200);
    }
}
