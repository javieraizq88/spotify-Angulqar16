# Spotify

## versiones usadas 

Angular v16.2.16
node v20.17.0
npm v10.8.2


## para la API -> descargar repo

1) `git clone https://github.com/leifermendez/node-api-tracks.git`

2) en la raiz de ese repo crear el archivo .env indicando el puerto y el JWT_SECRET

    DB_URI=
    PORT=3001
    JWT_SECRET=Ejemplo123 

3) `npm install`

4) `node app.js`
y debe salir este resultado

    CARGAR RUTA ----> auth
    CARGAR RUTA ----> tracks
    Tu API es http://localhost:3001/api/1.0 

5) en http://localhost:3001/api/1.0/tracks estan las canciones


Iconos -> IconScout

## Development server

Run `ng serve` -> `http://localhost:4200/`
para poder verlo en mobile u otros dispositivos:
- abrir el navegador web y `http://IP:4200/`


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
