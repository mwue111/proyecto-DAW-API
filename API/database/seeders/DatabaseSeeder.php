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
        $this->call(Special_daysTableSeeder::class);
        $this->call(Special_days_storesTableSeeder::class);
        // \App\Models\User::factory(10)->create();
        $this->call(UsersTableSeeder::class);
        $this->call(FilesTableSeeder::class);
        $this->call(DocumentsTableSeeder::class);
        $this->call(AdministratorsTableSeeder::class);
        $this->call(OwnersTableSeeder::class);
        $this->call(ClientsTableSeeder::class);
        $this->call(StatesTableSeeder::class);
        $this->call(TownsTableSeeder::class);
        //Tablas de Dany:
        //$this->call(Products_imgTableSeeder::class);
        $this->call(Profile_imgsTableSeeder::class);
        $this->call(Store_imgsTableSeeder::class);
        $this->call(Brand_imgsTableSeeder::class);
        $this->call(AddressesTableSeeder::class);
        $this->call(SchedulesTableSeeder::class);
        $this->call(TimeslotsTableSeeder::class);
        $this->call(Products_storesTableSeeder::class);
        $this->call(Products_tagsTableSeeder::class);
        $this->call(SalesTableSeeder::class);
        //Seeder añadido para poder hacer el CRUD:
        $this->call(Schedules_storesTableSeeder::class);
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
