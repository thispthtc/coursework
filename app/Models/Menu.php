<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'name', 'id_category', 'price', 'description', 'weight', 'src_img'];
    public function category(): BelongsTo
    {
        return $this->belongsTo(MenuCategory::class, 'id_category');
    }
}
