import { Request, Response } from "express";
import { RegisterVoterHasVoted } from "../../services/voters/RegisterVoterHasVoted";
import { RegisterVoutesService } from "../../services/voutes/RegisterVoutesService";

export class RegisterVoutesController {

    async handle(request: Request, response: Response) {
        const { voterName, voterId, snack, drink } = request.body;

        const service = new RegisterVoutesService();
        const hasVotedService = new RegisterVoterHasVoted();

        const result = service.execute({ voterName, voterId, snack, drink });
        
        const changeHasVotedVouter = hasVotedService.execute({ idFront: voterId });

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}