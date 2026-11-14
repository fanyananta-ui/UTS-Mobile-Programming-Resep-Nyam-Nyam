// Mencocokkan bahan yang dimiliki user dengan semua resep.
// Hasil: resep yang punya minimal 1 bahan cocok,
// diurutkan dari yang kekurangan bahannya paling sedikit.
export function matchRecipes(recipes, selected) {
  return recipes
    .map((recipe) => {
      const matched = recipe.ingredients.filter((i) => selected.includes(i));
      const missing = recipe.ingredients.filter((i) => !selected.includes(i));
      return { recipe, matched, missing };
    })
    .filter((item) => item.matched.length > 0)
    .sort(
      (a, b) =>
        a.missing.length - b.missing.length ||
        b.matched.length - a.matched.length
    );
}