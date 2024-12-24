<?php

namespace App\Models;

use App\Entities\Node;
use CodeIgniter\Model;

class NodeModel extends Model
{
    protected $table = 'nodes';
    protected $primaryKey = 'id';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'title',
        'image',
        'summary',
        'content',
        'published',
        'user_id'
    ];

    protected $returnType = Node::class;
    protected $useTimestamps = true;
}
