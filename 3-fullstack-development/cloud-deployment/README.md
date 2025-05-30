# Cloud Deployment

## Render.com for Node.js deployment

- Click add new `Web Service`
- Click `Public Git Repository` and paste the github url i.e:`https://github.com/amaldevelops/messaging-app`
- Branch - `main`
- Root Directory : `backend` (or the folder where package.json file for backend code is located)
- Build Command : `npm install`
- Pre-Deploy Command : ` `
- Start Command : `npm start`
- Auto-Deploy : `off`

### Environment Variables

- KEY : VALUE (Format of the Environment variables)
- CORS_URL :`https://www.amalk.au`
- PORT : `3000`
- DATABASE_URL=`postgresql://[User Name]:[Password]@localhost:5432/messages_web_app_db?schema=public` (Enter the URL obtained from PostgreSQL cloud provider, i.e. Neon Databases) 
JWT_SECRET_KEY=`""` (Enter if you are using JWT authentication) 
CORS_URL="" `https://www.amalk.au`(Enter the main url of the Front End)

## Neon.tech for PostgreSQL database deployment

- Click "New Project"
- Project name : `Enter the project name`
- Postgres version : `17`
- Database name : `Enter same as project name`
- Cloud service provider : `AWS`
- Region : `AWS Asia Pacific 2 (Sydney)`
- Click "Create"
- After project is created on `Project Dashboard` click `Connect to your database`
- Click "Show Password" and select `connection string` and copy the string (Make sure this is not published to github and save this as an environment variable i.e. DATABASE_URL)
- In the your local project in the .env save the connection string in `DATABASE_URL` so when Prisma is running it knows the correct URL of the database.
- In you local project open terminal in the Prisma installation folder and migrate schema to Neon `npx prisma migrate dev --name init`. This will setup the newly created database schema in neon database.
- If you have a sample data seed you can run it now : `node src/prisma/SeedSampleData.js` Make sure when you run this that you are running from the root file where package.json and .env is located otherwise you will get errors.
