const express = require("express");
const routes = express.Router();
const recipes = require("./controllers/recipes")
const data = require("./data.json");

routes.get("/", function(req, res){
    return res.render("home", {items: data.recipes})
})


routes.get("/about", function(req, res){
    return res.render("about")
})
routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit);

routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete);


module.exports = routes