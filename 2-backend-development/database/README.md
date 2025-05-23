# Databases General

## Install PostgreSQL on a Ubuntu Linux machine

[Installing PostgreSQL - The Odin Project](https://www.theodinproject.com/lessons/nodejs-installing-postgresql)

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

- Install Prisma ORM: `npm install prisma --save-dev`
- invoke the Prisma CLI by prefixing it with npx: `npx prisma`
- Set up Prisma ORM project by creating first Prisma Schema file with the following command:`npx prisma init --datasource-provider postgresql --output ../generated/prisma`
- Above command creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma Schema with your database connection variable and schema models.
  Sets the datasource to PostgreSQL and the output to a custom location, respectively.
  Creates the .env file in the root directory of the project, which is used for defining environment variables (such as your database connection)
