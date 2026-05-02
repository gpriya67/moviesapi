export const movieIndex = (req, res) => {
  res.send("Get all movie lists");
};

export const movieCreate = (req, res) => {
    //id,title,desc
  /* res.send("Create a movie"); */

  console.log(req.body);
  return res.json(req.body)
  
};

export const movieUpdate = (req, res) => {
  res.send("Update a movie");
};

export const movieDelete = (req, res) => {
  res.send("Delete a movie");
};
