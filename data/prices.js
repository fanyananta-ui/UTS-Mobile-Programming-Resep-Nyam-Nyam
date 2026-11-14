// Biaya tiap bahan untuk 1 porsi masakan (dalam rupiah).
// Acuan: harga pasar tradisional Kota Sukabumi (Pasar Pelita & Tipar Gede)
// yang dipantau Diskumindag, ditambah perkiraan harga eceran untuk bahan lain.
// Kalau harga berubah, cukup ganti angka di sini.
export const ingredientCost = {
  // Lauk & protein
  'telur': 3500,        // 2 butir (telur ±Rp26.000/kg)
  'tempe': 3000,
  'tahu': 3000,
  'ayam': 6000,         // ±150 gram (ayam ±Rp39.000/kg)
  'ikan': 6000,
  'udang': 9000,
  'teri': 3000,
  'sosis': 3000,
  'bakso': 4000,
  // Karbo
  'nasi': 2000,
  'mie instan': 3500,
  'bihun': 3000,
  'roti': 3000,
  'kentang': 3000,
  'tepung terigu': 1500,
  // Sayur
  'kol': 2000,
  'sawi': 2000,
  'wortel': 1500,
  'bayam': 2000,
  'kangkung': 2000,
  'tomat': 1000,
  'timun': 1000,
  'terong': 2000,
  'jagung': 3000,
  // Bumbu & lainnya
  'bawang merah': 1000, // ±Rp32.000/kg
  'bawang putih': 500,  // ±Rp30.000/kg
  'cabai': 1500,        // cabai harganya paling sering berubah
  'daun bawang': 1000,
  'kecap': 1000,
  'saus sambal': 1000,
  'santan': 2500,
  'susu': 2000,
  'keju': 3000,
  'margarin': 1000,
};

// Minyak goreng, garam, merica, gula, dan gas (dibulatkan)
export const BASE_COST = 1000;

// Hitung biaya 1 porsi resep = jumlah biaya semua bahan + biaya dasar
export function getRecipeCost(recipe) {
  const total = recipe.ingredients.reduce(
    (sum, name) => sum + (ingredientCost[name] || 0),
    0
  );
  return total + BASE_COST;
}

// Ubah angka jadi tulisan rupiah, contoh: 9000 -> "Rp 9.000"
export function formatRupiah(value) {
  return 'Rp ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}