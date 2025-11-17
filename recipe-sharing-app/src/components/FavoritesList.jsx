import { useRecipeStore } from "../recipeStore";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore();
  const favRecipes = favorites
    .map(id => recipes.find(r => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>💖 My Favorite Recipes</h2>

      {favRecipes.length === 0 && <p>No favorites yet.</p>}

      {favRecipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: "12px" }}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>

          <p>{recipe.description}</p>

          <FavoriteButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
