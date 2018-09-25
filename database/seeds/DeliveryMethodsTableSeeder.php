<?php

use Illuminate\Database\Seeder;

class DeliveryMethodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('delivery_methods')->insert([
            [//1
                'title' => 'Доставка перевозчиком',
            ],
            [//2
                'title' => 'Самовывоз (г.Киев, ул. М.Коцюбинского, 14)',
            ],
        ]);
    }
}
