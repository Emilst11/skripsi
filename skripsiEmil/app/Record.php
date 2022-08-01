<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\RecordChild;
use App\User;

class Record extends Model
{
    protected $table = 'record';
    protected $fillable = ['name_file','iteration','period','years','id_user'];

    public function data()
    {
        return $this->hasMany(RecordChild::class, 'id_record', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
