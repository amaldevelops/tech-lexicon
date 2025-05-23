# Databases

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
