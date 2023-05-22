<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $array)
 */
class Order extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'full_name',
        'number',
        'guest_count',
        'date',
        'description'
    ];
}
