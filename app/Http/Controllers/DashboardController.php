<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Cookie;


class DashboardController extends Controller
{
    public function login()
    {

        if (Auth::attempt([
                'email' => request('userName'),
                'password' => request('password'),
                'isAdmin' => true
            ]) ||
            Auth::attempt([
                'name' => request('userName'),
                'password' => request('password'),
                'isAdmin' => true
            ])
        ) {
            return redirect()->route("dashboard");
        }

        return view("login", ['auth' => 'fail']);

    }

    public function logout()
    {

        Auth::logout();

        return redirect()->route("login");

    }


    public function getDashboard()
    {
        if (Auth::check()) {
            $user = Auth::user();

            Cookie::queue(
                'token', //name
                $user->createToken('MyApp')->accessToken, //value
                5, //minutes
                null, //path
                null, //domain
                false, //secure
                false //httpOnly
            );

            return view("dashboard");
        }

        return redirect()->route("login");
    }
}
