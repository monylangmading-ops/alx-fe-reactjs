
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm('Are you sure you want to delete this recipe?')) return;
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: 'red', padding: '6px 10px', borderRadius: 6 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
