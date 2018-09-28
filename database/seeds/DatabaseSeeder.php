<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(MenusTableSeeder::class);
        $this->call(CarsTableSeeder::class);
        $this->call(CarModelsTableSeeder::class);
        $this->call(CarCategoriesTableSeeder::class);
        $this->call(CarModelsCarCategoriesTableSeeder::class);

        $this->call(ManufacturersTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(ProductsCarModelsCarCategoriesTableSeeder::class);

        $this->call(PaymentTypesTableSeeder::class);
        $this->call(PaymentInfoTableSeeder::class);
        $this->call(DeliveryMethodsTableSeeder::class);
        $this->call(TransportersTableSeeder::class);

        $this->call(PageContentSeeder::class);




    }
}
