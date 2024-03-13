# Mamba search

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Laravel](https://laravel.com/)
- [Laravel Jetstream](https://jetstream.laravel.com/) converted to React.js using [Laravel Jetstream React CLI](https://github.com/ozziexsh/laravel-jetstream-react)
- [InertiaJs](https://inertiajs.com/)
- [Laravel Telescope](https://laravel.com/docs/10.x/telescope)
- [Laravel Horizon](https://laravel.com/docs/10.x/horizon)
- [Laravel Nova](https://nova.laravel.com/)

## Getting started

Use the "Use this template" button on the top right of the Repos GitHub to start a new project.
Clone this new repo, CD to the project and run the following commands to setup
``` bash
# create a .env file from the example and update the local url an DB details for your system
cp .env.example .env

# create an auth.json file in the root of your project with the Nova licence
touch auth.json

# install composer deps
composer install

# generate the app encryption key. This saves to your .env file
php artisan key:generate

# this creates a symlink between the apps /storage/public folder and the /public directory to expose public files
php artisan storage:link

# creates database tables 
php artisan migrate

npm install

# build frontend assets
npm run build
```

## Development

During development, you can automatically watch for frontend file changes and build these assets using:
`npm run dev`

To run tests, you can use the following:
`php artisan test`

To view the telescope debugging dashboard, visit `https://app-url.test/telescope`.
To show the debug bar when developing locally, make sure that `TELESCOPE_TOOLBAR_ENABLED=true` is set in your `.env` file.
You can find more info on the Laravel telescope [here](https://laravel.com/docs/10.x/telescope).

## Merging changes from the template 

Add upstream repo repository
`git remote add template git@github.com:chrisvasey/kindred-app-template.git`
Use `git fetch` and cherry pick changes from the template branch.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.
