import React, { useState } from "react";
const newRecipe = {
title,
ingredients: ingredientList,
instructions: steps,
};


console.log("Submitted Recipe:", newRecipe);
alert("Recipe submitted! (Check console for details)");


setTitle("");
setIngredients("");
setSteps("");
;


return (
<div className="min-h-screen bg-gray-100 p-6 flex justify-center">
<form
onSubmit={handleSubmit}
className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl"
>
<h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>


{error && <p className="text-red-500 mb-3">{error}</p>}


<label className="block mb-3">
<span className="text-gray-700">Recipe Title</span>
<input
type="text"
className="w-full border p-2 rounded mt-1"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Enter recipe title"
/>
</label>


<label className="block mb-3">
<span className="text-gray-700">Ingredients (one per line)</span>
<textarea
className="w-full border p-2 rounded mt-1 h-28"
value={ingredients}
onChange={(e) => setIngredients(e.target.value)}
placeholder="e.g.
Sugar
Flour"
></textarea>
</label>


<label className="block mb-4">
<span className="text-gray-700">Preparation Steps</span>
<textarea
className="w-full border p-2 rounded mt-1 h-32"
value={steps}
onChange={(e) => setSteps(e.target.value)}
placeholder="Enter the cooking steps"
></textarea>
</label>


<button
type="submit"
className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
>
Submit Recipe
</button>
</form>
</div>
);
