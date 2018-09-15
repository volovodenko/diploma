<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            //Блок двигателя
            /***********************************************************************/
            [ //1
                'title' => 'Вал распределительный Авео 1.5 8V GMP (распредвал)',
                'slug' => 'val-raspredelitelniy-aveo-1-5-8v-gmp-raspredval-1.html',
                'description' => 'Вал распределительный Авео 1.5 8V GMP (распредвал)',
                'code' => '6168',
                'catalog_number' => '96376716',
                'factory_number' => '96838025',
                'image' => '0001.jpg',
                'manufacturer_id' => 1, //Корея
                'amount' => 0,
                'price' => 77509
            ],
            [ //2
                'title' => 'Ролик ГРМ INA натяжной',
                'slug' => 'rolik-grm-ina-natyazhnoy-2.html',
                'description' => 'Ролик ГРМ INA натяжной',
                'code' => '60771',
                'catalog_number' => '96350550',
                'factory_number' => '531021330',
                'image' => '0001.jpg',
                'manufacturer_id' => 2, //INA
                'amount' => 8,
                'price' => 77320
            ],
            [ //3
                'title' => 'Насос масляный MANDO',
                'slug' => 'nasos-maslyaniy-mando-3.html',
                'description' => 'Насос масляный MANDO',
                'code' => '95558',
                'catalog_number' => '96350159',
                'factory_number' => 'MOPD1001',
                'image' => '0001.jpg',
                'manufacturer_id' => 3, //MANDO
                'amount' => 50,
                'price' => 68637
            ],
            [ //4
                'title' => 'Подушка двигателя, правая, MANDO',
                'slug' => 'podushka-dvigatelya-pravaya-mando-4.html',
                'description' => 'Подушка двигателя, правая, MANDO',
                'code' => '93518',
                'catalog_number' => '96487154',
                'factory_number' => 'EG96535429',
                'image' => '0001.jpg',
                'manufacturer_id' => 3, //MANDO
                'amount' => 50,
                'price' => 75004
            ],
            [ //5
                'title' => 'Подушка двигателя, левая, MANDO',
                'slug' => 'podushka-dvigatelya-levaya-mando-5.html',
                'description' => 'Подушка двигателя, левая, MANDO',
                'code' => '93517',
                'catalog_number' => '',
                'factory_number' => 'EG96535495',
                'image' => '0001.jpg',
                'manufacturer_id' => 3, //MANDO
                'amount' => 0,
                'price' => 0
            ],
            //Детали кузова
            /***********************************************************************/
            [ //6
                'title' => 'Бампер задний',
                'slug' => 'bamper-zadniy-6.html',
                'description' => 'Бампер задний',
                'code' => '62974',
                'catalog_number' => '',
                'factory_number' => '96648646',
                'image' => '0001.jpg',
                'manufacturer_id' => 4, //Тайвань
                'amount' => 5,
                'price' => 85565
            ],
            [ //7
                'title' => 'Бампер передний',
                'slug' => 'bamper-peredniy-7.html',
                'description' => 'Бампер передний',
                'code' => '62972',
                'catalog_number' => '',
                'factory_number' => '96648503',
                'image' => '0001.jpg',
                'manufacturer_id' => 4, //Тайвань
                'amount' => 15,
                'price' => 85133
            ],
            [ //8
                'title' => 'Защита поддона Сатурн + крепеж',
                'slug' => 'zaschita-poddona-saturn-krepezh-8.html',
                'description' => 'Защита поддона Сатурн + крепеж',
                'code' => '88226',
                'catalog_number' => '',
                'factory_number' => '',
                'image' => '0001.jpg',
                'manufacturer_id' => 5, //Сатурн
                'amount' => 20,
                'price' => 63085
            ],
            [ //9
                'title' => 'Решетка радиатора, нижняя часть, Польша',
                'slug' => 'reshetka-radiatora-nizhnyaya-chast-polsha-9.html',
                'description' => 'Решетка радиатора, нижняя часть, Польша',
                'code' => '56520',
                'catalog_number' => '96648529',
                'factory_number' => '96600797',
                'image' => '0001.jpg',
                'manufacturer_id' => 6, //Польша
                'amount' => 0,
                'price' => 0
            ],
            [ //10
                'title' => 'Эмблема задняя, Шевроле, Польша',
                'slug' => 'emblema-zadnyaya-shevrole-polsha-10.html',
                'description' => 'Эмблема задняя, Шевроле, Польша',
                'code' => '93248',
                'catalog_number' => '',
                'factory_number' => '96648743',
                'image' => '0001.jpg',
                'manufacturer_id' => 6, //Польша
                'amount' => 30,
                'price' => 15825
            ],
            //Подвеска
            /***********************************************************************/
            [ //11
                'title' => 'Амортизатор, KYB, передний левый, газомасляный',
                'slug' => 'amortizator-kyb-peredniy-leviy-gazomaslyaniy-11.html',
                'description' => 'Амортизатор, KYB, передний левый, газомасляный',
                'code' => '55889',
                'catalog_number' => '96653233',
                'factory_number' => '333418',
                'image' => '0001.jpg',
                'manufacturer_id' => 7, //KYB
                'amount' => 30,
                'price' => 124708
            ],
            [ //12
                'title' => 'Амортизатор, KYB, передний правый, газомасляный',
                'slug' => 'amortizator-kyb-peredniy-praviy-gazomaslyaniy-12.html',
                'description' => 'Амортизатор, KYB, передний правый, газомасляный',
                'code' => '55890',
                'catalog_number' => '96653234',
                'factory_number' => '333417',
                'image' => '0001.jpg',
                'manufacturer_id' => 7, //KYB
                'amount' => 30,
                'price' => 124694
            ],
            [ //13
                'title' => 'Рычаг передней подвески Авео, правый, в сборе, CTR',
                'slug' => 'richag-peredney-podveski-aveo-praviy-v-sbore-ctr-13.html',
                'description' => 'Рычаг передней подвески Авео, правый, в сборе, CTR',
                'code' => '56895',
                'catalog_number' => '96815894',
                'factory_number' => 'CQKD-12R',
                'image' => '0001.jpg',
                'manufacturer_id' => 8, //CTR
                'amount' => 30,
                'price' => 83814
            ],
            [ //14
                'title' => 'Рычаг передней подвески Авео, левый, в сборе, CRB',
                'slug' => 'richag-peredney-podveski-aveo-leviy-v-sbore-crb-14.html',
                'description' => 'Рычаг передней подвески Авео, левый, в сборе, CRB',
                'code' => '54358',
                'catalog_number' => '96815893',
                'factory_number' => '13093021',
                'image' => '0001.jpg',
                'manufacturer_id' => 9, //CRB
                'amount' => 30,
                'price' => 69948
            ],
            [ //15
                'title' => 'Пружина передняя Авео, комплект 2 штуки',
                'slug' => 'pruzhina-perednyaya-aveo-komplekt-2-shtuki-15.html',
                'description' => 'Пружина передняя Авео, комплект 2 штуки',
                'code' => '97763',
                'catalog_number' => '96653237',
                'factory_number' => 'SS-CH0010F',
                'image' => '0001.jpg',
                'manufacturer_id' => 10, //AURORA
                'amount' => 30,
                'price' => 95802
            ],
            //Вентиляция и отопление
            /***********************************************************************/
            [ //16
                'title' => 'Радиатор кондиционера Авео, Т255, Лузар, с ресивером, после 2008г',
                'slug' => 'radiator-kondicionera-aveo-t255-luzar-s-resiverom-posle-2008g-16.html',
                'description' => 'Радиатор кондиционера Авео, Т255, Лузар, с ресивером, после 2008г',
                'code' => '92841',
                'catalog_number' => '',
                'factory_number' => 'LRAC 0581',
                'image' => '0001.jpg',
                'manufacturer_id' => 11, //ЛУЗАР
                'amount' => 4,
                'price' => 226462
            ],
            [ //17
                'title' => 'Радиатор кондиционера Авео, SHIN KUM, с ресивером',
                'slug' => 'radiator-kondicionera-aveo-shin-kum-resiverom-posle-17.html',
                'description' => 'Радиатор кондиционера Авео, SHIN KUM, с ресивером',
                'code' => '55941',
                'catalog_number' => '96834083',
                'factory_number' => '96469289',
                'image' => '0001.jpg',
                'manufacturer_id' => 1, //Корея
                'amount' => 2,
                'price' => 398456
            ],
            [ //18
                'title' => 'Ролик кондиционера Авео GATES',
                'slug' => 'rolik-kondicionera-aveo-gates-18.html',
                'description' => 'Ролик кондиционера Авео GATES',
                'code' => '59283',
                'catalog_number' => '',
                'factory_number' => 'P96966707/Т38376',
                'image' => '0001.jpg',
                'manufacturer_id' => 12, //Gates
                'amount' => 20,
                'price' => 56970
            ],
            [ //19
                'title' => 'Ролик кондиционера Авео малый HSC',
                'slug' => 'rolik-kondicionera-aveo-maliy-hsc-19.html',
                'description' => 'Ролик кондиционера Авео малый HSC',
                'code' => '63544',
                'catalog_number' => '96208428',
                'factory_number' => '34302',
                'image' => '0001.jpg',
                'manufacturer_id' => 13, //DAEJIN
                'amount' => 20,
                'price' => 16817
            ],
            [ //20
                'title' => 'Ролик кондиционера Авео малый АТ (без механизма)',
                'slug' => 'rolik-kondicionera-aveo-maliy-at-bez-mehanizma-20.html',
                'description' => 'Ролик кондиционера Авео малый АТ (без механизма)',
                'code' => '57560',
                'catalog_number' => '',
                'factory_number' => 'AT 9976-200B',
                'image' => '0001.jpg',
                'manufacturer_id' => 14, //AT
                'amount' => 20,
                'price' => 14068
            ],
            //Блок двигателя
            /***********************************************************************/
            [ //21
                'title' => 'Шкив коленвала Авео 1,5 PH',
                'slug' => 'shkiv-kolenvala-aveo-1-5-ph-21.html',
                'description' => 'Шкив коленвала Авео 1,5 PH',
                'code' => '61246',
                'catalog_number' => '',
                'factory_number' => '96336264',
                'image' => '0001.jpg',
                'manufacturer_id' => 1, //Корея
                'amount' => 20,
                'price' => 65802
            ],
            [ //22
                'title' => 'Насос водяной Авео 1.4/1.6 Лузар',
                'slug' => 'nasos-vodyanoy-aveo-1-4-1-6-luzar-22.html',
                'description' => 'Насос водяной Авео 1.4/1.6 Лузар',
                'code' => '92542',
                'catalog_number' => '96872702',
                'factory_number' => 'LWP 0550',
                'image' => '0001.jpg',
                'manufacturer_id' => 11, //ЛУЗАР
                'amount' => 20,
                'price' => 57960
            ],
            [ //23
                'title' => 'Набор ГРМ FSO',
                'slug' => 'nabor-grm-fso-23.html',
                'description' => 'Набор ГРМ FSO',
                'code' => '96253',
                'catalog_number' => '96183352',
                'factory_number' => 'К15419XS-FSO',
                'image' => '0001.jpg',
                'manufacturer_id' => 15, //FSO
                'amount' => 20,
                'price' => 52309
            ],
            [ //24
                'title' => 'Подушка двигателя Авео задняя, MANDO',
                'slug' => 'podushka-dvigatelya-aveo-zadnyaya-mando-24.html',
                'description' => 'Подушка двигателя Авео задняя, MANDO',
                'code' => '93516',
                'catalog_number' => '',
                'factory_number' => 'EG96535402',
                'image' => '0001.jpg',
                'manufacturer_id' => 3, //MANDO
                'amount' => 20,
                'price' => 51669
            ],
            [ //25
                'title' => 'Клапан Авео AMP, 8 клапанный выпуск, 4шт',
                'slug' => 'klapan-aveo-amp-8-klapanniy-vypusk-4sht-25.html',
                'description' => 'Клапан Авео AMP, 8 клапанный выпуск, 4шт',
                'code' => '54776',
                'catalog_number' => '',
                'factory_number' => 'PCHE006 N',
                'image' => '0001.jpg',
                'manufacturer_id' => 16, //AMP
                'amount' => 20,
                'price' => 51572
            ],
            //Детали салона
            /***********************************************************************/
            [ //26
                'title' => 'Коврик салонный Авео ворс антрацит комплект 4шт',
                'slug' => 'kovrik-salonniy-aveo-vors-antratsit-kmplekt-4sht-26.html',
                'description' => 'Коврик салонный Авео ворс антрацит комплект 4шт',
                'code' => '57838',
                'catalog_number' => '',
                'factory_number' => '5109130-00',
                'image' => '0001.jpg',
                'manufacturer_id' => 6, //Польша
                'amount' => 2,
                'price' => 35844
            ],
            [ //27
                'title' => 'Коврик салонный Авео ворс серый комплект 4шт',
                'slug' => 'kovrik-salonniy-aveo-vors-seriy-kmplekt-4sht-27.html',
                'description' => 'Коврик салонный Авео ворс серый комплект 4шт',
                'code' => '57839',
                'catalog_number' => '',
                'factory_number' => '5109130-00',
                'image' => '0001.jpg',
                'manufacturer_id' => 6, //Польша
                'amount' => 5,
                'price' => 35844
            ],
            [ //28
                'title' => 'Фильтр салона Авео WIX',
                'slug' => 'filtr-salona-aveo-wix-28.html',
                'description' => 'Фильтр салона Авео WIX',
                'code' => '89472',
                'catalog_number' => '',
                'factory_number' => 'WP9254',
                'image' => '0001.jpg',
                'manufacturer_id' => 17, //WIX
                'amount' => 50,
                'price' => 18808
            ],
            [ //29
                'title' => 'Фильтр салона (угольный) Авео БИГ',
                'slug' => 'filtr-salona-ugolniy-aveo-big-29.html',
                'description' => 'Фильтр салона (угольный) Авео БИГ',
                'code' => '64198',
                'catalog_number' => '',
                'factory_number' => 'GB-9912/С',
                'image' => '0001.jpg',
                'manufacturer_id' => 18, //БИГ
                'amount' => 50,
                'price' => 20546
            ],
            [ //30
                'title' => 'Фильтр салона (угольный) Авео SHIN KUM',
                'slug' => 'filtr-salona-ugolniy-aveo-shin-kum-30.html',
                'description' => 'Фильтр салона (угольный) Авео БИГ',
                'code' => '97745',
                'catalog_number' => '',
                'factory_number' => '96539649',
                'image' => '0001.jpg',
                'manufacturer_id' => 1, //Корея
                'amount' => 50,
                'price' => 8173
            ],
        ]);
    }
}
