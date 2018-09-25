<?php

use Illuminate\Database\Seeder;

class TransportersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transporters')->insert([
            [//1
                'title' => 'Новая почта',
            ],
            [//2
                'title' => 'Автолюкс',
            ],
        ]);
    }
}
