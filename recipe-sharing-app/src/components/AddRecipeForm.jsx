import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet 👀</p>}

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
