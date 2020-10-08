const recipe = require("../models/recipe")
const { age, date } = require("../../lib/utils")


module.exports = {
    /* Shorthand Object JS */
    index(req, res) {

        recipe.all(function(recipes){
            return res.render("recipes/index", {recipes})
        })

    },

    create(req, res) {
        return res.render('admin/recipes/create')

    },

    post(req, res) {
        const keys = Object.keys(req.body);
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all the fields!");
            }
        }
        recipe.create(req.body, function(recipe){
            return res.redirect(`/admin/recipes/${recipe.id}`)
        })
        
    },

    show(req, res) {
        recipe.find(req.params.id, function(recipe){
            if (!recipe) return res.send("recipe not found!")

            recipe.created_at = date(recipe.created_at).format

            return res.render("admin/recipes/show", {recipe})
        })
    },

    edit(req, res) {
        recipe.find(req.params.id, function(recipe){
            if (!recipe) return res.send("recipe not found!")

            recipe.birth = date(recipe.birth).iso

            return res.render("admin/recipes/edit", {recipe})
        })
    },

    put(req, res) {
        const keys = Object.keys(req.body);
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all the fields!");
            }
        }
        recipe.update(req.body, function(){
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })
    },

    delete(req, res) {
        recipe.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes`)
        })
    },

}
