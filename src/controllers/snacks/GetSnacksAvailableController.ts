import { Request, Response } from "express";
import { GetSnacksAvailableService } from "../../services/snacks/GetSnacksAvailableService";

export class GetSnacksAvailableControllers {
    async handle(request: Request, response: Response) {
        const { id } = request.query;

        const service = new GetSnacksAvailableService();

        const result = await service.execute({ idFront: id });

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}