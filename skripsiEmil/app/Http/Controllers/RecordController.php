<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Record;
use App\RecordChild;

class RecordController extends Controller
{
    public function store(Request $request)
    {
        $user = auth()->user();
        $record = $request->store_data["record"];
        foreach ($record as $input) {
            $Record = new Record();
            $Record->name_file = $input['document'];
            $Record->iteration = $input['iteration'];
            $Record->period = $request->period;
            $Record->years = $request->year;
            $Record->id_user = $user->id;
            $Record->save();
            foreach ($input['data'] as $data) {
                $precentage = str_replace('%', ' ', $data['precentage']);
                $RecordChild = new RecordChild();
                $RecordChild->id_record = $Record->id;
                $RecordChild->name_file = $data['compared'];
                $RecordChild->precentage = $precentage;
                $RecordChild->save();
            }
        }

        $Record = Record::with('data','user')->where('id_user',$user->id)->where('period', $request->period)->where('years', $request->year)->get();
        return response()->json([
            'success' => true,
            'record' => $Record
        ], Response::HTTP_OK);;
    }
    public function get_all(Request $request)
    {
        $user = auth()->user();
        if($user->role == 'user'){
                $Record = Record::with('data','user')->where('id_user',$user->id)->get();
        } else{
        $Record = Record::with('data','user')->get();
        }
                return $Record;
    }
}
