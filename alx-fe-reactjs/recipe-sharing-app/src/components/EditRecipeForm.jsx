import { useRecipeStore } from "../recipeStore";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");
  const [prepTime, setPrepTime] = useState(recipe?.prepTime || "");
  const [ingredients, setIngredients] = useState(
    (recipe?.ingredients || []).join(", ")
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateRecipe(recipeId, {
      title,
      description,
      prepTime,
      ingredients: ingredients.split(",").map(i => i.trim())
    });

    navigate(`/recipe/${recipeId}`);
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <input
        type="number"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
        placeholder="Prep Time"
      />
      <input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
