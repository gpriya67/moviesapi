import express from "express";
import movieRoutes from './routes/movies.route.js'
import connectDB from "./lib/db.js";
import e from "express";

const app = express();

const PORT = 6969;

//Data understanding middleware

app.use(express.json());//
app.use(e.urlencoded({ extended: true})) //url xmm format


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
    