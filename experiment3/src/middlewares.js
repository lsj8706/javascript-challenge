export const localsMiddleware = (req,res,next) =>{
    res.locals.siteName = "Happy";
    next();
};