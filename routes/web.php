<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('users', function () {
        return Inertia::render('users');
    })->name('users');
    Route::post('/set-locale', function (Request $request) {
        $locale = $request->input('locale');
        Session::put('locale', $locale);
        return back();
    })->name('set-locale');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
