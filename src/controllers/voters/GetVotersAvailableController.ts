import { Request, Response } from "express";
import { GetVotersAvailableService } from "../../services/voters/GetVotersAvailableService";

export class GetVotersAvailableControllers {
    async handle(request: Request, response: Response) {
        const { id } = request.query;

        const service = new GetVotersAvailableService();

        const result = await service.execute({ idFront: id });

        if(result.length <= 0){
            return response.status(400).json({
                status: '400',
                message: 'Eleitor não identificado'
            })
        }

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}