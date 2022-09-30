import { AppDataSource } from "../../data-source";
import { drinks } from "../../database/entities/drinks";

export class GetDrinksAvailableService {
    drinksRepository = AppDataSource.getRepository(drinks);

    async execute({ idFront }): Promise<any>{
        const drink = await this.drinksRepository.findBy({ id: idFront });
        
        return drink;
    };

}