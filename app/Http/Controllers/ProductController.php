<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CarModel;
use App\ProductCarModelCarCategory;
use App\Manufacturer;
use App\Product;


class ProductController extends Controller
{

    public function getProductList($carModelSlug)
    {
        //В реквесте: slug модели авто, (//offset, limit)

        $carModel = CarModel::where('slug', $carModelSlug)->first();


        if (!$carModel){
            return response()->json(['message' => 'API: Car model not found'], 404);
        }


        $productsObject = ProductCarModelCarCategory::where('car_model_id', $carModel->id)
            ->with('product')
//            ->skip($request->offset)
//            ->take($request->limit)
            ->get();



        $products = array_map(function ($item) {
            $manufacturer = $this->getManufacturer($item['product']['manufacturer_id']);

            $item['product']['manufacturer'] = $manufacturer->title;
            $item['product']['car_category_id'] = $item['car_category_id'];

            unset($item['product']['manufacturer_id']);

            return $item['product'];

        }, $productsObject->toArray());


//        sleep(5);

        return response($products, 200);
    }


    public function getProductItem($partSlug) {
        //В реквесте: partSlug - слаг запчасти

        $product = $this->getProductBySlug($partSlug);

        if (!$product){
            return response()->json(['message' => 'API: Product not found'], 404);
        }

        $manufacturer = $this->getManufacturer($product->manufacturer_id);

        $product->manufacturer = $manufacturer->title;
        unset($product->manufacturer_id);


//        sleep(5);

        return response($product, 200);
    }



    public function getProductBySlug($slug){
        return Product::where('slug', $slug)->first();
    }


    public function getManufacturer($manufacturerId){
        return Manufacturer::find($manufacturerId);
    }

}
