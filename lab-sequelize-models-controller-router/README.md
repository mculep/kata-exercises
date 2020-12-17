
# CRUD Kata

This repo also incomplete: it has a router, controller, and templates for a Snacks model, but the developer never generated the model.

Each snack looks like this (as a JavaScript object):

```js
{
    title: "Popcorn",
    category: "Movie food",
    healthiness: 6
}
```


Your task will be to fill in the "M" in "MVC":

- Create an database instance in your Elephant SQL account
- Use the `dist.env` file as a reference for creating the `.env` file
  - Enter your credentials in the `.env` file
- Generate a model with the following attributes:
  - title (`string`) 
  - category (`string`)
  - healthiness (`integer`)
- Run the migration

Run the app and confirm that you can view a list of the snacks and add new snacks.


# CRUD Kata, part 2

You now need to add another Model to your application. This model will hold movie information like this:

```js
{
    title: 'The Big Lebowski',
    genre: 'Documentary',
    year: 1998,
    rating: 10
}
```

This kata is split into two parts:

1. templates/controllers/routers
2. database model and form

Use the existing "snacks" controller, router, and templates as a guide

## templates/controllers/routers

The goal is to create a set of placeholder templates that are viewable at `/movies`

- Create placeholder template files `templates/movies/list.html` and `templates/movies/form.html`
  - Each should simply show an `<h1>` telling the user what page they are on.
- Create the controller file `controllers/movies.js`
  - Define three route handling functions: `list()`, `showForm()`, and `processForm()`
  - The `list()` function should render the `list.html` template.
  - The `showForm()` function should render the `form.html` template.
  - `processForm()` can be empty for now.
  - Export the three functions
- Update `controllers/index.js` to import/export your movie controller
- Create the router file `routers/movies.js`
  - Create a `router` object using the `express.Router()` function
  - Import your Movie controller 
  - Your router should associate the following route paths with the corresponding controller functions:
    - GET `/` : `movieController.list`
    - GET `/new` : `movieController.showForm`
    - POST `/new`: `movieController.processForm`
  - Export the router
- Update `routers/index.js` to import/export your movie router
- Import your new router in the `index.js`
  - `app.use()` the router, setting the prefix to `'/movies'`

Before moving on, confirm that visiting `/movies` and `/movies/new` shows the placeholder text from the templates.

## model and form

- Generate a model for `/movies`. Each movie should have the following attributes:
  - title (`string`)
  - genre (`string`)
  - year (`integer`)
  - rating (`integer`)
- Run the migration
- Update your Movie controller
  - Import the Sequelize model
  - Make `list()` and `processForm()` into `async` functions
  - `list()` should `await` `Movie` model's `.findAll()` method and provide the data to `res.render()` 
  - `processForm()` should `await` `Movie.create()`
    - Make sure to `parseInt()` the year. (The form sends it as a string.)
    - `res.redirect()` the user back to the list page

Confirm that you can add new movies and that they appear in the list of movies.
If you have Beekeeper Studio, double check the data in the Movies table.
