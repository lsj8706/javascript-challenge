import express from "express";
import path from "path";
import "./db";
import { localsMiddleware } from "./middlewares";
import movieRouter from "./movieRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(localsMiddleware);
app.use("/", movieRouter);



// Codesanbox does not need PORT :)
//app.listen(() => console.log(`✅  Server Ready!`));
const PORT = 400;
const handleListening = () =>console.log(`✅Listening on: http://localhost:${PORT}`);
app.listen(PORT, handleListening);
export default app;