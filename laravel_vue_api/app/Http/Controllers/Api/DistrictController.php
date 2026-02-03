<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\District;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    public function index()
    {
        $districts = District::all();
        return response()->json(compact("districts"));
    }

    public function show($id)
    {
        $districts = District::where("division_id", $id)->get();
        return response()->json(compact("districts"));
    }
}
