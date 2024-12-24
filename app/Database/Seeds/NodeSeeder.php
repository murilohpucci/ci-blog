<?php

namespace App\Database\Seeds;

use App\Models\NodeModel;
use CodeIgniter\Database\Seeder;

class NodeSeeder extends Seeder
{
    public function run()
    {
        $nodeModel = new NodeModel();

        // Create a new post
        $nodeModel->save([
            'title' => 'My First Post',
            'image' => 'image1.jpg',
            'summary' => 'This is the summary of my first post.',
            'content' => 'This is the content of my first post.',
            'published' => true,
            'user_id' => '1',
        ]);
    }
}
