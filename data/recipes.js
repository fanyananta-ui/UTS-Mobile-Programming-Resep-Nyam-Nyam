// Data resep ditulis manual, jadi tidak perlu API/backend.
// Bumbu dasar (garam, minyak, gula, merica) dianggap selalu ada.

// Bahan dikelompokkan supaya tampilan rapi
export const ingredientGroups = [
  {
    title: '🍗 Lauk & Protein',
    items: ['telur', 'tempe', 'tahu', 'ayam', 'ikan', 'udang', 'teri', 'sosis', 'bakso'],
  },
  {
    title: '🍚 Karbo',
    items: ['nasi', 'mie instan', 'bihun', 'roti', 'kentang', 'tepung terigu'],
  },
  {
    title: '🥬 Sayur',
    items: ['kol', 'sawi', 'wortel', 'bayam', 'kangkung', 'tomat', 'timun', 'terong', 'jagung'],
  },
  {
    title: '🧄 Bumbu & Lainnya',
    items: ['bawang merah', 'bawang putih', 'cabai', 'daun bawang', 'kecap', 'saus sambal', 'santan', 'susu', 'keju', 'margarin'],
  },
];

// Daftar datar semua bahan (dipakai kalau butuh)
export const allIngredients = ingredientGroups.flatMap((g) => g.items);

// Emoji untuk tiap bahan (dipakai di chip dan detail resep)
export const ingredientEmoji = {
  'telur': '🥚', 'tempe': '🟫', 'tahu': '🧊', 'ayam': '🍗', 'ikan': '🐟',
  'udang': '🦐', 'teri': '🐟', 'sosis': '🌭', 'bakso': '🍡',
  'nasi': '🍚', 'mie instan': '🍜', 'bihun': '🍝', 'roti': '🍞',
  'kentang': '🥔', 'tepung terigu': '🌾',
  'kol': '🥬', 'sawi': '🥬', 'wortel': '🥕', 'bayam': '🌿', 'kangkung': '🌱',
  'tomat': '🍅', 'timun': '🥒', 'terong': '🍆', 'jagung': '🌽',
  'bawang merah': '🧅', 'bawang putih': '🧄', 'cabai': '🌶️', 'daun bawang': '🌱',
  'kecap': '🍶', 'saus sambal': '🥫', 'santan': '🥥', 'susu': '🥛',
  'keju': '🧀', 'margarin': '🧈',
};

export const recipes = [
  {
    id: 1, emoji: '🍳', name: 'Telur Dadar Tempe', time: '15 menit', cost: 'Rp 8.000',
    ingredients: ['telur', 'tempe', 'bawang merah', 'cabai'],
    steps: ['Potong dadu kecil tempe, iris bawang merah dan cabai.', 'Kocok telur, campur semua bahan, beri garam.', 'Goreng di wajan beralas sedikit minyak sampai kedua sisi kuning keemasan.'],
  },
  {
    id: 2, emoji: '🥢', name: 'Tempe Orek Kecap', time: '15 menit', cost: 'Rp 7.000',
    ingredients: ['tempe', 'kecap', 'bawang merah', 'bawang putih', 'cabai'],
    steps: ['Potong tempe tipis-tipis lalu goreng setengah matang.', 'Tumis irisan bawang merah, bawang putih, dan cabai sampai harum.', 'Masukkan tempe dan kecap, aduk sampai bumbu meresap.'],
  },
  {
    id: 3, emoji: '🌶️', name: 'Telur Balado', time: '20 menit', cost: 'Rp 9.000',
    ingredients: ['telur', 'cabai', 'bawang merah', 'tomat'],
    steps: ['Rebus telur 10 menit, kupas, goreng sebentar sampai kulitnya agak kecokelatan.', 'Haluskan cabai, bawang merah, dan tomat lalu tumis sampai matang.', 'Masukkan telur, aduk rata dengan sambal.'],
  },
  {
    id: 4, emoji: '🍚', name: 'Nasi Goreng Telur', time: '15 menit', cost: 'Rp 8.000',
    ingredients: ['nasi', 'telur', 'kecap', 'bawang putih', 'bawang merah'],
    steps: ['Tumis bawang merah dan bawang putih cincang sampai harum.', 'Masukkan telur, orak-arik sebentar.', 'Tambahkan nasi dan kecap, aduk rata di api besar.'],
  },
  {
    id: 5, emoji: '🍲', name: 'Tahu Telur Kecap', time: '15 menit', cost: 'Rp 8.000',
    ingredients: ['tahu', 'telur', 'kecap', 'bawang putih'],
    steps: ['Goreng potongan tahu sampai kuning.', 'Tumis bawang putih, masukkan telur dan orak-arik.', 'Masukkan tahu dan kecap, aduk sampai meresap.'],
  },
  {
    id: 6, emoji: '🍜', name: 'Mie Instan Telur Sayur', time: '10 menit', cost: 'Rp 7.000',
    ingredients: ['mie instan', 'telur', 'kol'],
    steps: ['Rebus mie bersama irisan kol.', 'Pecahkan telur ke dalam rebusan di menit terakhir.', 'Angkat, tambahkan bumbu mie, sajikan hangat.'],
  },
  {
    id: 7, emoji: '🥬', name: 'Tumis Kol Telur', time: '15 menit', cost: 'Rp 7.000',
    ingredients: ['kol', 'telur', 'bawang putih', 'cabai'],
    steps: ['Iris kol, cincang bawang putih dan cabai.', 'Tumis bumbu, masukkan telur dan orak-arik.', 'Masukkan kol, beri garam, masak sampai layu.'],
  },
  {
    id: 8, emoji: '🍅', name: 'Sambal Tempe Penyet', time: '20 menit', cost: 'Rp 8.000',
    ingredients: ['tempe', 'cabai', 'tomat', 'bawang putih'],
    steps: ['Goreng tempe sampai matang.', 'Ulek cabai, tomat (goreng sebentar), bawang putih, dan garam.', 'Penyet tempe di atas sambal dan aduk.'],
  },
  {
    id: 9, emoji: '🍢', name: 'Tahu Goreng Sambal Kecap', time: '15 menit', cost: 'Rp 6.000',
    ingredients: ['tahu', 'kecap', 'cabai', 'bawang merah'],
    steps: ['Goreng tahu sampai kulitnya garing.', 'Iris cabai dan bawang merah, campur dengan kecap.', 'Siram sambal kecap di atas tahu.'],
  },
  {
    id: 10, emoji: '🥕', name: 'Sayur Sop Sederhana', time: '25 menit', cost: 'Rp 10.000',
    ingredients: ['wortel', 'kentang', 'kol', 'bawang putih'],
    steps: ['Tumis bawang putih sampai harum, tambahkan air.', 'Masukkan kentang dan wortel, masak 10 menit.', 'Masukkan kol, beri garam dan merica, masak sampai matang.'],
  },
  {
    id: 11, emoji: '🌭', name: 'Omelet Sosis', time: '10 menit', cost: 'Rp 8.000',
    ingredients: ['telur', 'sosis', 'bawang putih'],
    steps: ['Iris sosis dan cincang bawang putih.', 'Kocok telur dengan sosis dan bawang putih.', 'Goreng sampai matang di kedua sisi.'],
  },
  {
    id: 12, emoji: '🥔', name: 'Perkedel Kentang', time: '30 menit', cost: 'Rp 9.000',
    ingredients: ['kentang', 'telur', 'bawang putih'],
    steps: ['Rebus kentang sampai empuk, haluskan.', 'Campur bawang putih halus, garam, dan sedikit telur.', 'Bentuk bulat pipih, celup telur kocok, goreng sampai kuning.'],
  },
  {
    id: 13, emoji: '🍗', name: 'Ayam Kecap Praktis', time: '30 menit', cost: 'Rp 15.000',
    ingredients: ['ayam', 'kecap', 'bawang putih', 'bawang merah'],
    steps: ['Tumis bawang merah dan bawang putih sampai harum.', 'Masukkan potongan ayam, masak sampai berubah warna.', 'Tambahkan kecap dan sedikit air, masak sampai ayam empuk dan bumbu mengental.'],
  },
  {
    id: 14, emoji: '🌱', name: 'Tumis Kangkung Bawang Putih', time: '10 menit', cost: 'Rp 5.000',
    ingredients: ['kangkung', 'bawang putih', 'bawang merah', 'cabai'],
    steps: ['Petik kangkung, cuci bersih, iris bawang dan cabai.', 'Tumis bawang putih, bawang merah, dan cabai sampai harum.', 'Masukkan kangkung, beri garam, aduk cepat di api besar sekitar 2 menit.'],
  },
  {
    id: 15, emoji: '🍃', name: 'Sayur Bayam Bening', time: '15 menit', cost: 'Rp 6.000',
    ingredients: ['bayam', 'jagung', 'bawang merah', 'bawang putih'],
    steps: ['Didihkan air bersama irisan bawang merah dan bawang putih.', 'Masukkan jagung pipil atau potongan jagung, masak 5 menit.', 'Masukkan bayam, beri garam, angkat setelah layu.'],
  },
  {
    id: 16, emoji: '🥘', name: 'Capcay Sederhana', time: '20 menit', cost: 'Rp 12.000',
    ingredients: ['kol', 'sawi', 'wortel', 'bakso', 'bawang putih'],
    steps: ['Iris semua sayur dan belah bakso.', 'Tumis bawang putih, masukkan wortel dan bakso, tambahkan sedikit air.', 'Masukkan kol dan sawi, beri garam dan merica, masak sampai layu.'],
  },
  {
    id: 17, emoji: '🍆', name: 'Terong Balado', time: '20 menit', cost: 'Rp 7.000',
    ingredients: ['terong', 'cabai', 'bawang merah', 'tomat'],
    steps: ['Potong terong, goreng sampai empuk lalu tiriskan.', 'Haluskan cabai, bawang merah, dan tomat, lalu tumis sampai matang.', 'Masukkan terong, aduk rata sebentar.'],
  },
  {
    id: 18, emoji: '🌽', name: 'Bakwan Jagung', time: '20 menit', cost: 'Rp 8.000',
    ingredients: ['jagung', 'tepung terigu', 'telur', 'daun bawang'],
    steps: ['Campur jagung pipil, tepung terigu, telur, dan irisan daun bawang.', 'Tambahkan sedikit air dan garam sampai adonan kental.', 'Sendokkan ke minyak panas, goreng sampai kuning keemasan.'],
  },
  {
    id: 19, emoji: '🥞', name: 'Bakwan Sayur', time: '20 menit', cost: 'Rp 7.000',
    ingredients: ['kol', 'wortel', 'tepung terigu', 'daun bawang'],
    steps: ['Iris tipis kol, wortel, dan daun bawang.', 'Campur dengan tepung terigu, air, dan garam sampai adonan kental.', 'Goreng sesendok demi sesendok sampai garing.'],
  },
  {
    id: 20, emoji: '🍘', name: 'Tempe Mendoan', time: '20 menit', cost: 'Rp 6.000',
    ingredients: ['tempe', 'tepung terigu', 'daun bawang', 'bawang putih'],
    steps: ['Iris tempe tipis lebar.', 'Buat adonan dari tepung terigu, air, daun bawang iris, bawang putih halus, dan garam.', 'Celup tempe, goreng sebentar saja agar tetap lembut dan setengah matang.'],
  },
  {
    id: 21, emoji: '🐟', name: 'Ikan Goreng Sambal Tomat', time: '25 menit', cost: 'Rp 14.000',
    ingredients: ['ikan', 'cabai', 'tomat', 'bawang merah'],
    steps: ['Bumbui ikan dengan garam, lalu goreng sampai matang.', 'Ulek cabai, tomat, dan bawang merah, tumis sebentar.', 'Sajikan ikan dengan sambal tomat.'],
  },
  {
    id: 22, emoji: '🍤', name: 'Ikan Bumbu Kecap', time: '25 menit', cost: 'Rp 14.000',
    ingredients: ['ikan', 'kecap', 'bawang putih', 'cabai'],
    steps: ['Goreng ikan sampai kuning, sisihkan.', 'Tumis bawang putih dan cabai iris sampai harum.', 'Masukkan kecap dan sedikit air, lalu ikan, masak sampai bumbu meresap.'],
  },
  {
    id: 23, emoji: '🦐', name: 'Udang Saus Sambal', time: '15 menit', cost: 'Rp 18.000',
    ingredients: ['udang', 'saus sambal', 'bawang putih'],
    steps: ['Bersihkan udang, beri sedikit garam.', 'Tumis bawang putih sampai harum, masukkan udang sampai berubah warna.', 'Tambahkan saus sambal dan sedikit air, masak sampai mengental.'],
  },
  {
    id: 24, emoji: '🍡', name: 'Bakso Kuah Hangat', time: '15 menit', cost: 'Rp 10.000',
    ingredients: ['bakso', 'bawang putih', 'daun bawang', 'wortel'],
    steps: ['Tumis bawang putih sampai harum, tambahkan air hingga mendidih.', 'Masukkan wortel dan bakso, masak 8 menit.', 'Beri garam, merica, dan taburan daun bawang.'],
  },
  {
    id: 25, emoji: '🍝', name: 'Mie Goreng Sederhana', time: '15 menit', cost: 'Rp 8.000',
    ingredients: ['mie instan', 'telur', 'kecap', 'bawang putih', 'sawi'],
    steps: ['Rebus mie setengah matang lalu tiriskan.', 'Tumis bawang putih, masukkan telur dan orak-arik, tambahkan sawi.', 'Masukkan mie, kecap, dan bumbu mie, aduk rata.'],
  },
  {
    id: 26, emoji: '🥡', name: 'Bihun Goreng', time: '20 menit', cost: 'Rp 9.000',
    ingredients: ['bihun', 'telur', 'wortel', 'bawang putih', 'kecap'],
    steps: ['Rendam bihun dengan air panas sampai lunak, tiriskan.', 'Tumis bawang putih, telur, dan wortel iris tipis.', 'Masukkan bihun dan kecap, aduk sampai rata dan matang.'],
  },
  {
    id: 27, emoji: '🥪', name: 'Roti Bakar Telur Keju', time: '10 menit', cost: 'Rp 10.000',
    ingredients: ['roti', 'telur', 'keju', 'margarin'],
    steps: ['Olesi roti dengan margarin.', 'Taruh telur ceplok dan keju di atas roti.', 'Panggang di wajan dengan api kecil sampai keju meleleh.'],
  },
  {
    id: 28, emoji: '🍞', name: 'Roti Goreng Telur Susu', time: '10 menit', cost: 'Rp 8.000',
    ingredients: ['roti', 'telur', 'susu', 'margarin'],
    steps: ['Kocok telur dengan susu dan sedikit gula.', 'Celup roti sampai meresap.', 'Panggang dengan margarin sampai kedua sisi kecokelatan.'],
  },
  {
    id: 29, emoji: '🍟', name: 'Kentang Balado', time: '25 menit', cost: 'Rp 8.000',
    ingredients: ['kentang', 'cabai', 'bawang merah'],
    steps: ['Potong kentang dadu lalu goreng sampai kuning.', 'Ulek cabai dan bawang merah, tumis sampai harum.', 'Masukkan kentang, aduk rata dengan sambal.'],
  },
  {
    id: 30, emoji: '🍲', name: 'Sop Ayam Sederhana', time: '35 menit', cost: 'Rp 16.000',
    ingredients: ['ayam', 'wortel', 'kentang', 'daun bawang', 'bawang putih'],
    steps: ['Rebus ayam dengan bawang putih sampai empuk.', 'Masukkan wortel dan kentang, masak sampai empuk.', 'Beri garam, merica, dan taburan daun bawang.'],
  },
  {
    id: 31, emoji: '🥥', name: 'Telur Masak Santan', time: '20 menit', cost: 'Rp 10.000',
    ingredients: ['telur', 'santan', 'cabai', 'bawang merah', 'bawang putih'],
    steps: ['Rebus telur, kupas, lalu goreng sebentar.', 'Tumis bawang merah, bawang putih, dan cabai sampai harum.', 'Tuang santan dan garam, masukkan telur, masak sampai bumbu meresap.'],
  },
  {
    id: 32, emoji: '🍛', name: 'Sayur Lodeh Mini', time: '25 menit', cost: 'Rp 10.000',
    ingredients: ['terong', 'kol', 'santan', 'bawang merah', 'bawang putih', 'cabai'],
    steps: ['Haluskan bawang merah, bawang putih, dan cabai lalu tumis.', 'Tuang santan dan air, masak sampai mendidih.', 'Masukkan terong dan kol, beri garam, masak sampai empuk.'],
  },
  {
    id: 33, emoji: '🐠', name: 'Teri Balado', time: '15 menit', cost: 'Rp 8.000',
    ingredients: ['teri', 'cabai', 'bawang merah'],
    steps: ['Goreng teri sampai garing, tiriskan.', 'Ulek cabai dan bawang merah, tumis sampai harum.', 'Masukkan teri, aduk rata.'],
  },
  {
    id: 34, emoji: '🥒', name: 'Timun Sambal Tomat', time: '10 menit', cost: 'Rp 5.000',
    ingredients: ['timun', 'tomat', 'cabai', 'bawang merah'],
    steps: ['Ulek cabai, tomat, bawang merah, dan garam kasar.', 'Iris timun.', 'Sajikan timun dengan sambal tomat segar.'],
  },
  {
    id: 35, emoji: '🍚', name: 'Nasi Goreng Teri', time: '15 menit', cost: 'Rp 9.000',
    ingredients: ['nasi', 'teri', 'cabai', 'bawang merah', 'bawang putih', 'kecap'],
    steps: ['Goreng teri sampai garing, sisihkan.', 'Tumis bawang merah, bawang putih, dan cabai sampai harum.', 'Masukkan nasi, kecap, dan teri, aduk rata di api besar.'],
  },
  {
    id: 36, emoji: '🍗', name: 'Ayam Goreng Tepung', time: '30 menit', cost: 'Rp 15.000',
    ingredients: ['ayam', 'tepung terigu', 'bawang putih', 'telur'],
    steps: ['Lumuri ayam dengan bawang putih halus dan garam, diamkan 10 menit.', 'Celup ke telur kocok lalu gulingkan di tepung terigu.', 'Goreng dengan api sedang sampai matang dan renyah.'],
  },
  {
    id: 37, emoji: '🧈', name: 'Tahu Crispy', time: '15 menit', cost: 'Rp 6.000',
    ingredients: ['tahu', 'tepung terigu', 'bawang putih'],
    steps: ['Potong tahu, lumuri bawang putih halus dan garam.', 'Gulingkan ke tepung terigu.', 'Goreng sampai kuning dan renyah.'],
  },
  {
    id: 38, emoji: '🌽', name: 'Sup Jagung Telur', time: '15 menit', cost: 'Rp 8.000',
    ingredients: ['jagung', 'telur', 'wortel', 'daun bawang'],
    steps: ['Rebus jagung dan wortel potong kecil sampai empuk.', 'Tuang telur kocok perlahan sambil diaduk.', 'Beri garam dan merica, taburi daun bawang.'],
  },
  {
    id: 39, emoji: '🥫', name: 'Telur Saus Sambal', time: '10 menit', cost: 'Rp 7.000',
    ingredients: ['telur', 'saus sambal', 'bawang putih'],
    steps: ['Goreng telur ceplok sampai matang.', 'Tumis bawang putih, masukkan saus sambal dan sedikit air.', 'Siram saus di atas telur.'],
  },
];