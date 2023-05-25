<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index(): Collection
    {
        return User::all();
    }

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->only('name', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            return response()->json([
               'status' => 'success',
               'data' => $user
            ]);
        }

        return response()->json([
           'status' => 'error',
           'message' => Auth::attempt($credentials)
        ], 401);
     }
}
