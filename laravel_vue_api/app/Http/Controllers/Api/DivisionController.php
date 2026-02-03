<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Division;
use Illuminate\Http\Request;

class DivisionController extends Controller
{
      public function index()
    {
        $divisions = Division::all();
        return response()->json(compact("divisions"));
    }
}
