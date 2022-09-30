import { AppDataSource } from "../../data-source";
import { snacks } from "../../database/entities/snacks";

export class GetSnacksAvailableService {
    snacksRepository = AppDataSource.getRepository(snacks);

    async execute({ idFront }): Promise<any>{
        const snack = await this.snacksRepository.findBy({ id: idFront });
        
        return snack;
    };

}