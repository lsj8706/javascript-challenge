import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies",{movies, pageTitle:"Movies!"});
};

export const movieDetail = (req, res) => {
  const movie = getMovieById(req.params.id);
  if(movie){
  res.render("detail",{movie, pageTitle:movie.title});
  }else{
    res.render("404",{pageTitle:"Not Found"});
  }
};

export const filterMovie = (req, res) => {
  if(req.query.year){
  const year = req.query.year;
  const movieByYear = getMovieByMinimumYear(year);
  if(movieByYear){
    res.render("movies",{pageTitle:`Searching By year: ${year}`,movies:movieByYear})
  }
  }else if(req.query.rating){
    const rating = req.query.rating;
    const movieByRating = getMovieByMinimumRating(rating);
    if(movieByRating){
      res.render("movies",{pageTitle:`Searching By rating: ${rating}`,movies:movieByRating});
    }
  }else{
    res.render("404",{pageTitle:"Not Found"});
  }
};
