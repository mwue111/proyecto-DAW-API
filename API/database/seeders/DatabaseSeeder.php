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
        //$this->call(CategoriesTableSeeder::class);    comentado porque hay que arreglarlo
        // \App\Models\User::factory(10)->create();
        $this->call(UsersTableSeeder::class);
        $this->call(DocumentsTableSeeder::class);
        $this->call(AdministratorsTableSeeder::class);
        $this->call(OwnersTableSeeder::class);
        $this->call(ClientsTableSeeder::class);
        $this->call(StatesTableSeeder::class);
        $this->call(TownsTableSeeder::class);
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
