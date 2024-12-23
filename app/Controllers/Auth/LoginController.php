<?php

namespace App\Controllers\Auth;

use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\Shield\Controllers\LoginController as LoginBase;

/**
 * Decorate the login controller class from shield to integrate the twig templates.
 */
class LoginController extends LoginBase
{

    /**
     * {@inheritDoc}
     */
    public function loginView()
    {
        $login = parent::loginView();

        // Some action was performed in this case we return the parent result.
        if ($login instanceof RedirectResponse) {
            return $login;
        }

        return $this->twig->display('auth/login');
    }

}