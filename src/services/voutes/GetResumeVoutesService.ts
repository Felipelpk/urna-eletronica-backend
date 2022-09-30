import { AppDataSource } from "../../data-source";
import { voutes } from "../../database/entities/voutes";

export class GetResumeVoutesService{
    voutesRepository = AppDataSource.getRepository(voutes);

    // Get All Votes for Pizza
    // Get All Votes for Hamburguer
    // Get All Votes for Pastel
    // Get All Votes for Água
    // Get All Votes for Suco
    // Get All Votes for Refrigerante

    // Get All Votes for snack empety
    // Get All Votes for drinks empety
    // Get All Votes

    async execute(): Promise<any>{
        let result = {};
        
        const allPizzaVotes = await this.voutesRepository.findBy({ snack: "Pizza" });
        const allHamburguerVotes = await this.voutesRepository.findBy({ snack: "Hamburguer" });
        const allPastelVotes = await this.voutesRepository.findBy({ snack: "Pastel" });
        const allWaterVotes = await this.voutesRepository.findBy({ drink: "Água" });
        const allJuiceVotes = await this.voutesRepository.findBy({ drink: "Suco" });
        const allSodaVotes = await this.voutesRepository.findBy({ drink: "Refrigerante" });

        const allSnacksEmpety = await this.voutesRepository.findBy({ snack: "" });
        const allDrinksEmpety = await this.voutesRepository.findBy({ drink: "" });

        const allVotesFromDB = await this.voutesRepository.find();

        result = {
            pizzaVotes: allPizzaVotes.length,
            hamburguerVotes: allHamburguerVotes.length,
            pastelVotes: allPastelVotes.length,
            waterVotes: allWaterVotes.length,
            juiceVotes: allJuiceVotes.length,
            sodaVotes: allSodaVotes.length,
            snackEmpetyVotes: allSnacksEmpety.length,
            drinkEmpetyVotes: allDrinksEmpety.length,
            allVotes: allVotesFromDB.length,
        }

        return result;
    }
}