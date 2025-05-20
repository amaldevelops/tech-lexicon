# React

## Scaffold a React App usinge Vite

- Please make sure that you are using the LTS version of Node , otherwise errors may occur
- Using an existing GitHub repo: Alternatively, if you created a GitHub repo already and cloned it, you can cd into your cloned repo then run the above Vite command, using . as the project name. `npm create vite@latest . -- --template react`. This will tell Vite to use the current directory for the project, instead of creating a new directory with the given project name. This cloned directory should already be initialized as a git repo and connected to the right remote i.e use standard github repo creation process.
- For New Github repo: Fire up a terminal instance, cd into the folder containing your projects, and enter the following command (you can replace my-first-react-app with any name you want): `npm create vite@latest my-first-react-app -- --template react` Then follow the instructions to fully setup Vite To link your local project directory to a GitHub repo, create a new empty repo on GitHub then follow the instructions in the new repo’s page to connect it to your local project directory.

## Setup React Router

- Installation: `npm install react-router-dom`
- Please refer main.jsx, routes.jsx, ErrorPage.jsx for how to set up React router in the project.
- Detailed instructions from The Odin Project: https://www.theodinproject.com/lessons/node-path-react-new-react-router

## Deploy React App to Github Pages

- Install Github pages: `npm install --save-dev gh-pages`
- Make sure vite.config.js is configured with:
  `export default defineConfig({ base: 'https://www.amalk.au/<your-repo-name>/', plugins: [react()],})` Make sure to put the correct domain name otherwise you will get CORS errors. i.e. if the github account is configured with a custom domain use it other wise use your github username `base: 'https://<your-username>.github.io/<your-repo-name>/')`
- Add Deployment Scripts to package.json (predeploy: runs npm run build before deploying | deploy: pushes the built dist folder to the gh-pages branch)
  `"scripts": {"predeploy": "npm run build",  "deploy": "gh-pages -d dist"}`
- Make sure your .gitignore does not ignore the dist/ folder if you're using git subtree.
  However, if you're using the gh-pages package (as shown above), this step is not necessary — gh-pages doesn't require committing dist/
- Build and Deploy to GitHub Pages, This builds the app and Publishes the dist/ folder to the gh-pages branch : `npm run deploy`
- GitHub Settings : On your repo: Go to Settings → Pages then Choose the source as gh-pages branch → /(root)

### Alternative : Using git subtree manually instead of gh-pages package

Only do this if you're not using the gh-pages npm package.If you want to push manually using git subtree:
`npm run build `
`git add dist`
`git commit -m "Initial dist subtree commit"`
`git subtree push --prefix dist origin gh-pages`
