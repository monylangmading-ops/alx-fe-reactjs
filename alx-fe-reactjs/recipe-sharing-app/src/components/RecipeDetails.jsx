import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import FavoriteButton from "./FavoriteButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found</p>;

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Ingredients:</h3>
      <ul>
        {(recipe.ingredients || []).map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <p><strong>Prep Time:</strong> {recipe.prepTime || "N/A"} minutes</p>

      <FavoriteButton recipeId={recipeId} />

      <br /><br />

      <Link to={`/edit/${recipeId}`}>✏️ Edit Recipe</Link>
      <br />

      <button onClick={handleDelete} style={{ marginTop: "10px", color: "red" }}>
        🗑 Delete Recipe
      </button>

      <br /><br />
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
