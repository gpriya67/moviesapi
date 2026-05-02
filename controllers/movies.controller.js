/* import Movie from "../models/movie.model."; */
import Movie from "../models/movie.model.js";

export const movieIndex = (req, res) => {
  res.send("Get all movie lists");
};

export const movieCreate = async(req, res) => {
    //id,title,desc
  /* res.send("Create a movie"); */

  console.log(req.body);

  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  })

try{
const movie = await newMovie.save();
return res.status(201).json(movie)

}catch(error){
 return res.status(400).json({ message: error.message});
} 
 

  return res.json(req.body)
  
};

export const movieUpdate = (req, res) => {
  res.send("Update a movie");
};

export const movieDelete = (req, res) => {
  res.send("Delete a movie");
};
