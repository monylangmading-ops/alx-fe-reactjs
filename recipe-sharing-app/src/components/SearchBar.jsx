import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const ingredientFilter = useRecipeStore((s) => s.ingredientFilter);
  const maxPrepTime = useRecipeStore((s) => s.maxPrepTime);

  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);
  const setIngredientFilter = useRecipeStore((s) => s.setIngredientFilter);
  const setMaxPrepTime = useRecipeStore((s) => s.setMaxPrepTime);

  return (
    <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 16,
      maxWidth: 900
    }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or description..."
        style={{ padding: 8, minWidth: 220 }}
      />

      <input
        type="text"
        value={ingredientFilter}
        onChange={(e) => setIngredientFilter(e.target.value)}
        placeholder="Filter by ingredient (e.g. 'garlic')"
        style={{ padding: 8, minWidth: 200 }}
      />

      <input
        type="number"
        value={maxPrepTime ?? ''}
        onChange={(e) => {
          const v = e.target.value;
          setMaxPrepTime(v === '' ? null : Number(v));
        }}
        placeholder="Max prep time (mins)"
        style={{ padding: 8, width: 160 }}
        min={0}
      />

      <button
        onClick={() => {
    
          setSearchTerm('');
          setIngredientFilter('');
          setMaxPrepTime(null);
        }}
        style={{ padding: '8px 12px' }}
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
