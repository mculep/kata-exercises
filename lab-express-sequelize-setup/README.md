# Setup Kata

This project has all of the code files, but is missing its `package.json` and cannot connect to a database.

Fork this repo to your GitHub account.

Clone your fork and then `cd` into the project directory.

Once inside the project directory, initialize it as a node project:

```sh
npm init -y
```

You should now see a `package.json` when you run:

```sh
ls
```

## Install and configure dev dependencies

Install `nodemon`:

```sh
npm i --save-dev nodemon
```

Add this dev script to `package.json`:

```json
"dev": "nodemon index.js"
```

Install `sequelize-cli`

```sh
npm i --save-dev sequelize-cli
```

## Install and configure the regular dependencies

Install dotenv:

```sh
npm i dotenv
```

Install express:

```sh
npm i express
```

Install morgan for nice server logs:

```sh
npm i morgan
```

Install the ES6 template engine:

```sh
npm i express-es6-template-engine
```

Install Sequelize for your model layer:

```sh
npm i sequelize
```

Install the supporting libraries so Sequelize can communicate with PostgreSQL:

```sh
npm i pg-hstore pg
```

## Configure the database

- Create a new ElephantSQL instance.
- Make a copy of the `dist.env` file and name the copy `.env`
- Copy/paste the credentials into `.env`

Then, run the migrations so that PostgreSQL can store your Model data:

```sh
npx sequelize-cli db:migrate
```

## Confirm that you can Create and Retrieve data

Run the app with `npm run dev`

In your browser, fill out the form on `/products/new` and confirm that your data appears on the `/products` page.


## BONUS: View the data in Beekeeper Studio

Connect to your ElephantSQL instance using Beekeeper Studio.

- Choose "Postgres" from the menu.
- Enter the username, password, database name, and host for your ElephantSQL instance.
- In the list of tables (in the sidebar), click the "Open in new tab" icon next to the table name.

Enter more products in the browser and reload the table view in Beekeeper Studio.

