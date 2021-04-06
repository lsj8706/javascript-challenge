import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import router from "./router";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/uploads",express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);


// Codesanbox does not need PORT :)
//app.listen(4000, () => console.log(`Listening!`));
const PORT = 700;
const handleListening = () => console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);