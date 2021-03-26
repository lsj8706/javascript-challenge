export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "SJ Movie";
    next();
};