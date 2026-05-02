import express from "express";
import {
  movieCreate,
  movieDelete,
  movieIndex,
  movieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();

//R- for reading movie
router.get("/", movieIndex);

//c-create movie
router.post("/", movieCreate);

//u-update movies
router.put("/:id", movieUpdate); 

//d-for delete movie
router.delete("/:id", movieDelete);

export default router;
