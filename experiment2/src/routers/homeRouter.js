import express from"express";
import routes from "../routes";
import { confirmAccount, home, join, login } from "../controllers";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.join, join);
homeRouter.get(routes.login, login);
homeRouter.get(routes.confirmAccount, confirmAccount);



export default homeRouter;