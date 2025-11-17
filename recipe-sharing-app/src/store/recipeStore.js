
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => {

  const computeFiltered = (state) => {
    const term = (state.searchTerm || '').toLowerCase().trim();
    const ingredient = (state.ingredientFilter || '').toLowerCase().trim();
    const maxTime = state.maxPrepTime != null ? Number(state.maxPrepTime) : null;

    if (!Array.isArray(state.recipes)) return [];

    return state.recipes.filter((r) => {
      
      const titleMatch = r.title?.toLowerCase().includes(term);
      const descMatch = r.description?.toLowerCase().includes(term);

      const termMatches = term === '' ? true : (titleMatch || descMatch);


      let ingredientMatches = true;
      if (ingredient) {
        const ingredients = Array.isArray(r.ingredients)
          ? r.ingredients.join(' ').toLowerCase()
          : (r.ingredients || '').toLowerCase();
        ingredientMatches = ingredients.includes(ingredient);
      }

      
      let timeMatches = true;
      if (maxTime !== null && !Number.isNaN(maxTime)) {
        const prep = r.prepTime != null ? Number(r.prepTime) : Infinity;
        timeMatches = prep <= maxTime;
      }

      return termMatches && ingredientMatches && timeMatches;
    });
  };

  return {

    recipes: [],


    searchTerm: '',
    ingredientFilter: '',
    maxPrepTime: null, 


    filteredRecipes: [],


    addRecipe: (newRecipe) =>
      set((state) => {
        const recipes = [...state.recipes, newRecipe];
        const newState = { recipes };
        newState.filteredRecipes = computeFiltered({ ...state, ...newState });
        return newState;
      }),

    updateRecipe: (id, updatedFields) =>
      set((state) => {
        const recipes = state.recipes.map((r) => (r.id === id ? { ...r, ...updatedFields } : r));
        const newState = { recipes };
        newState.filteredRecipes = computeFiltered({ ...state, ...newState });
        return newState;
      }),

    deleteRecipe: (id) =>
      set((state) => {
        const recipes = state.recipes.filter((r) => r.id !== id);
        const newState = { recipes };
        newState.filteredRecipes = computeFiltered({ ...state, ...newState });
        return newState;
      }),

    setRecipes: (recipes) =>
      set((state) => {
        const newState = { recipes: Array.isArray(recipes) ? recipes : [] };
        newState.filteredRecipes = computeFiltered({ ...state, ...newState });
        return newState;
      }),

    
    setSearchTerm: (term) =>
      set((state) => {
        const nextState = { ...state, searchTerm: term };
        return { searchTerm: term, filteredRecipes: computeFiltered(nextState) };
      }),

    setIngredientFilter: (ing) =>
      set((state) => {
        const nextState = { ...state, ingredientFilter: ing };
        return { ingredientFilter: ing, filteredRecipes: computeFiltered(nextState) };
      }),

    setMaxPrepTime: (t) =>
      set((state) => {
        const nextState = { ...state, maxPrepTime: t };
        return { maxPrepTime: t, filteredRecipes: computeFiltered(nextState) };
      }),

    
    filterRecipes: () =>
      set((state) => ({ filteredRecipes: computeFiltered(state) })),

    getRecipe: (id) => get().recipes.find((r) => r.id === id),
  };
});
