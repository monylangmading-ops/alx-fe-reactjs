import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px"
      }}
    >
      <h2>Add New Recipe</h2>

      <input
        type="text"
        placeholder="Recipe title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "10px" }}
      />

      <textarea
        placeholder="Recipe description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "10px", height: "100px" }}
      ></textarea>

      <button type="submit" style={{ padding: "10px" }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
