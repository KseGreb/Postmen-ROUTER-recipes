const express = require('express');
const app = express();

const recipeRoutes = require('./routes/routeFetch');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/recipes", recipeRoutes)


app.listen(4000, ()=> {
    console.log("port 4000 is connected")
})