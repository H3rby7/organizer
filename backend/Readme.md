# Backend

## Setup

1. [Install MongoDB](https://www.w3schools.com/nodejs/nodejs_mongodb.asp)
1. Run `npm install`
1. `npm start`

## Develop

`npm run watch` to watch for changes in the code and recompile. You will need to restart the `npm run server` process after every change

### with VsCode

Open the .tsconfig file and run the tsc:watch task as suggested by VsCode

Add this configuration to `.vscode/launch.json` to debug the backend

```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Backend",
  "program": "${workspaceFolder}/backend/dist/backend/src/index.js",
}
```

Now the Watch Task will automatically update your dist/ folder and you can easily restart your server with the new files using the VSCode debug overlay.