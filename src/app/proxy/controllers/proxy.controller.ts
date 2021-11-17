import { Request, Response } from "express";
import { ProxyService } from "../services/proxy.service";

export class ProxyController {
    public static list = async (request: Request, response: Response) => {
        const queryParameters = request.query as { page: string, per_page: string };
        try {
            const result = await ProxyService.list(queryParameters);
            response.status(200).send(result);
        } catch (error) {
            response.status(400).send(error);
        }
    }
}