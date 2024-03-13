<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EnquiryController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(): Response
  {
    // return response('Mamba Enquiries!');
    return Inertia::render('Enquiries/Index', [
      //
    ]);

    // @todo need to add the route for the contact page here
  }

  /**
   * Displays contact form
   */
  public function contact(): Response
  {
    // return response('Mamba Enquiries!');
    return Inertia::render('Contact/Index', [
      //
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request): RedirectResponse
  {
    //
    $validated = $request->validate([
      'first_name' => 'required|string|max:255',
      'last_name' => 'required|string|max:255',
      'email' => 'required|string|max:255',
      'phone' => 'required|string|min:8|max:11',
      'organisation' => 'string|max:255',
      'location' => 'string|max:255',
      'message' => 'text|max:255',
    ]);

    $request->enquiry()->create($validated);

    return redirect(route('contact'));
  }

  /**
   * Display the specified resource.
   */
  public function show(Enquiry $enquiry)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Enquiry $enquiry)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Enquiry $enquiry)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Enquiry $enquiry)
  {
    //
  }
}
