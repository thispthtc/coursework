<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $menu = Menu::all();

        return response()->json([
            $menu
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @throws ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        $data = $request->only('name', 'id_category', 'price', 'description', 'weight', 'src_img');

        $menu = Menu::create([
                'name' => $data['name'],
                'id_category' => $data['id_category'],
                'price' => $data['price'],
                'description' => $data['description'],
                'weight' => $data['weight'],
                'src_img' => Storage::disk('public')->put('/menu', $request->file('src_img'))
        ]);


        return response()->json($menu);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $category): Collection
    {
        return Menu::all()->where('id_category', $category);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $menuItem = Menu::find($id);
        $menuItem->update([
            'name' => $request->input('name'),
            'id_category' => $request->input('id_category'),
            'price' => $request->input('price'),
            'description' => $request->input('description'),
            'weight' => $request->input('weight'),
        ]);

        if ($request->hasFile('src_img')) {
            $menuItem->update(['src_img' => Storage::disk('public')->put('/menu', $request->file('src_img'))]);
        }

        return response()->json($menuItem);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        $menuItem = Menu::find($id);
        $menuItem->delete();

        return response()->json($menuItem);
    }
}
