<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;
use App\CarModel;
use App\CarModelsCarCategories;

class CarController extends Controller
{

    public function getCars()
    {
        $cars = Car::all();

//        sleep(5);

        return response($cars, 200);
    }


    public function getCarModelsByCarSlug(Request $request)
    {
        //В реквесте - slug авто

        $car = Car::where('slug', $request->slug)
            ->with('carModels')
            ->first();

        if (!$car){
            return response()->json(['message' => 'API: Car not found'], 404);
        }

        $carModels = $car->toArray()['car_models'];

//        sleep(5);

        return response($carModels, 200);
    }


    public function getCarCategoriesByCarModelSlug(Request $request)
    {
        // в реквесте - slug модели авто

        $carModel = CarModel::where('slug', $request->slug)->first();

        if (!$carModel){
            return response()->json(['message' => 'API: Car model not found'], 404);
        }


        $carCategoriesObject = CarModelsCarCategories::with('carCategory')
            ->where('car_model_id', $carModel->id)
            ->get();

        $carCategories = array_map(function ($item) {
            $item['title'] = $item['car_category']['title'];
            $item['slug'] = $item['car_category']['slug'];
            unset($item['car_category']);

            return $item;
        }, $carCategoriesObject->toArray());


//        sleep(2);

        return response($carCategories, 200);
    }
}
