import express from "express";
import movieRoutes from './routes/movies.route.js'
import connectDB from "./lib/db.js";

const app = express();

const PORT = 6969;


//connect DB

connectDB();

app.get("/", (req, res) => {
  res.json("Hello World I am FrontEnd developer");
});

//crud functionality of movies

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The Port is running at http://localhost:${PORT}`);
});
    