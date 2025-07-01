# Prisma ORM

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
