<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Collection
    {
        return Order::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $order = Order::create([
           'full_name' => $request->input('fullname'),
           'number' => $request->input('phone'),
           'guest_count' => $request->input('count'),
           'date' => $request->input('date'),
           'description' => $request->input('description')
        ]);


        return response()->json($order);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        $order = Order::find($id);
        return response()->json($order);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $order = Order::find($id);

        $order->status = $request->status;
        $order->save();


        return response()->json($order);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
