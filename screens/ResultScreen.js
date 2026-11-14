
import React, { useEffect, useMemo } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import EmptyState from '../components/EmptyState';
import { recipes, ingredientEmoji } from '../data/recipes';
import { matchRecipes } from '../utils/matchRecipes';
import { colors, radius } from '../theme';

export default function ResultScreen({ route, navigation }) {
  // Props/params: daftar bahan dikirim dari HomeScreen lewat navigasi
  const { selected } = route.params;

  // useMemo: hitung ulang hanya kalau bahan berubah
  const results = useMemo(
    () => matchRecipes(recipes, selected),
    [selected]
  );

  // useEffect: judul halaman menyesuaikan jumlah hasil
  useEffect(() => {
    navigation.setOptions({ title: `${results.length} resep ditemukan` });
  }, [results.length, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingEmoji}>🧁</Text>
        <Text style={styles.headingTitle}>Pilihan Resepmu</Text>
        <Text style={styles.headingSubtitle}>
          Yuk, lihat masakan yang bisa kamu buat!
        </Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>🧺 Bahan yang kamu punya</Text>
        <Text style={styles.summaryText}>
          {selected.map((s) => `${ingredientEmoji[s]} ${s}`).join('   ')}
        </Text>
      </View>

      <Text style={styles.resultTitle}>
        ✨ Ditemukan {results.length} resep
      </Text>

      <FlatList
        data={results}
        keyExtractor={(item) => String(item.recipe.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <EmptyState
            title="Belum ada resep yang cocok"
            hint="Coba tambah bahan lain, misalnya telur atau bawang putih."
          />
        }
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item.recipe}
            matched={item.matched}
            missing={item.missing}
            onPress={() =>
              navigation.navigate('Detail', {
                recipe: item.recipe,
                owned: selected,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 16,
  },
  heading: {
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
  headingEmoji: {
    fontSize: 35,
    marginBottom: 5,
  },
  headingTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.ink,
  },
  headingSubtitle: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 5,
    textAlign: 'center',
  },
  summary: {
    backgroundColor: colors.lavender,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#D9CDEE',
  },
  summaryTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#69558B',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: '#69558B',
    lineHeight: 23,
    fontWeight: '700',
  },
  resultTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.ink,
    marginBottom: 12,
  },
  list: {
    paddingBottom: 24,
  },
});
