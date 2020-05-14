const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const pages = require("./data")

server.use(express.static("public"))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
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

server.listen(5001, function(){
    console.log("server is running");
})