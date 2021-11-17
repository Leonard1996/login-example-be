import express from "express";
import { AuthenticationMiddleware } from "../authentication/middlewares/authentication.middleware";
import { ProxyController } from "./controllers/proxy.controller";

export class ProxyRouter {
    public static configRoutes = (app: express.Application) => {
        app.get("/beers", [
            AuthenticationMiddleware.validateToken,
            ProxyController.list
        ])
    }
}