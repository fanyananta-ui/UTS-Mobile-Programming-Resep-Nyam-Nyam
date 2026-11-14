
// Estimasi biaya tiap bahan untuk 1 porsi masakan (rupiah).
// Acuan harga komoditas: PIHPS Bank Indonesia,
// rata-rata pasar Sukabumi, 13 November 2026.
// Nilai setiap bahan merupakan perkiraan biaya pemakaian per porsi,
// bukan harga pembelian satu kilogram atau satu kemasan penuh.

export const ingredientCost = {
  // Lauk & protein
  'telur': 2500,
  'tempe': 3500,
  'tahu': 3000,
  'ayam': 6500,
  'ikan': 7000,
  'udang': 10000,
  'teri': 3500,
  'sosis': 4000,
  'bakso': 4500,

  // Karbohidrat
  'nasi': 2500,
  'mie instan': 3500,
  'bihun': 3500,
  'roti': 4000,
  'kentang': 3500,
  'tepung terigu': 2000,

  // Sayuran
  'kol': 1500,
  'sawi': 1500,
  'wortel': 1500,
  'bayam': 1500,
  'kangkung': 1500,
  'tomat': 1500,
  'timun': 1000,
  'terong': 2500,
  'jagung': 3500,

  // Bumbu & bahan lainnya
  'bawang merah': 1500,
  'bawang putih': 1000,
  'cabai': 2000,
  'daun bawang': 1000,
  'kecap': 1500,
  'saus sambal': 1500,
  'santan': 3000,
  'susu': 2500,
  'keju': 3500,
  'margarin': 1500,
};

// Perkiraan biaya minyak, garam, merica, gula, dan gas.
export const BASE_COST = 1500;

// Menghitung estimasi biaya bahan untuk satu porsi.
export function getRecipeCost(recipe) {
  const total = recipe.ingredients.reduce(
    (sum, name) => sum + (ingredientCost[name] || 0),
    0
  );

  return total + BASE_COST;
}

// Mengubah angka menjadi format rupiah.
export function formatRupiah(value) {
  return 'Rp ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
