import React, { useState, useEffect } from "react";


export default function HomePage() {
const [recipes, setRecipes] = useState([]);


useEffect(() => {
fetch("/data.json")
.then((res) => res.json())
.then((data) => setRecipes(data))
.catch((err) => console.error("Error loading data:", err));
}, []);


return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{recipes.map((recipe) => (
<div
key={recipe.id}
className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 cursor-pointer hover:scale-[1.02]"
>
<img
src={recipe.image}
alt={recipe.title}
className="w-full h-40 object-cover rounded-xl mb-4"
/>
<h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
<p className="text-gray-600 text-sm">{recipe.summary}</p>


<button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
View Recipe
</button>
</div>
))}
</div>
</div>
);
}