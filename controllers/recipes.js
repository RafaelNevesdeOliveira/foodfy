const fs = require("fs")
const data = require("../data.json")
/* const dat = require("/") */

exports.index = function(req, res){

    return res.render("admin/recipes", {recipes: data.recipes}) /* pegar dados do DATA */
}

//create
exports.create = function(req, res){
    return res.render("admin/recipes/create")
}
exports.post = function(req,res){
    const keys = Object.keys(req.body);
    for (key of keys){
        if (req.body[key] == ""){
            return res.send("Please, fill all the fields!");
        }
    }
    
    birth = Date.parse(req.body.birth);
    created_at = Date.now()
    let id = 1
    const lastRecipe = data.recipes[data.recipes.length - 1]
    if (lastRecipe){
        id = lastRecipe.id + 1
    }

    data.recipes.push({
        id,
        ...req.body,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")
        
        return res.redirect("/admin/recipes")
    })
}

//show
exports.show = function(req,res){
    //req.params = xxx/id (identificação no data.json)
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id;
    })
    if (!foundRecipe) return res.send("Receita não encontrada!");

    const recipe = {
        ...foundRecipe,
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundRecipe.created_at),
    }

    return res.render("admin/recipes/show", {recipe: recipe})
}

//edit
exports.edit = function(req,res){
    //req.params = xxx/id (identificação no data.json)
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id;
    })
    if (!foundRecipe) return res.send("recipe not found!"); 

    const recipe = {
        ...foundRecipe,
    }

    return res.render("admin/recipes/edit", {recipe})
}

//put
exports.put = function(req, res){
    const { id } = req.body
    let index = 0
    
    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if (id == recipe.id){
            index = foundIndex
            return true
        }
    })
    if(!foundRecipe) return res.send("recipe not found!")

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }
    data.recipes[index] = recipe
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write error!")

        return res.redirect(`recipes/${id}`)
    })
}

//delete
exports.delete = function(req, res){
    const {id} = req.body
    const filteredrecipes = data.recipes.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filteredrecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/admin/recipes")
    })
}