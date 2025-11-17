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
    filteredRecipes: [],


    searchTerm: '',
    ingredientFilter: '',
    maxPrepTime: null,

    
    favorites: [],
    recommendations: [],

    addFavorite: (recipeId) =>
      set((state) => ({
        favorites: state.favorites.includes(recipeId)
          ? state.favorites
          : [...state.favorites, recipeId],
      })),

    removeFavorite: (recipeId) =>
      set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId),
      })),

    generateRecommendations: () =>
      set((state) => {
        
        const recommended = state.recipes.filter(
          (r) =>
            state.favorites.includes(r.id) &&
            Math.random() > 0.5 
        );

        return { recommendations: recommended };
      }),

    
    addRecipe: (newRecipe) =>
      set((state) => {
        const recipes = [...state.recipes, newRecipe];
        const newState = { recipes };
        return {
          ...newState,
          filteredRecipes: computeFiltered({ ...state, ...newState }),
        };
      }),

    updateRecipe: (id, updatedFields) =>
      set((state) => {
        const recipes = state.recipes.map((r) =>
          r.id === id ? { ...r, ...updatedFields } : r
        );
        const newState = { recipes };
        return {
          ...newState,
          filteredRecipes: computeFiltered({ ...state, ...newState }),
        };
      }),

    deleteRecipe: (id) =>
      set((state) => {
        const recipes = state.recipes.filter((r) => r.id !== id);
        const newState = { recipes };
        return {
          ...newState,
          filteredRecipes: computeFiltered({ ...state, ...newState }),
          favorites: state.favorites.filter((f) => f !== id), 
        };
      }),

    setRecipes: (recipes) =>
      set((state) => {
        const newState = { recipes: Array.isArray(recipes) ? recipes : [] };
        return {
          ...newState,
          filteredRecipes: computeFiltered({ ...state, ...newState }),
        };
      }),

    
    setSearchTerm: (val) =>
      set((state) => {
        const next = { ...state, searchTerm: val };
        return { searchTerm: val, filteredRecipes: computeFiltered(next) };
      }),

    setIngredientFilter: (val) =>
      set((state) => {
        const next = { ...state, ingredientFilter: val };
        return { ingredientFilter: val, filteredRecipes: computeFiltered(next) };
      }),

    setMaxPrepTime: (t) =>
      set((state) => {
        const next = { ...state, maxPrepTime: t };
        return { maxPrepTime: t, filteredRecipes: computeFiltered(next) };
      }),

    filterRecipes: () =>
      set((state) => ({ filteredRecipes: computeFiltered(state) })),

    getRecipe: (id) => get().recipes.find((r) => r.id === id),
  };
});

