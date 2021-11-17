import express from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
require('dotenv').config();
var bodyParser = require('body-parser')
import { AuthenticationRouter } from './app/authentication/authentication.router';
import { ProxyRouter } from './app/proxy/proxy.router';

export const app = express();
app.use(bodyParser());

createConnection()
    .then(async (connection) => {
        await connection.query("DELETE FROM users WHERE 1");
        await connection.query("INSERT INTO users (username, password) VALUES ('root', 'password')");

        const port = process.env.PORT || 5000;

        AuthenticationRouter.configRoutes(app);
        ProxyRouter.configRoutes(app);

        app.listen(port, () => {
            return console.log(`server is listening on ${port}`);
        });
    })
    .catch((error) => console.log(error));