import express from "express";
import { detail, getHome, postHome } from "./controller";
import { uploadTxt } from "./middlewares";

const router = express.Router();

router.get("/", getHome);
router.post("/", uploadTxt,postHome);
router.get("/read",detail)

export default router;