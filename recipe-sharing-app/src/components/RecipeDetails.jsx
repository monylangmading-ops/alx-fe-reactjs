
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const numericId = Number(id); 
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === numericId || r.id === id)
  );
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {recipe.ingredients && (
        <>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </>
      )}

      <div style={{ marginTop: 12 }}>
        <Link to={`/edit/${recipe.id}`} style={{ marginRight: 12 }}>
          Edit Recipe
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/">← Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
