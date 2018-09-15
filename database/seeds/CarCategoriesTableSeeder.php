<?php

use Illuminate\Database\Seeder;

class CarCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('car_categories')->insert([
            [ //1
                'title' => 'Двигатель',
                'slug' => 'dvigatel',
            ],
            [ //2
                'title' => 'Кузов',
                'slug' => 'kuzov',
            ],
            [ //3
                'title' => 'Механизмы управления',
                'slug' => 'mehanizmy-upravleniya',
            ],
            [ //4
                'title' => 'Трансмиссия',
                'slug' => 'transmissiya',
            ],
            [ //5
                'title' => 'Ходовая часть',
                'slug' => 'hodovaya-chast',

            ],
            [ //6
                'title' => 'Электрическое оборудование',
                'slug' => 'elektricheskoe-oborudovanie',
            ],
            /*********************************************************************/
            [ //7
                'title' => 'Блок двигателя',
                'slug' => 'blok-dvigatelya',
            ],
            [ //8
                'title' => 'Система выпуска',
                'slug' => 'sistema-vypuska',
            ],
            [ //9
                'title' => 'Система охлаждения',
                'slug' => 'sistema-ohlazhdenuya',
            ],
            [ //10
                'title' => 'Система питания',
                'slug' => 'sistema-pitaniya',
            ],
            /*********************************************************************/
            [ //11
                'title' => 'Тормозная система',
                'slug' => 'tormoznaya-sistema',
            ],
            [ //12
                'title' => 'Рулевое управление',
                'slug' => 'rulevoe-upravlenie',
            ],
            /*********************************************************************/
            [ //13
                'title' => 'Коробка передач',
                'slug' => 'korobka-peredach',
            ],
            [ //14
                'title' => 'Сцепление',
                'slug' => 'stseplenie',
            ],
            [ //15
                'title' => 'Мост задний',
                'slug' => 'most-zadniy',
            ],
            [ //16
                'title' => 'Передача карданная',
                'slug' => 'peredacha-kardannaya',
            ],
            /*********************************************************************/
            [ //17
                'title' => 'Колеса',
                'slug' => 'kolesa',
            ],
            [ //18
                'title' => 'Ось передняя',
                'slug' => 'os-perednaya',
            ],
            [ //19
                'title' => 'Подвеска',
                'slug' => 'podveska',
            ],
            /*********************************************************************/
            [ //20
                'title' => 'Приборы и датчики',
                'slug' => 'pribory-i-datchiki',
            ],
            /*********************************************************************/
            [ //21
                'title' => 'Салон',
                'slug' => 'salon',
            ],
            /*********************************************************************/
            [ //22
                'title' => 'Дверь задняя',
                'slug' => 'dver-zadnyaya',
            ],
            [ //23
                'title' => 'Дверь передняя',
                'slug' => 'dver-perdnyaya',
            ],
            [ //24
                'title' => 'Капот, крылья',
                'slug' => 'kapot-krylya',
            ],
            [ //25
                'title' => 'Детали кузова',
                'slug' => 'detali-kuzova',
            ],
            /*********************************************************************/
            [ //26
                'title' => 'Вентиляция и отопление',
                'slug' => 'ventilatsiya-i-otoplenie',
            ],
            [ //27
                'title' => 'Сиденья',
                'slug' => 'sidenya',
            ],
            [ //28
                'title' => 'Детали салона',
                'slug' => 'detali-salona',
            ],
            /*********************************************************************/
            [ //29
                'title' => 'Освещение',
                'slug' => 'osveschenie',
            ],
            /*********************************************************************/
        ]);

    }
}
