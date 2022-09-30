import { AppDataSource } from "../../data-source";
import { voters } from "../../database/entities/voters";

export class RegisterVoterHasVoted {
    votersRepository = AppDataSource.getRepository(voters);

    async execute({ idFront }): Promise<any>{
        
        const voter = await this.votersRepository.update({ id: idFront }, {
            haveVoted: 'true'
        });
        
        return voter;
    };

}