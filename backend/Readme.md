# Backend

## Setup

1. [Install MongoDB](https://www.w3schools.com/nodejs/nodejs_mongodb.asp)
1. Run MongoDb on `mongodb://localhost:27017`
1. Run `npm install`
1. `npm start`

## Parameters

Checkout [Config]('.config/config.ts') for available options.

## Develop

`npm run watch` to watch for changes in the code and recompile. You will need to restart the `npm run server` process after every change

### with VsCode

`.vscode/launch.json`:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    // {
    //   "type": "node",
    //   "request": "launch",
    //   "name": "Launch Program",
    //   "program": "${file}",
    //   "sourceMaps": true
    // },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Backend",
      "program": "${workspaceFolder}/backend/dist/backend/src/index.js",
      "console": "integratedTerminal",
      "args": [
        "isProd=false"
      ]
    }
  ]
}
```

`.vscode/tasks.json`:

```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "type": "typescript",
            "tsconfig": "backend\\tsconfig.json",
            "problemMatcher": [
                "$tsc"
            ]
        },
        {
            "type": "npm",
            "script": "test-data",
            "path": "backend/",
            "problemMatcher": []
        },
        {
            "type": "typescript",
            "tsconfig": "backend\\tsconfig.json",
            "option": "watch",
            "problemMatcher": [
                "$tsc-watch"
            ]
        }
    ]
}
```