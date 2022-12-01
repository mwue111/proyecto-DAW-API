<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        $this->call(ProductsTableSeeder::class);
        $this->call(StoresTableSeeder::class);
        $this->call(TagsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(BrandsTableSeeder::class);
        $this->call(UnitsTableSeeder::class);
        $this->call(Special_daysTableSeeder::class);
        $this->call(Special_days_storesTableSeeder::class);
        $this->call(Categories_productsTableSeeder::class);
        // \App\Models\User::factory(10)->create();
        $this->call(UsersTableSeeder::class);
        $this->call(DocumentsTableSeeder::class);
        $this->call(AdministratorsTableSeeder::class);
        $this->call(OwnersTableSeeder::class);
        $this->call(ClientsTableSeeder::class);
        $this->call(StatesTableSeeder::class);
        $this->call(TownsTableSeeder::class);
        //Tablas de Dany:
        $this->call(FilesTableSeeder::class);
        $this->call(Stores_imgTableSeeder::class);
        $this->call(DocumentsTableSeeder::class);
        $this->call(Products_imgTableSeeder::class);
        $this->call(Profiles_imgTableSeeder::class);
        $this->call(Brands_imgTableSeeder::class);
        $this->call(AddressTableSeeder::class);
        $this->call(SchedulesTableSeeder::class);
        $this->call(TimeslotsTableSeeder::class);
        $this->call(Products_storesTableSeeder::class);
        $this->call(SalesTableSeeder::class);
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
