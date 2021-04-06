import fs from "fs";
import { txtDetail } from "./middlewares";

let PATH = '';

export const getHome = (req,res) =>{
    res.render("home",{pageTitle:'TXT2HTML'});
}

export const postHome = (req,res) =>{
    const {
        file:{path,filename}
    } = req;
    console.log(filename);
    PATH = path;
    res.redirect("/read");
}

export const detail = (req,res) =>{    
    fs.readFile(PATH, 'utf8',(err,data)=>{
        if (err) throw err;
        console.log(data);
        res.render("detail",{pageTitle:'Contents',data});
    });

}