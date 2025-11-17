import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet 👀</p>}
      
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ 
          border: "1px solid #ddd", 
          padding: "10px", 
          marginBottom: "10px", 
          borderRadius: "8px" 
        }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
