import { Request, Response } from "express";
import { GetSnacksAvailableService } from "../../services/snacks/GetSnacksAvailableService";

export class GetSnacksAvailableControllers {
    async handle(request: Request, response: Response) {
        const { id } = request.query;

        if(!id || !Number(id)) {
            return response.status(400).json({
                status: '400',
                message: 'Você precisa fornecer o ID de um Lanche válido.'
            })
        }

        const service = new GetSnacksAvailableService();

        const result = await service.execute({ idFront: id });

        if(result.length <= 0){
            return response.status(404).json({
                status: '404',
                message: 'Lanche não identificado.'
            })
        }

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}