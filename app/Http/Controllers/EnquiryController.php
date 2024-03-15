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
   * Displays contact form
   */
  public function contact(): Response
  {
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
      'phone_number' => 'required|string|min:8|max:11',
      'organisation' => 'string|max:255',
      'location' => 'string|max:255',
      'country' => 'string|max:255',
      'message' => 'string|nullable',
    ]);

    $enquiry = Enquiry::create($validated);

    if (!$enquiry) {
      return redirect(route('contact'))->with(
        'message',
        'There was an error submitting your enquiry. Please try again later.'
      );
    }

    return redirect(route('contact'))->with(
      'message',
      'Thank you for your enquiry!'
    );
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
