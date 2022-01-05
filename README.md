# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


package.json

{
    "name": "backend",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "json-server --watch db.json --port 3001"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "json-server": "^0.17.0"
    }
}

{
  "products": [
    {
      "id": 1,
      "name": "Caneta BIC preta",
      "price": 5.46
    },
