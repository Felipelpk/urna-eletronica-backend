import { AppDataSource } from "../../data-source";
import { voters } from "../../database/entities/voters";

export class GetVotersAvailableService {
    votersRepository = AppDataSource.getRepository(voters);

    async execute({ idFront }): Promise<any>{
        const voter = await this.votersRepository.findBy({ id: idFront });

        return voter;
    };

}