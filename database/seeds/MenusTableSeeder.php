<?php

use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menus')->insert([
            [
                'title' => 'О компании',
                'url' => 'about'
            ],
            [
                'title' => 'Оплата и доставка',
                'url' => 'payment'
            ],
            [
                'title' => 'Контакты',
                'url' => 'contacts'
            ],
            [
                'title' => 'Гарантия',
                'url' => 'warranty'
            ],
            [
                'title' => 'Статьи',
                'url' => 'articles'
            ]
        ]);
    }
}
