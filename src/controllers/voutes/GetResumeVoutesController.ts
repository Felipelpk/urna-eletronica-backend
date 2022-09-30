import { Request, Response } from "express";
import { GetResumeVoutesService } from "../../services/voutes/GetResumeVoutesService";

export class GetResumeVoutesController {

    async handle(request: Request, response: Response) {
        const resumeService = new GetResumeVoutesService();

        const result = await resumeService.execute();

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}