<?php

use Illuminate\Database\Seeder;

class CarModelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('car_models')->insert([
            //Chevrolet
            [ //1
                'title' => 'Chevrolet Aveo 1.4 16V LT',
                'slug' => 'chevrolet-aveo-1-4-16v-lt',
                'car_id' => 1
            ],
            [ //2
                'title' => 'Chevrolet Lacetti 1.6 SE',
                'slug' => 'chevrolet-lacetti-1-6-se',
                'car_id' => 1
            ],
            [ //3
                'title' => 'Chevrolet Lacetti 1.8 CDX',
                'slug' => 'chevrolet-lacetti-1-8-cdx',
                'car_id' => 1
            ],
            [ //4
                'title' => 'Chevrolet Lanos',
                'slug' => 'chevrolet-lanos',
                'car_id' => 1
            ],
            [ //5
                'title' => 'Chevrolet Niva 1.7',
                'slug' => 'chevrolet-niva-1-7',
                'car_id' => 1
            ],

            /*********************************************************************/

            //Daewoo
            [ //6
                'title' => 'Daewoo Espero',
                'slug' => 'daewoo-espero',
                'car_id' => 2
            ],
            [ //7
                'title' => 'Daewoo Lanos',
                'slug' => 'daewoo-lanos',
                'car_id' => 2
            ],
            [ //8
                'title' => 'Daewoo Lanos SE',
                'slug' => 'daewoo-lanos-se',
                'car_id' => 2
            ],
            [ //9
                'title' => 'Daewoo Lanos SE 1.5',
                'slug' => 'daewoo-lanos-se-1-5',
                'car_id' => 2
            ],
            [ //10
                'title' => 'Daewoo Lanos SX',
                'slug' => 'daewoo-lanos-sx',
                'car_id' => 2
            ],
            [ //11
                'title' => 'Daewoo Matiz',
                'slug' => 'daewoo-matiz',
                'car_id' => 2
            ],
            [ //12
                'title' => 'Daewoo Matiz II',
                'slug' => 'daewoo-matiz-ii',
                'car_id' => 2
            ],
            [ //13
                'title' => 'Daewoo Nexia',
                'slug' => 'daewoo-nexia',
                'car_id' => 2
            ],
            [ //14
                'title' => 'Daewoo Tico',
                'slug' => 'daewoo-tico',
                'car_id' => 2
            ],

            /*********************************************************************/

            //Renault
            [ //15
                'title' => 'Renault Logan 1.4',
                'slug' => 'renault-logan-1-4',
                'car_id' => 3
            ],
            [ //16
                'title' => 'Renault Logan 1.6 Laureate',
                'slug' => 'renault-logan-1-6-laureate',
                'car_id' => 3
            ],

            /*********************************************************************/

            //АЗЛК
            [ //17
                'title' => 'Москвич 412',
                'slug' => 'moskvich-412',
                'car_id' => 4
            ],
            [ //18
                'title' => 'Москвич 2137',
                'slug' => 'moskvich-2137',
                'car_id' => 4
            ],
            [ //19
                'title' => 'Москвич 2140',
                'slug' => 'moskvich-2140',
                'car_id' => 4
            ],
            [ //20
                'title' => 'Москвич 2141',
                'slug' => 'moskvich-2141',
                'car_id' => 4
            ],
            [ //21
                'title' => 'Москвич 2335',
                'slug' => 'moskvich-2335',
                'car_id' => 4
            ],
            [ //22
                'title' => 'Москвич 2734',
                'slug' => 'moskvich-2734',
                'car_id' => 4
            ],
            [ //23
                'title' => 'Москвич 400-420',
                'slug' => 'moskvich-400-420',
                'car_id' => 4
            ],
            [ //24
                'title' => 'Москвич 407',
                'slug' => 'moskvich-407',
                'car_id' => 4
            ],

            /*********************************************************************/

            //ВАЗ
            [ //25
                'title' => 'Lada 1117, 1118, 1119',
                'slug' => 'lada-1117-1118-1119',
                'car_id' => 5
            ],
            [ //26
                'title' => 'Lada Granta 2190',
                'slug' => 'lada-granta-2190',
                'car_id' => 5
            ],
            [ //27
                'title' => 'ВАЗ 1111 "ОКА"',
                'slug' => 'vaz-1111-oka',
                'car_id' => 5
            ],
            [ //28
                'title' => 'ВАЗ 1118 "Калина"',
                'slug' => 'vaz-1118-kalina',
                'car_id' => 5
            ],
            [ //29
                'title' => 'ВАЗ 2101 "Классика"',
                'slug' => 'vaz-2101-klassika',
                'car_id' => 5
            ],
            [ //30
                'title' => 'ВАЗ 2102',
                'slug' => 'vaz-2102',
                'car_id' => 5
            ],
            [ //31
                'title' => 'ВАЗ 2103',
                'slug' => 'vaz-2103',
                'car_id' => 5
            ],
            [ //32
                'title' => 'ВАЗ 2104',
                'slug' => 'vaz-2104',
                'car_id' => 5
            ],
            [ //33
                'title' => 'ВАЗ 2105',
                'slug' => 'vaz-2105',
                'car_id' => 5
            ],
            [ //34
                'title' => 'ВАЗ 2105 (2002)',
                'slug' => 'vaz-2105-2002',
                'car_id' => 5
            ],
            [ //35
                'title' => 'ВАЗ 2106',
                'slug' => 'vaz-2106',
                'car_id' => 5
            ],
            [ //36
                'title' => 'ВАЗ 2106 (2002)',
                'slug' => 'vaz-2106-2002',
                'car_id' => 5
            ],
            [ //37
                'title' => 'ВАЗ 2107',
                'slug' => 'vaz-2107',
                'car_id' => 5
            ],
            [ //38
                'title' => 'ВАЗ 2108',
                'slug' => 'vaz-2108',
                'car_id' => 5
            ],
            [ //39
                'title' => 'ВАЗ 2109',
                'slug' => 'vaz-2109',
                'car_id' => 5
            ],
            [ //40
                'title' => 'ВАЗ 21099',
                'slug' => 'vaz-21099',
                'car_id' => 5
            ],
            [ //41
                'title' => 'ВАЗ 2110 "Десятка"',
                'slug' => 'vaz-2110-desyatka',
                'car_id' => 5
            ],
            [ //42
                'title' => 'ВАЗ 2110 (2007)',
                'slug' => 'vaz-2110-2007',
                'car_id' => 5
            ],
            [ //43
                'title' => 'ВАЗ 2111',
                'slug' => 'vaz-2111',
                'car_id' => 5
            ],
            [ //44
                'title' => 'ВАЗ 2112',
                'slug' => 'vaz-2112',
                'car_id' => 5
            ],
            [ //45
                'title' => 'ВАЗ 2113',
                'slug' => 'vaz-2113',
                'car_id' => 5
            ],
            [ //46
                'title' => 'ВАЗ 2114',
                'slug' => 'vaz-2114',
                'car_id' => 5
            ],
            [ //47
                'title' => 'ВАЗ 2115',
                'slug' => 'vaz-2115',
                'car_id' => 5
            ],
            [ //48
                'title' => 'ВАЗ 2120 "Надежда"',
                'slug' => 'vaz-2120-nadezhda',
                'car_id' => 5
            ],
            [ //49
                'title' => 'ВАЗ 2121 "Нива"',
                'slug' => 'vaz-2121-niva',
                'car_id' => 5
            ],
            [ //50
                'title' => 'ВАЗ 21213 "Тайга"',
                'slug' => 'vaz-21213-tayga',
                'car_id' => 5
            ],
            [ //51
                'title' => 'ВАЗ 21213-214i',
                'slug' => 'vaz-21213-214i',
                'car_id' => 5
            ],
            [ //52
                'title' => 'ВАЗ 2123 "Шевроле"',
                'slug' => 'vaz-2123-shevrole',
                'car_id' => 5
            ],
            [ //53
                'title' => 'ВАЗ 2131',
                'slug' => 'vaz-2131',
                'car_id' => 5
            ],
            [ //54
                'title' => 'ВАЗ 2170 "Приора"',
                'slug' => 'vaz-2170-priora',
                'car_id' => 5
            ],

            /*********************************************************************/

            //ГАЗ
            [ //55
                'title' => 'ГАЗ 21',
                'slug' => 'gaz-21',
                'car_id' => 6
            ],
            [ //56
                'title' => 'ГАЗ 24',
                'slug' => 'gaz-24',
                'car_id' => 6
            ],
            [ //57
                'title' => 'ГАЗ 24-10 "Волга"',
                'slug' => 'gaz-24-10-volga',
                'car_id' => 6
            ],
            [ //58
                'title' => 'ГАЗ 31029',
                'slug' => 'gaz-31029',
                'car_id' => 6
            ],

            /*********************************************************************/

            //ЗАЗ
            [ //59
                'title' => 'ZAZ Sens',
                'slug' => 'zaz-sens',
                'car_id' => 7
            ],
            [ //60
                'title' => 'ЗАЗ 1102 "Таврия"',
                'slug' => 'zaz-1102-tavria',
                'car_id' => 7
            ],
            [ //61
                'title' => 'ЗАЗ 1102 "Таврия Нова"',
                'slug' => 'zaz-1102-tavria-nova',
                'car_id' => 7
            ],
            [ //62
                'title' => 'ЗАЗ 1103 "Славута"',
                'slug' => 'zaz-1103-slavuta',
                'car_id' => 7
            ],
            [ //63
                'title' => 'ЗАЗ 1105 "Дана"',
                'slug' => 'zaz-1105-dana',
                'car_id' => 7
            ],

            /*********************************************************************/

            //ЗИЛ
            [ //64
                'title' => 'ЗИЛ 131',
                'slug' => 'zil-131',
                'car_id' => 8
            ],
            [ //65
                'title' => 'ЗИЛ 133ГЯ',
                'slug' => 'zil-133gya',
                'car_id' => 8
            ],

            /*********************************************************************/

            //ИЖ
            [ //66
                'title' => 'ИЖ 2126',
                'slug' => 'izh-2126',
                'car_id' => 9
            ],
            [ //67
                'title' => 'ИЖ 412',
                'slug' => 'izh-412',
                'car_id' => 9
            ],

            /*********************************************************************/

            //КАМАЗ
            [ //68
                'title' => 'КамАЗ 4308',
                'slug' => 'kamaz-4308',
                'car_id' => 10
            ],
            [ //69
                'title' => 'КамАЗ 4310',
                'slug' => 'kamaz-4310',
                'car_id' => 10
            ],

            /*********************************************************************/

            //КрАЗ
            [ //70
                'title' => 'КрАЗ 255',
                'slug' => 'kraz-255',
                'car_id' => 11
            ],
            [ //71
                'title' => 'КрАЗ 256',
                'slug' => 'kraz-256',
                'car_id' => 11
            ],

            /*********************************************************************/

            //МАЗ
            [ //72
                'title' => 'МАЗ 437040',
                'slug' => 'maz-437040',
                'car_id' => 12
            ],
            [ //73
                'title' => 'МАЗ 500A',
                'slug' => 'maz-500A',
                'car_id' => 12
            ],

            /*********************************************************************/

            //УАЗ
            [ //74
                'title' => 'UAZ Patriot',
                'slug' => 'uaz-patriot',
                'car_id' => 13
            ],
            [ //75
                'title' => 'УАЗ 3151',
                'slug' => 'uaz-3151',
                'car_id' => 13
            ],
        ]);
    }
}
