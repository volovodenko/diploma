<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PageContent;


class PageContentController extends Controller
{

    public function getPageContent($page){

        $content = PageContent::where('title', $page)->first()->content;

//        sleep(5);


        return response()->json(unserialize($content), 200);
    }


}
