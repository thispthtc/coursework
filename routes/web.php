<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware('admin')->group(function () {
    Route::get('/admin', function () {
        return view('index');
    });
});

Route::get('/', function () {
    return view('index');
});

Route::get('/order', function () {
    return view('index');
});

Route::get('/menu', function () {
    return view('index');
});

Route::get('/login', function () {
    return view('index');
});



//Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
