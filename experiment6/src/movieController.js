/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from"./routes";
export const home = async (req,res) =>{
    try{
        const movies = await Movie.find({}).sort({'_id':-1});
        res.render("home", {pageTitle:"Home", movies});
    } catch(error){
        console.log(error);
        res.render("home", {pageTitle:"Home", movies: [] });
    }
};

export const getCreate = (req,res) => res.render("create", {pageTitle:"Create"});
export const postCreate = async (req,res) =>{
    const {
        body:{title,year,rating,synopsis,genres}
    } = req;
    const genresArray = genres.split(',');
    const intRating = parseFloat(rating);
    try{
    const newMovie = await Movie.create({
        title,
        year,
        rating:intRating,
        synopsis,
        genres:genresArray
    });
    console.log(newMovie);
    res.redirect(routes.movieDetail(newMovie.id));

    } catch(error){
        console.log(error);
    }
};

export const movieDetail = async (req,res) =>{
    const {
        params: {id}
    } = req;

    try{
        const movie = await Movie.findById(id);
        res.render("movieDetail",{pageTitle: movie.title, movie});
    }catch(error){
        res.redirect(routes.home);
    };
};

export const getEditMovie = async (req,res)=>{
    const {
        params:{id}
    } = req;

    try{
        const movie = await Movie.findById(id);
        res.render("editMovie",{pageTitle:`Edit ${movie.title}`,movie,genres:movie.genres.join()});
    }catch(error){
        res.redirect(routes.home);
    }

};

export const postEditMovie = async (req,res)=>{
    const {
        params: {id},
        body: {title,year,rating,synopsis,genres}
    } = req;

    try{
        await Movie.findOneAndUpdate({_id:id}, {title,year,rating,synopsis,genres:genres.split(',')});
        res.redirect(routes.movieDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }
};

export const deleteMovie = async (req,res)=>{
    const {
        params:{id}
    } = req;
    try{
        await Movie.findOneAndRemove({_id:id});
    }catch(error){
        console.log(error);
    }
    res.redirect(routes.home);
};

export const search = async (req,res)=>{
    let movies = [];
    if(req.query.year){
        const year = req.query.year;
        try{
            movies = await Movie.find({
                year:{$gte:year}
            });
        } catch(error){
             console.log(error);
        }
        res.render("search",{pageTitle:`Filtering by year: ${year}`,value:year,movies,filter:"year"});           
    }else if(req.query.rating){
        const rating = req.query.rating;
        try{
            movies = await Movie.find({
                rating:{$gte:rating}
            });
        } catch(error){
             console.log(error);
        }
        res.render("search",{pageTitle:`Filtering by rating: ${rating}`,value:rating,movies,filter:"rating"});  
    }
};

// Add your magic here!
