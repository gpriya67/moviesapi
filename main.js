import express from "express";

const app = express();

const PORT = 6969

app.get('/',(req,res) =>{
    res.json('Hello World I am FrontEnd developer')
})

//crud functionality of movies  

//R- for reading movie 

app.get('/movies',() =>{

})

//c-create movie
app.post('/movies',() =>{

})

//u-update movies
app.put('/movies/:id',() =>{

})


//d-for delete movie
app.delete('/movies/:id',() =>{

})


app.listen(PORT,() =>{
    console.log(`The Port is running at http://localhost:${PORT}`)
})