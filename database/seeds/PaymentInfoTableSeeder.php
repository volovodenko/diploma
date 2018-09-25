<?php

use Illuminate\Database\Seeder;

class PaymentInfoTableSeeder extends Seeder
{


    private $info = 'Наложенным платежом заказы отправляются только перевозчиком "Новая Почта". '
    . 'Стоимость доставки товара оплачивает получатель. '
    . 'С тарифами можно ознакомиться на сайте Новой Почты. '
    . 'Также покупатель оплачивает стоимость обратной доставки денег (наложенного платежа)! '
    . 'Тариф составляет 20 грн + 2% от суммы платежа.';


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payment_info')->insert([
            [
                'payment_types_id' => 1,
                'info' => 'Оплата осуществляется через ПРИВАТ24, терминал, кассу банка.'
            ],
            [
                'payment_types_id' => 2,
                'info' => 'Доставка оплачивается отдельно, при получении!'
            ],
            [
                'payment_types_id' => 2,
                'info' => $this->info
            ],
            [
                'payment_types_id' => 3,
                'info' => 'Оплата и получение заказа в нашем магазине, по адресу г.Киев, ул. М.Коцюбинского, 14.'
            ],
        ]);
    }
}
