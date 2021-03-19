import express from"express";
import { buy, refund } from "../controllers";
import routes from "../routes";

const apiV1Router = express.Router();

apiV1Router.get(routes.v1Buy, buy);
apiV1Router.get(routes.v1Refund, refund);





export default apiV1Router;