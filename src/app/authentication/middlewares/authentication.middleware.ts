import { NextFunction, Request, Response } from "express";
import Joi from 'joi';
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../../user/entities/user.entity"
import { getRepository } from "typeorm";


export class AuthenticationMiddleware {
    public static hasLoginValidFields = (request: Request, response: Response, next: NextFunction) => {

        const loginInput = Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required(),
        });

        const result = loginInput.validate(request.body, { abortEarly: false });

        if (!result.error) {
            next();
        } else {
            return response.status(422).send(result.error);
        }
    }

    public static validateToken = (request: Request, response: Response, next: NextFunction) => {
        const token = request.header("Authorization");

        if (token) {

            try {
                const jwtPayload = jwt.verify(token, process.env.JWT_SECRET_KEY) as JwtPayload;
                response.locals.jwt = jwtPayload;

                next();

            } catch (error) {
                return response.status(401).send("Invalid acces token");
            }

        } else {
            return response.status(401).send("Not Authenticated");
        }

    }
}