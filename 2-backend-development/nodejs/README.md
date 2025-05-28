# Backend

## Nodejs Commands

### Follow these steps to set up a clean and flexible backend environment using Node.js, Express, and optional tools like Prisma, Passport, and EJS.

- Initialize an empty package.json: `npm init -y`
- Install the basic Nodejs middleware (express - Web framework to handle routes and server logic | dotenv - Loads environment variables from a .env file | cors or Cross-Origin Resource Sharing enables requests from different origins ): `npm install express dotenv cors`
- Express-validator to validate input. This package validates and sanitizes user input from forms or API requests: `npm install express-validator`
- EJS (Embedded JavaScript templates). EJS or Embedded JavaScript templates for server-side HTML is a templating engine for generating HTML using JavaScript, rendering. Only required if complex/separate front end is not required i.e. React/Vite: `npm install ejs`
- pg or PostgreSQL client for Node.js to connect and query the database, Recommended to use Prisma ORM: `npm install pg`
- Prisma ORM for PostgreSQL database setup, Please refer the Prisma ORM setup Readme for full setup information : `npm install prisma --save-dev`
- Prisma client for PostgreSQL database interaction, Please refer the Prisma ORM setup Readme for full setup information : `npm install @prisma/client`
- express-session - Stores session data (e.g., logged-in user info) : `npm install express-session`
- passport - Authentication middleware for managing login strategies : `npm install passport passport-local`
- passport-local - Local username/password login strategy
- bcryptjs - Hashes and verifies passwords securely : `npm install bcryptjs`
- Testing Frameworks (Recommended for larger projects) :
  `npm install --save-dev jest supertest`

## Authentication using JWT (Without using Passport.js)

- Install jsonwebtoken package : `npm install jsonwebtoken`
- Refer the Authenticator.js for authentication functions. `createJWT` custom middleware will create a JWT token that can be sent as JSON via an API END Point. When authenticating routes custom middleware `authenticateJWT` can be used.
- To Protect a route add `authenticateJWT` middleware before all the other middleware that needs to be protected E.g: `mainRouter.get("/messaging-api/v1/contacts", authenticateJWT, getAllContacts);`
- Client will need to save the token received as JSON in the browser local storage in the front end/browser
- When authorizing routes with JWT token will need to be sent as an "Authorization" Headers
- It is required to use format under HTTP Headers `Authorization : "Bearer <JWT>"`
- E.g : `Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDQwOTcyOTYsImV4cCI6MTc0NDA5OTA5Nn0.PboRrhU7xFTzQUltX_ZA59eWs-pxXfH8JHC_tU7jIKA"`
