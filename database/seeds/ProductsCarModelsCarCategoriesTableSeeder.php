<?php

use Illuminate\Database\Seeder;

class ProductsCarModelsCarCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products_car_models_car_categories')->insert([
            [ //1
                'product_id' => 1,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //2
                'product_id' => 2,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //3
                'product_id' => 2,
                'car_model_id' => 2, //Chevrolet Lacetti 1.6 SE
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //4
                'product_id' => 3,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //5
                'product_id' => 3,
                'car_model_id' => 7, //Daewoo Lanos
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //6
                'product_id' => 4,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //7
                'product_id' => 5,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //8
                'product_id' => 6,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 25 //Детали кузова
            ],
            [ //9
                'product_id' => 7,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 25 //Детали кузова
            ],
            [ //10
                'product_id' => 8,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 25 //Детали кузова
            ],
            [ //11
                'product_id' => 9,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 25 //Детали кузова
            ],
            [ //12
                'product_id' => 10,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 25 //Детали кузова
            ],
            [ //13
                'product_id' => 11,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 19 //Подвеска
            ],
            [ //14
                'product_id' => 12,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 19 //Подвеска
            ],
            [ //15
                'product_id' => 13,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 19 //Подвеска
            ],
            [ //16
                'product_id' => 14,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 19 //Подвеска
            ],
            [ //17
                'product_id' => 15,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 19 //Подвеска
            ],
            [ //18
                'product_id' => 16,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 26 //Вентиляция и отопление
            ],
            [ //19
                'product_id' => 17,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 26 //Вентиляция и отопление
            ],
            [ //20
                'product_id' => 18,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 26 //Вентиляция и отопление
            ],
            [ //21
                'product_id' => 19,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 26 //Вентиляция и отопление
            ],
            [ //22
                'product_id' => 20,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 26 //Вентиляция и отопление
            ],
            [ //23
                'product_id' => 21,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //24
                'product_id' => 22,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //25
                'product_id' => 23,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //26
                'product_id' => 24,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //27
                'product_id' => 25,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 7 //Блок двигателя
            ],
            [ //28
                'product_id' => 26,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 28, //Детали салона
            ],
            [ //29
                'product_id' => 27,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 28, //Детали салона
            ],
            [ //30
                'product_id' => 28,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 28, //Детали салона
            ],
            [ //31
                'product_id' => 29,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 28, //Детали салона
            ],
            [ //32
                'product_id' => 30,
                'car_model_id' => 1, //Chevrolet Aveo 1.4 16V LT
                'car_category_id' => 28, //Детали салона
            ],
        ]);
    }
}
