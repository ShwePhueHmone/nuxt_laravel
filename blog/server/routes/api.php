<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * Category Routes
 */
Route::get('/category', [CategoryController::class, 'index']);
Route::post('/category/create', [CategoryController::class, 'store']);
Route::get('/category/show/{id}', [CategoryController::class, 'show']);
Route::put('/category/update/{category}', [CategoryController::class, 'update']);
Route::delete('/category/{category}', [CategoryController::class, 'destroy']);

/**
 * Posts Routes
 */
Route::get('/posts', [PostController::class, 'index']);
Route::post('/posts/create', [PostController::class, 'store']);
Route::get('/posts/show/{id}', [PostController::class, 'show']);
Route::post('posts/edit/{id}', [PostController::class, 'update']);
Route::delete('/posts/{post}', [PostController::class, 'destroy']);