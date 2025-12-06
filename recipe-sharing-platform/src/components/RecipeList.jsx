import { useState, useEffect } from "react";
import recipeData from "../data.json"; // notice the ../ because components is inside src/components

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
  {recipes.map((r) => (
    <div key={r.id} className="bg-white shadow rounded-lg p-4">
      <img src={r.image} alt={r.title} className="w-full h-48 object-cover rounded-md mb-3" />
      <h2 className="text-xl font-bold mb-2">{r.title}</h2>
      <p className="text-gray-600">{r.summary}</p>
    </div>
  ))}
</div>

  );
}

export default RecipeList;
