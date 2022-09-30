import { Request, Response } from "express";
import { GetDrinksAvailableService } from "../../services/drinks/GetDrinksAvailableService";

export class GetDrinksAvailableControllers {
    async handle(request: Request, response: Response) {
        const { id } = request.query;

        const service = new GetDrinksAvailableService();

        const result = await service.execute({ idFront: id });

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}