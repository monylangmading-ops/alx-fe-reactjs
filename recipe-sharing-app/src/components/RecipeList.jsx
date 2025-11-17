import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);
  const recipesFallback = useRecipeStore((s) => s.recipes);
  const recipes = Array.isArray(filteredRecipes) && filteredRecipes.length >= 0 ? filteredRecipes : recipesFallback;

  return (
    <div style={{ marginTop: '10px' }}>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes match your filters 👀</p>}

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
          }}
        >
          <h3>
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
          {recipe.prepTime != null && <small>Prep time: {recipe.prepTime} mins</small>}
          <div style={{ marginTop: 8 }}>
            <Link to={`/edit/${recipe.id}`} style={{ marginRight: 10 }}>
              Edit
            </Link>
            <Link to={`/recipes/${recipe.id}`}>View details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
