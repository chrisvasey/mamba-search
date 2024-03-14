<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;

class Enquiry extends Resource
{
  /**
   * The model the resource corresponds to.
   *
   * @var class-string<\App\Models\Enquiry>
   */
  public static $model = \App\Models\Enquiry::class;

  /**
   * The single value that should be used to represent the resource when being displayed.
   *
   * @var string
   */
  public static $title = 'id';

  /**
   * The columns that should be searched.
   *
   * @var array
   */
  public static $search = ['id'];

  /**
   * Get the fields displayed by the resource.
   *
   * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
   * @return array
   */
  public function fields(NovaRequest $request)
  {
    return [
      ID::make()->sortable(),

      Text::make('First Name')
        ->sortable()
        ->rules('required', 'first_name', 'max:255'),

      Text::make('Last Name')
        ->sortable()
        ->rules('required', 'last_name', 'max:255'),

      Email::make('Email')->rules('required', 'email', 'max:254'),

      Text::make('Organisation')
        ->sortable()
        ->rules('required', 'organisation', 'max:255'),

      Text::make('Country')
        ->sortable()
        ->rules('required', 'country', 'max:255'),

      Text::make('Location')
        ->sortable()
        ->rules('required', 'location', 'max:255'),

      Text::make('Phone Number')->rules('required', 'phone_number', 'max:255'),

      Textarea::make('Message')
        ->rules('message')
        ->hideFromIndex(),
    ];
  }

  /**
   * Get the cards available for the request.
   *
   * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
   * @return array
   */
  public function cards(NovaRequest $request)
  {
    return [];
  }

  /**
   * Get the filters available for the resource.
   *
   * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
   * @return array
   */
  public function filters(NovaRequest $request)
  {
    return [];
  }

  /**
   * Get the lenses available for the resource.
   *
   * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
   * @return array
   */
  public function lenses(NovaRequest $request)
  {
    return [];
  }

  /**
   * Get the actions available for the resource.
   *
   * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
   * @return array
   */
  public function actions(NovaRequest $request)
  {
    return [];
  }
}
