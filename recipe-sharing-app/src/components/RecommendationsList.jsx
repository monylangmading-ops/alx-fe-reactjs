import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(
    state => state.generateRecommendations
  );

  return (
    <div>
      <h2>✨ Recommended For You</h2>

      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>

      {recommendations.length === 0 && <p>No recommendations yet.</p>}

      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ marginTop: "10px" }}>
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

export default RecommendationsList;
