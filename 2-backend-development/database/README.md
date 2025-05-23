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

- Install Prisma ORM: `npm install prisma --save-dev`
-
