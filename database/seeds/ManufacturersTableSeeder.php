<?php

use Illuminate\Database\Seeder;

class ManufacturersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('manufacturers')->insert([
            [ //1
                'title' => 'Корея',
            ],
            [ //2
                'title' => 'INA',
            ],
            [ //3
                'title' => 'MANDO',
            ],
            [ //4
                'title' => 'Тайвань',
            ],
            [ //5
                'title' => 'Сатурн',
            ],
            [ //6
                'title' => 'Польша',
            ],
            [ //7
                'title' => 'KYB',
            ],
            [ //8
                'title' => 'CTR',
            ],
            [ //9
                'title' => 'CRB',
            ],
            [ //10
                'title' => 'AURORA',
            ],
            [ //11
                'title' => 'ЛУЗАР',
            ],
            [ //12
                'title' => 'Gates',
            ],
            [ //13
                'title' => 'DAEJIN',
            ],
            [ //14
                'title' => 'AT',
            ],
            [ //15
                'title' => 'FSO',
            ],
            [ //16
                'title' => 'AMP',
            ],
            [ //17
                'title' => 'WIX',
            ],
            [ //18
                'title' => 'БИГ',
            ],
        ]);
    }
}
