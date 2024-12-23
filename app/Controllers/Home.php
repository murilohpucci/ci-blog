<?php

namespace App\Controllers;


class Home extends BaseController
{
    public function index()
    {
        return $this->twig->display('home', [
            'title' => 'Loot de Jogos'
        ]);
    }
}
