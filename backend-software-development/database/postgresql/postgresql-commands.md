# Postgresql commands

- Enter the PostgreSQL shell by running psql in your terminal. You can view the current dbs using the `\l` command.

- To create a new db by running the following SQL statement:
  `CREATE DATABASE top_users;`
- `\l` again to see if the db was created.

- To connect to the db:
  `\c top_users`

- Verify that the psql prompt should be: top_users=#

- Now create a table and its columns to store username data:
  `CREATE TABLE usernames (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR ( 255 ));`

- Verify that the table has been created by running `\d` You should see the two tables in the output if you followed above instructions.

- use psql to create a table using following SQL
  `CREATE TABLE users (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,username VARCHAR ( 255 ),password VARCHAR ( 255 ));`
