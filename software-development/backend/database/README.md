# Databases General

## Install PostgreSQL on a Ubuntu Linux machine

[Installing PostgreSQL - The Odin Project](https://www.theodinproject.com/lessons/nodejs-installing-postgresql)

## Setting a new database

- Start the PostgreSQL shell : `psql`
- To create a database named "messages_web_app_db" (Keep the database name as short as possible but if you require to set a longer name use underscores) : `CREATE DATABASE messages_web_app_db;`

## PostgreSQL database URL Format / Connection setup

- `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA` USER: The name of your database user | PASSWORD: The password for your database user | HOST: The name of your host name (for the local environment, it is localhost) | PORT: The port where your database server is running (typically 5432 for PostgreSQL) | DATABASE: The name of the database | SCHEMA: The name of the schema inside the database | If you're unsure what to provide for the schema parameter for a PostgreSQL connection URL, you can probably omit it. In that case, the default schema name public will be used.
- Example for Local PostgreSQL installation: `DATABASE_URL="postgresql://your_user:your_password@localhost:5432/messages_web_app_db?schema=public"` DATABASE_URL should be in the .env file
- When running PostgreSQL locally on Ubuntu Linux, your user and password as well as the database name typically correspond to the current user of your OS.
- To test that the database URL is correct : `psql postgresql://your_user:your_password@localhost:5432/messages_web_app_db`

## PostgreSQL shell (psql) Commands

- Start the PostgreSQL shell : `psql`
- View the current DB's : `\l`
- Connect to a PostgreSQL database : `psql -U username -d dbname`
- To connect to the db i.e to top_users table: `\c top_users`
- List all tables in the current database : `\dt`
- Show schema (columns, types, constraints) of a table : `\d tablename`
- List all schemas : `\dn`
- List all functions : `\df`
- Quit the PostgreSQL shell : `\q`

## Postgresql create a new database

- First enter the PostgreSQL shell by running `psql` in your terminal. You can view the current dbs using the `\l` command.
- To create a new db by running from PostgreSQL shell the following SQL statement (assuming db name to be top_users):
  `CREATE DATABASE top_users;`
- `\l` again to see if the db was created.
- To connect to the db from PostgreSQL shell:
  `\c top_users`
- Verify that the PostgreSQL shell prompt should be: `top_users=#`
- Use PostgreSQL shell to create a sample table using following SQL:
  `CREATE TABLE users (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,username VARCHAR ( 255 ),password VARCHAR ( 255 ));`
- Verify that the table has been created by running `\d` from PostgreSQL shell, you should see the table in the output if you followed above instructions.

## Prisma ORM Setup

[Official Prisma Relational databases JavaScript and PostgreSQL](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgresql)

- Make sure that you are in the correct folder when installing Prisma i.e. `messaging-app/backend/src/` and the generated prisma client to be inside `backend/src/prisma/generated`. Also make sure that schema.prisma has the correct path set for the client `generator client {  provider = "prisma-client-js"  output   = "./generated/prisma"}`. Most of the import errors can be avoided if you follow this.
- Install Prisma ORM: `npm install prisma --save-dev`
- invoke the Prisma CLI by prefixing it with npx: `npx prisma`
- Set up Prisma ORM project by creating first Prisma Schema file with the following command:`npx prisma init --datasource-provider postgresql --output ../generated/prisma`. This command creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma Schema with your database connection variable and schema models. Sets the datasource to PostgreSQL and the output to a custom location, respectively. Creates the .env file in the root directory of the project, which is used for defining environment variables (such as your database connection).
- If using git for version control, recommended to add a line to .gitignore in order to exclude the generated client from the application. In this example, to exclude the generated/prisma directory. : .gitignore => `generated/prisma/`
- For existing database: If you are connecting to an existing database then set the `DATABASE_URL` in the .env file to point to your existing database. Then run `prisma db pull` to turn your database schema into a Prisma schema.
- For New Database : First Create a Database and then set the `DATABASE_URL` in the .env file to point to your new database.
- Edit prisma/schema.prisma according to the database scheme as required.
- Use Prisma Migrate to apply your schema and create the tables: `npx prisma migrate dev --name init`
- Whenever you update your Prisma schema, you will have to update your database schema using either `prisma migrate dev` or `prisma db push`. This will keep your database schema in sync with your Prisma schema. These commands will also run `prisma generate` under the hood to re-generate your Prisma Client.
- View data with Prisma Studio: `npx prisma studio`
- To remove all the data and recreate tables according to prisma schema (WARNING THIS WILL DELETE ALL DATA FROM YOUR POSTGRESQL DATABASE, ONLY USE THIS DURING DEVELOPMENT): `npx prisma migrate reset`
- After any changes to schema is made update the database and give an descriptive name i.e "rename_username_to_userName":`npx prisma migrate dev --name rename_username_to_userName`
- To get started with Prisma Client please refer below

## Prisma Client Setup

- To get started with Prisma Client, first install the @prisma/client package: `npm install @prisma/client`
- Then, run prisma generate which reads your Prisma schema and generates the Prisma Client : `npx prisma generate`
- You can now import the PrismaClient constructor from the `@prisma/client` package to create an instance of Prisma Client to send queries to your database.
- When you run prisma generate, you are actually creating code (TypeScript types, methods, queries, ...) that is tailored to your Prisma schema file or files in the prisma directory. This means, that whenever you make changes to your Prisma schema file, you also need to update the Prisma Client. You can do this by running the `prisma generate` command.
