<?php

use Illuminate\Database\Seeder;

class CarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cars')->insert([
            [ //1
                'title' => 'Chevrolet',
                'slug' => 'chevrolet'
            ],
            [ //2
                'title' => 'Daewoo',
                'slug' => 'daewoo'
            ],
            [ //3
                'title' => 'Renault',
                'slug' => 'renault'
            ],
            [ //4
                'title' => 'АЗЛК',
                'slug' => 'azlk'
            ],
            [ //5
                'title' => 'ВАЗ',
                'slug' => 'vaz'
            ],
            [ //6
                'title' => 'ГАЗ',
                'slug' => 'gaz'
            ],
            [ //7
                'title' => 'ЗАЗ',
                'slug' => 'zaz'
            ],
            [ //8
                'title' => 'ЗИЛ',
                'slug' => 'zil'
            ],
            [ //9
                'title' => 'ИЖ',
                'slug' => 'izh'
            ],
            [ //10
                'title' => 'КамАЗ',
                'slug' => 'kamaz'
            ],
            [ //11
                'title' => 'КрАЗ',
                'slug' => 'kraz'
            ],
            [ //12
                'title' => 'МАЗ',
                'slug' => 'maz'
            ],
            [ //13
                'title' => 'УАЗ',
                'slug' => 'uaz'
            ],
        ]);
    }
}
