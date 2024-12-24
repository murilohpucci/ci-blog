<?php

use App\Controllers\Auth\LoginController;
use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

service('auth')->routes($routes, ['except' => ['login']]);
$routes->get('login', [LoginController::class, 'loginView']);
$routes->post('login', [LoginController::class, 'loginAction']);


$routes->resource('api/node', [
    'controller' => 'nodes',
]);
$routes->presenter('admin/node');
