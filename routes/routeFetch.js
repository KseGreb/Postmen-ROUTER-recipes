const { Router } = require("express");
const router = Router();

const recipes = require('../Recipes');

router.get("/", (req, res)=>{
    res.json(recipes);
})

router.post("/", (req, res)=>{

    const newRecipe = {
        name: req.body.name,
        id: req.body.id,
        price: req.body.price
    }
    recipes.push(newRecipe);
    res.json(recipes)
})

router.delete("/:id", (req,res)=>{
    let { id } = req.params;
    let recipeToBeDeleted = recipes.find(recipe => recipe.id === id);

    if(recipeToBeDeleted){
        res.json({
            message: `Recipe ${req.params.id} deleted`,
            recipes: recipes.filter(recipe => recipe.id !== id)
        })
    }else{
        res.status(404).json({message: "Recipe can not be found"})
    }
})

router.put("/:name", (req,res)=> {
    let { name } = req.params;
    let recipeToBeChanged = recipes.find(recipe => recipe.name === name);

    if(recipeToBeChanged){
        const updatedRecipe = req.body;
        recipes.forEach(recipe =>{
            if(recipe.name === req.params.name){
                recipe.name = updatedRecipe ? updatedRecipe.name : recipe.name;
                recipe.id = updatedRecipe ? updatedRecipe.id : recipe.id;
                recipe.price = updatedRecipe ? updatedRecipe.price : recipe.price;
                res.json({message: "Recipe has been updated", recipe});
            } 
        })
    }else{
        res.status(404).json({message: "Recipe can not be found"})
    }
})



module.exports = router;