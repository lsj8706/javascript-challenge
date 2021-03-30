import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    return res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const getAdd = (req,res) =>{
  res.render("add",{pageTitle:"Add Movie"});
};

export const postAdd = (req,res) =>{
  const {
    body:{title,synopsis,genres}
  } = req;
  const genresArray = genres.split(',');
  console.log(genresArray);
  addMovie({title,synopsis,genres: genresArray});
  return res.redirect("/");
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
