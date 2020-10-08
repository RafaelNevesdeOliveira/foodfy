const express = require("express");
const routes = express.Router();
const recipes = require("./app/controllers/recipes")
/* const chefs = require("./app/controllers/chefs") */

routes.get("/", function(req,res){
    return res.redirect("/recipes")
})


routes.get("/about", function(req, res){
    return res.redirect("about")
})

//Rotas Admin

routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit);
routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete);


//Rotas Chef

/* routes.get("/admin/chefs", chefs.index);
routes.get("/admin/chefs/create", chefs.create);
routes.get("/admin/chefs/:id", chefs.show);
routes.get("/admin/chefs/:id/edit", chefs.edit);
routes.post("/admin/chefs", chefs.post);
routes.put("/admin/chefs", chefs.put);
routes.delete("/admin/chefs", chefs.delete); */

module.exports = routes