import { AppDataSource } from "../../data-source";
import { voutes } from "../../database/entities/voutes";

interface DataProps {
    voterName: string;
    voterId: string;
    snack: string;
    drink: string;
}

export class RegisterVoutesService{
    voutesRepository = AppDataSource.getRepository(voutes);

    async execute({ voterName, voterId, snack, drink }: DataProps): Promise<any>{

        const result = this.voutesRepository.create({
            voterName: voterName,
            snack: snack,
            drink: drink
        });

        this.voutesRepository.save(result);

        return result;
    }
}