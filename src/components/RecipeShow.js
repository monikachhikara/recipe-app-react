function RecipeShow({recipe}){
    return (
        <div className="container mt-5" key={recipe.Name}>
            <ul class="list-group">
                <li class="list-group-item list-group-item-primary"><h2>{recipe.Name}</h2></li>    
            </ul>
            <a href={recipe.url}>{recipe.Name}</a>
            <p><h6 className="mt-3">Description</h6>{recipe.Description}</p>
            <p><h6>Author</h6>{recipe.Author}</p>
            <p><h6>Ingredients</h6>{recipe.Ingredients}</p>
            <p><h6>Method</h6>{recipe.Method}</p>
        </div>
    )
}

export default RecipeShow;