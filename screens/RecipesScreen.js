
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { getRecipeCost, formatRupiah } from '../data/prices';
import { colors } from '../theme';
import { useFavorites } from '../context/FavoritesContext';

export default function RecipesScreen({ navigation }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  // Membuka halaman detail resep
  const openDetail = (recipe) => {
    const recipeWithCost = {
      ...recipe,
      cost: formatRupiah(getRecipeCost(recipe)),
    };

    navigation.getParent()?.navigate('Detail', {
      recipe: recipeWithCost,
      owned: [],
    });
  };

  // Menampilkan semua resep dengan biaya otomatis
  const recipeList = recipes.map((recipe) => ({
    ...recipe,
    cost: formatRupiah(getRecipeCost(recipe)),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍳 Semua Resep</Text>

      <Text style={styles.subtitle}>
        Temukan inspirasi masakan untuk hari ini!
      </Text>

      <FlatList
        data={recipeList}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
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
    color: colors.muted,
    fontSize: 13,
    marginBottom: 18,
  },
  list: {
    paddingBottom: 20,
  },
});
