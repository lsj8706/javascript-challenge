import express from "express";
import routes from "./routes";
import path from "path";
import globalRouter from"./routers/globalRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localsMiddleware);
app.use(routes.home,globalRouter);



// Codesanbox does not need PORT :)
//app.listen(() => console.log(`Listening!`));
const PORT=300;

const handleListening = () => console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);