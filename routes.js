const express = require("express");
const routes = express.Router();
const pages = require("./data")
const recipes = require("./data")

routes.get("/", function(req, res){
    return res.render("home", {items: pages})
})

routes.get("/about", function(req, res){
    return res.render("about")
})

routes.get("/recipes", function(req, res){

    return res.render("recipes", {items: pages})
})


routes.get("/recipe_page", function(req, res){
    const id = req.query.id

    const recipe = recipes.find(function(recipe){
        if (recipe.id == id){
            return true
        }
    })
    if (!recipe){
        return res.send("Page not found!")
    }
    return res.render("recipe_page", {item: recipe})
})

routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit);

routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete);


module.exports = routes