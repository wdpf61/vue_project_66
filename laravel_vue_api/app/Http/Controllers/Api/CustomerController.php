<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::all();
        return response()->json(compact("customers"), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        try {
            $customer = new Customer();
            $customer->name = $request->customer["name"];
            $customer->email = $request->customer["email"];
            $customer->phone = $request->customer["phone"];
            $customer->address = $request->customer["address"];
            $customer->save();
            return response()->json(["success" => "Customer saved succesfully"], 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 200);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $customer = Customer::find($id);
        return response()->json(["customer" => $customer], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $customer = Customer::find($id);
            $customer->name = $request->customer["name"];
            $customer->email = $request->customer["email"];
            $customer->phone = $request->customer["phone"];
            $customer->address = $request->customer["address"];
            $customer->save();
            return response()->json(["customer" => "Customer Updated Successfully"], 200);
        } catch (\Throwable $th) {
            return response()->json(["err" => $th->getMessage()], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $customer = Customer::find($id);
        $customer->delete();
        return response()->json(["success" => "Customer deleted succesfully"], 200);
    }
}
