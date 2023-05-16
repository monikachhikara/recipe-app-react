import RecipeShow from './RecipeShow';

function RecipeList({recipes}){
    const renderedRecipes = recipes.map((recipe) =>{
        return <RecipeShow recipe={recipe} />;
    })

    return (
        <div>{renderedRecipes}</div>
    )
}

export default RecipeList;