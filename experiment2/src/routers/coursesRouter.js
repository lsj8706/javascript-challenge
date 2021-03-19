import express from"express";
import routes from "../routes";
import { courses, coursesNew, mine } from "../controllers";

const coursesRouter = express.Router();

coursesRouter.get('/', courses);
coursesRouter.get(routes.new, coursesNew);
coursesRouter.get(routes.mine, mine);




export default coursesRouter;