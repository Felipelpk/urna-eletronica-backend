import { Router } from "express";
import { GetDrinksAvailableControllers } from "./controllers/drinks/GetDrinksAvailableController";
import { GetSnacksAvailableControllers } from "./controllers/snacks/GetSnacksAvailableController";
import { GetVotersAvailableControllers } from "./controllers/voters/GetVotersAvailableController";
import { GetResumeVoutesController } from "./controllers/voutes/GetResumeVoutesController";
import { RegisterVoutesController } from "./controllers/voutes/RegisterVoutesController";

const routes = Router();

routes.get('/voters', new GetVotersAvailableControllers().handle);
routes.get('/snacks', new GetSnacksAvailableControllers().handle);
routes.get('/drinks', new GetDrinksAvailableControllers().handle);
routes.get('/resume', new GetResumeVoutesController().handle);
routes.post('/voutes', new RegisterVoutesController().handle);

export { routes }