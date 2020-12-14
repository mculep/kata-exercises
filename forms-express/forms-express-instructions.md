# Express kata: from hello-world to HTML forms

If pairing:

-   One developer creates the repo, adds the second developer as a collaborator.
-   Let a developer be the "driver" (who does the coding), while the other developer "navigates" (advises on how to do the next step).
-   When it's time to switch: the driver pushes their commits, the navigator pulls

## Steps

-   Set up express app

-   Add a home route that shows hello world text

-   Install and configure templating engine

-   Create a home template

-   Pass a local to the home template (i.e., a String to display in an `<h1>`)

-   Create an array of objects (global variable) in your `index.js`

-   Add an `/items` route that sends the whole array using `res.json()`

-   Add a template for `/items`

-   In the template, .map() the array in the template, showing 1 property in a `<li>`

-   Modify the .map(), showing a 2nd property

-   Add a route with a param for details (corresponding to one of the obj properties, like an id)

-   `res.send()` back the route param (so that when you go to `/items/:id`, you see the id)

-   Use res.json() to send the obj from the array, specified by the param

-   Update the list template (that appears on `/list`) so that each `<li>` has `<a>` that goes to details route

-   Add a template for the details page

-   Show the obj props in the template for the details page

-   Add `app.use(express.urlencoded{extended: true})` so express can decode form submissions

-   Add a pair of routes (.get and .post) for the same path: `/create`

-   Create a template for the `/create` form, with a form element that starts with `<form method="post">`

-   `res.render()` the create form at the `app.get()` route

-   In `app.post()` route, use values from `req.body` to `.push()` the new value to global array

-   `res.send()` the text "thank you" from the `.post()` route

-   Add a `/thank-you` route

-   Add a `/thank-you` template

-   `res.redirect()` to /thank-you from the .post route
