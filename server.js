const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const pages = require("./data")
const recipes = require("./data")

server.use(express.static("public"))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    
    
    return res.render("home", {items: pages})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req, res){

    return res.render("recipes", {items: pages})
})


server.get("/recipe_page", function(req, res){
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


server.listen(5001, function(){
    console.log("server is running");
})