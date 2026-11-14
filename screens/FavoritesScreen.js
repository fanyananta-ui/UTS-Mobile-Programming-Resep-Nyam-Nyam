
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { getRecipeCost, formatRupiah } from '../data/prices';
import { colors } from '../theme';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesScreen({ navigation }) {
  const { favoriteIds, toggleFavorite, isFavorite } = useFavorites();

  // Menampilkan resep favorit dengan harga otomatis
  const favoriteRecipes = recipes
    .filter((recipe) => favoriteIds.includes(recipe.id))
    .map((recipe) => ({
      ...recipe,
      cost: formatRupiah(getRecipeCost(recipe)),
    }));

  // Membuka detail resep
  const openDetail = (recipe) => {
    navigation.getParent()?.navigate('Detail', {
      recipe,
      owned: [],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💗 Resep Favorit</Text>

      <Text style={styles.subtitle}>
        Kumpulan masakan kesukaanmu.
      </Text>

      <FlatList
        data={favoriteRecipes}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>💌</Text>

            <Text style={styles.emptyTitle}>
              Belum ada resep favorit
            </Text>

            <Text style={styles.emptyText}>
              Tekan ikon hati pada resep untuk menyimpannya di sini.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            showMatch={false}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={() => toggleFavorite(item)}
            onPress={() => openDetail(item)}
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
  title: {
    fontSize: 23,
    fontWeight: '900',
    color: colors.ink,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 13,
    color: colors.muted,
    marginBottom: 18,
  },
  list: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  empty: {
    alignItems: 'center',
    marginTop: 100,
    paddingHorizontal: 20,
  },
  emptyEmoji: {
    fontSize: 55,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: colors.ink,
  },
  emptyText: {
    fontSize: 13,
    color: colors.muted,
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 20,
  },
});
