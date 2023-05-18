<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Menu extends Model
{
    use HasFactory;

    public function category(): HasOne
    {
        return $this->hasOne(MenuCategory::class);
    }
}
