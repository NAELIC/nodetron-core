# Nodetron-core

This project contains all core services needed for all AI.
We have five services :

- Newtork (Get vision and game-controller data)
- World (Aggregate and Filter all data to have world)
- Control (Control the robot in an intuitive way)
- Order (Control the robot in a raw order (speed, etc...), get informations of the hardware)
- API (Make a link with external tools (viewer, etc...))

## Installation

Install dependencies and copy `.env.example` file :

```bash
npm install
cp -r .env.example
```

## Development Launch

We have multiple ways to launch the project.
You can launch all services at once or one service.
Moreover, you can launch service with a repl terminal or not. Repl terminal can help to debug your project and launch some commands to see errors.

### All services

```bash
npm run dev # without repl terminal
```

or

```bash
npm run repl # with repl terminal
```

### One service

With the script `dev.sh` or `repl.sh`, you can easily launch one service.
Use this script with the name of the service in parameter and the service launch in repl mode (for `repl.sh`) or in normal mode (for `dev.sh`).

## Production Launch

TODO

## Docker Launch

TODO