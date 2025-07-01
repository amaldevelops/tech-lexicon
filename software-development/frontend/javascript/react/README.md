# React

## Scaffold a React App using Vite

- Please make sure that you are using the LTS version of Node , otherwise errors may occur
- Using an existing GitHub repo: Alternatively, if you created a GitHub repo already and cloned it, you can cd into your cloned repo then run the above Vite command, using . as the project name. `npm create vite@latest . -- --template react`. This will tell Vite to use the current directory for the project, instead of creating a new directory with the given project name. This cloned directory should already be initialized as a git repo and connected to the right remote i.e use standard github repo creation process.
- For New Github repo: Fire up a terminal instance, cd into the folder containing your projects, and enter the following command (you can replace my-first-react-app with any name you want): `npm create vite@latest my-first-react-app -- --template react` Then follow the instructions to fully setup Vite To link your local project directory to a GitHub repo, create a new empty repo on GitHub then follow the instructions in the new repo’s page to connect it to your local project directory.

## Setup React Router

- Installation: `npm install react-router-dom`
- Please refer main.jsx, routes.jsx, ErrorPage.jsx for how to set up React router in the project.
- [Detailed instructions from The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-react-router)
