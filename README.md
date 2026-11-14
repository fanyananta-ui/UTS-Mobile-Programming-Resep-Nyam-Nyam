Nama : Fany Ananta Rahmah  
NIM : 2430511045  
Kelas : 5C  
Mata Kuliah : Mobile Programming Native  
Program Studi : Teknik Informatika  

# 🍳 Resep Nyam-Nyam

**Resep Nyam-Nyam** merupakan aplikasi mobile berbasis React Native yang membantu pengguna menemukan ide masakan berdasarkan bahan makanan yang tersedia. Aplikasi ini dibuat untuk memudahkan pengguna, khususnya anak kos, yang sering bingung ingin memasak apa dengan bahan yang dimiliki.

Pengguna dapat memilih beberapa bahan makanan yang tersedia, kemudian aplikasi akan menampilkan rekomendasi resep yang sesuai beserta bahan yang masih kurang, estimasi biaya, waktu memasak, dan langkah-langkah pembuatannya.

## ✨ Fitur Aplikasi

1. **Pilih Bahan Makanan**  
   Pengguna dapat memilih bahan makanan yang tersedia.

2. **Rekomendasi Resep**  
   Aplikasi menampilkan rekomendasi resep berdasarkan bahan yang dipilih.

3. **Informasi Bahan**  
   Menampilkan bahan yang sudah tersedia dan bahan yang masih kurang.

4. **Estimasi Biaya**  
   Menampilkan perkiraan biaya bahan untuk satu porsi masakan.

5. **Estimasi Waktu Memasak**  
   Menampilkan perkiraan waktu yang dibutuhkan untuk memasak.

6. **Langkah Memasak**  
   Menampilkan tahapan pembuatan resep yang dapat ditandai setelah selesai dilakukan.

7. **Reset Pilihan Bahan**  
   Pengguna dapat menghapus semua pilihan bahan dan memilih kembali dari awal.

## 🛠️ Teknologi yang Digunakan

- React Native
- JavaScript
- Expo
- React Navigation
- React Hooks (`useState`, `useEffect`, `useMemo`, dan `useLayoutEffect`)

## 📱 Halaman Aplikasi

Aplikasi Resep Nyam-Nyam memiliki tiga halaman utama:

- **Home:** Halaman untuk memilih bahan makanan yang tersedia.
- **Result:** Halaman untuk menampilkan rekomendasi resep berdasarkan bahan yang dipilih.
- **Detail:** Halaman untuk melihat informasi resep, bahan-bahan, estimasi biaya, waktu memasak, dan langkah-langkah pembuatan.

## 📂 Struktur Folder

```text
resep-nyam-nyam/
│
├── assets/
├── components/
│   ├── EmptyState.js
│   ├── Header.js
│   ├── IngredientChip.js
│   ├── RecipeCard.js
│   └── StepList.js
│
├── data/
│   ├── prices.js
│   └── recipes.js
│
├── screens/
│   ├── HomeScreen.js
│   ├── ResultScreen.js
│   └── DetailScreen.js
│
├── utils/
│   └── matchRecipes.js
│
├── theme/
├── App.js
├── package.json
└── README.md
```

## ⚙️ Cara Menjalankan Aplikasi

1. Pastikan Node.js dan npm sudah terpasang di komputer.
2. Clone repository GitHub atau download project.
3. Buka folder project melalui Visual Studio Code.
4. Buka terminal pada folder project.
5. Jalankan perintah berikut untuk menginstal dependencies:

```bash
npm install
```

6. Jalankan aplikasi menggunakan Expo:

```bash
npx expo start
```

7. Scan QR Code menggunakan aplikasi Expo Go atau jalankan melalui emulator Android.

## 📚 Implementasi Materi UTS

Aplikasi ini dibuat dengan menerapkan beberapa konsep dalam React Native, yaitu:

- **Components:** Menggunakan beberapa komponen terpisah seperti Header, IngredientChip, RecipeCard, EmptyState, dan StepList.
- **State:** Menggunakan `useState` untuk menyimpan pilihan bahan makanan dan status langkah memasak.
- **Props:** Digunakan untuk mengirimkan data dari komponen utama ke komponen lainnya.
- **Navigation:** Menggunakan React Navigation untuk berpindah dari halaman Home, Result, hingga Detail.
- **Hooks:** Menggunakan `useState`, `useEffect`, `useMemo`, dan `useLayoutEffect` untuk mengelola data serta perilaku aplikasi.

## 🎯 Tujuan Pembuatan

Aplikasi Resep Nyam-Nyam dibuat sebagai project Ujian Tengah Semester (UTS) mata kuliah Mobile Programming Native. Tujuan pembuatan aplikasi ini adalah untuk menerapkan konsep React Native, mulai dari penggunaan komponen, State, Props, Navigation, hingga Hooks dalam sebuah aplikasi mobile yang memiliki manfaat bagi pengguna.

---
