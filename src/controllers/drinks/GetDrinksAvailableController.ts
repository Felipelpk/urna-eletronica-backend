import { Request, Response } from "express";
import { GetDrinksAvailableService } from "../../services/drinks/GetDrinksAvailableService";

export class GetDrinksAvailableControllers {
    async handle(request: Request, response: Response) {
        const { id } = request.query;

        if(!id || !Number(id)) {
            return response.status(400).json({
                status: '400',
                message: 'Você precisa fornecer o ID de uma Bebida válida.'
            })
        }

        const service = new GetDrinksAvailableService();

        const result = await service.execute({ idFront: id });

        if(result.length <= 0){
            return response.status(404).json({
                status: '404',
                message: 'Bebida não identificada.'
            })
        }

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}