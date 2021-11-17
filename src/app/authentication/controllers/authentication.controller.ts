import { Request, Response } from "express";
import { AuthenticationService } from "../services/authentication.service";

export class AuthenticationController {
    public static login = async (request: Request, response: Response) => {
        const { body: { username, password } } = request

        try {
            const result = await AuthenticationService.login(username, password);
            response.status(200).send(result);
        } catch (error) {
            response.status(401).send(error);
        }

    }
}