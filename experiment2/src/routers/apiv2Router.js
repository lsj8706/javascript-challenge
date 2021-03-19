import express from"express";
import { edit, remove } from "../controllers";
import routes from "../routes";

const apiV2Router = express.Router();

apiV2Router.get(routes.v2Remove, remove);
apiV2Router.get(routes.v2Edit, edit);





export default apiV2Router;