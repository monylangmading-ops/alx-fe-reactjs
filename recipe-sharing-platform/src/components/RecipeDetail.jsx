import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export default function RecipeDetail() {
const { id } = useParams();
const [recipe, setRecipe] = useState(null);


useEffect(() => {
fetch("/data.json")
.then(res => res.json())
.then(data => {
const item = data.find(r => r.id === Number(id));
setRecipe(item);
});
}, [id]);


if (!recipe) return <p className="p-6 text-center">Loading...</p>;


return (
<div className="p-6 bg-gray-100 min-h-screen">
<div className="max-w-2xl mx-auto bg-white p-5 rounded-lg shadow">
<img src={recipe.image} alt={recipe.title} className="w-full h-52 object-cover rounded mb-4" />


<h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>


<h2 className="text-lg font-semibold mb-2">Ingredients</h2>
<ul className="list-disc ml-5 mb-4 text-gray-700">
{recipe.ingredients.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>


<h2 className="text-lg font-semibold mb-2">Instructions</h2>
<p className="text-gray-700 mb-4">{recipe.instructions}</p>


<Link to="/" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Back</Link>
</div>
</div>
);
}