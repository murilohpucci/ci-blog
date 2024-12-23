<?php

namespace ThirdParty;

use Config\Paths;
use Kenjis\CI4Twig\Twig;

/**
 * Defines the twig view object.
 */
trait TwigViewTrait
{

    /**
     * Build the twig object.
     *
     * @return void
     */
    public function twig(): void
    {
        if (isset($this->twig)) {
            return;
        }

        $paths = new Paths();
        $config = [
            'paths' => [
                $paths->viewDirectory . '/layout',
                $paths->viewDirectory . '/pages',
                $paths->viewDirectory . '/components',
            ],
            'auto_reload' => ENVIRONMENT !== 'production'
        ];
        $this->twig = new Twig($config);
    }
}