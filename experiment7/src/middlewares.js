import multer from "multer";

export const multerTxt = multer({dest: "uploads/txts/"});

export const uploadTxt = multerTxt.single("txtFile");

