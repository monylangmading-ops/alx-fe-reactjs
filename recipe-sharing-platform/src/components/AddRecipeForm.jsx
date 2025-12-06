import React, { useState } from "react";

export default function AddRecipeForm();
const [title, setTitle] = useState("");
const [ingredients, setIngredients] = useState("");
const [steps, setSteps] = useState("");
const [errors, setErrors] = useState({});


const validate = () => {
const newErrors = {};


if (!title.trim()) newErrors.title = "Title is required.";


const ingredientList = ingredients
.split("")
.map((i) => i.trim())
.filter(Boolean);


if (ingredientList.length < 2)
newErrors.ingredients = "Please enter at least two ingredients (one per line).";


if (!steps.trim()) newErrors.steps = "Preparation steps are required.";


return newErrors;
};


const handleSubmit = (e) => 
e.preventDefault();


const newErrors = validate();
setErrors(newErrors);


if (Object.keys(newErrors).length > 0) return;


const newRecipe = {
id: Date.now(),
title: title.trim(),
ingredients: ingredients
.split("")
.map((i) => i.trim())
.filter(Boolean),
instructions: steps.trim(),
image: "https://via.placeholder.com/150",
};
const stored = JSON.parse(localStorage.getItem("recipes") || "[]");
stored.push(newRecipe);
localStorage.setItem("recipes", JSON.stringify(stored));

setTitle("");
setIngredients("");
setSteps("");
setErrors({});


alert("Recipe added successfully!");
;


return (
<div className="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
<form
onSubmit={handleSubmit}
className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl"
>
<h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>


<label className="block mb-3">
<span className="text-gray-700">Recipe Title</span>
<input
type="text"
className="w-full border p-2 rounded mt-1"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="e.g. Chocolate Cake"
/>
{errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
</label>


<label className="block mb-3">
<span className="text-gray-700">Ingredients (one per line)</span>
<textarea
className="w-full border p-2 rounded mt-1 h-28"
value={ingredients}
onChange={(e) => setIngredients(e.target.value)}
placeholder={`e.g.
1 cup sugar
2 cups flour`}
></textarea>
{errors.ingredients && (
<p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
)}
</label>


<label className="block mb-4">
<span className="text-gray-700">Preparation Steps</span>
<textarea
className="w-full border p-2 rounded mt-1 h-32"
value={steps}
onChange={(e) => setSteps(e.target.value)}
placeholder="Write the steps to prepare the recipe"
></textarea>
{errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
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
