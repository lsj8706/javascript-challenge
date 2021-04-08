import express from "express";
import request from "request";

const app = express();

const handleHome=(req,res)=>{
    if(req.query.url){
        let {query:{url}} = req;
        console.log(url.includes("http://"));
        if(url.includes("http://")){
            console.log(url);   
        } else{
            url = "http://" + url;
            console.log(url);
        }
        request.get(url,function(error,response,body){
            console.log('error: ',error);
            console.log('statusCode: ',response && response.statusCode);
            if(response){
                if(response.statusCode <= 455){
                    res.json("Up!");
                }else{
                    res.json("Down!");
                }
            }else{
                res.json("Down!");
            }
        });
        
    } else{
        res.json("Enter a website");
    }
};




app.get("/",handleHome);

// Codesanbox does not need PORT :)
//app.listen(() => console.log(`Listening!`));
const PORT=800;


const handleListening = () => console.log(`✅Listening on: http://localhost:${PORT}`);
app.listen(PORT,handleListening);