<?php

use Illuminate\Database\Seeder;

class PaymentTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payment_types')->insert([
            [//1
                'type' => 'Безналичный расчет',
                'header' => 'Оплата заказа по безналичному расчету'
            ],
            [//2
                'type' => 'Наложенный платеж',
                'header' => 'Оплата заказа наложенным платежом'
            ],
            [//3
                'type' => 'Оплата в кассе магазина',
                'header' => 'Оплата заказа в кассе магазина'
            ],
        ]);
    }
}
