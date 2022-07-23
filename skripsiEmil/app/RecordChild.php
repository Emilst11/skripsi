<?php

namespace App;

use App\Record;
use Illuminate\Database\Eloquent\Model;

class RecordChild extends Model
{
    protected $table = 'record_child';
    protected $fillable = ['id_record','name_file','precentage'];

    public function user()
    {
        return $this->belongsTo(Record::class, 'id_record', 'id');
    }
}
