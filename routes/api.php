<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MenuCategoryController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Меню
Route::get('/menu', [MenuController::class, 'index']);
Route::get('/menu/{category}', [MenuController::class, 'show']);

// Катерогории меню
Route::get('/menu_category', [MenuCategoryController::class, 'index']);

// Заказы
Route::get('/order', [OrderController::class, 'index']);
Route::post('/order', [OrderController::class, 'store']);

// Пользователи
Route::get('/auth', [AuthController::class, 'index']);
Route::post('/auth', [AuthController::class, 'login']);
