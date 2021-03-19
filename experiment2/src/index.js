import express from "express";
import routes from "./routes";
import homeRouter from "./routers/homeRouter";
import coursesRouter from"./routers/coursesRouter";
import apiRouter from "./routers/apiRouter";
import apiV1Router from "./routers/apiv1Router";
import apiV2Router from "./routers/apiv2Router";

const app = express();

// Codesanbox does not need PORT :)
const PORT = 5000;

app.use(routes.home, homeRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter);
app.use(routes.apiV1, apiV1Router);
app.use(routes.apiV2, apiV2Router);

const handleListening = () =>console.log(`✅Listening on: http://localhost:${PORT}`);
app.listen(PORT, handleListening);
//app.listen(() => console.log(`Listening!`));

export default app;