<?php

namespace App\Controllers;

use App\Models\NodeModel;
use CodeIgniter\RESTful\ResourceController;

class Nodes extends ResourceController
{
    protected $modelName = NodeModel::class;

    public function index()
    {
        return $this->respond($this->model->findAll());
    }

}