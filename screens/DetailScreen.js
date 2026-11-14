
import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import StepList from '../components/StepList';
import { ingredientEmoji } from '../data/recipes';
import { ingredientCost, getRecipeCost, formatRupiah } from '../data/prices';
import { colors, radius } from '../theme';

export default function DetailScreen({ route, navigation }) {
  const { recipe, owned = [] } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: recipe.name });
  }, [navigation, recipe.name]);

  const totalCost = getRecipeCost(recipe);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>{recipe.emoji}</Text>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.meta}>
          ⏱ {recipe.time}    💰 ± {formatRupiah(totalCost)} / porsi
        </Text>
      </View>

      <Text style={styles.section}>🧺 Bahan-bahan</Text>

      <View style={styles.box}>
        {recipe.ingredients.map((item) => {
          const have = owned.includes(item);
          const price = ingredientCost[item] || 0;

          return (
            <View key={item} style={styles.ingRow}>
              <Text style={[styles.ing, have ? styles.have : styles.lack]}>
                {ingredientEmoji[item] || '🥬'}  {item}
              </Text>

              <Text style={have ? styles.haveNote : styles.lackNote}>
                {have
                  ? '✓ ada'
                  : `🛒 beli dulu · ${formatRupiah(price)}`}
              </Text>
            </View>
          );
        })}

        <Text style={styles.staple}>
          🧂 Garam, minyak, dan merica dianggap sudah ada.
        </Text>
      </View>

      <Text style={styles.section}>👩‍🍳 Cara membuat</Text>
      <StepList steps={recipe.steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  hero: {
    backgroundColor: colors.lavender,
    borderRadius: radius.lg,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#D9CDEE',
    borderBottomWidth: 5,
    borderBottomColor: '#C9B8E8',
  },
  heroEmoji: {
    fontSize: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.ink,
    marginTop: 6,
    textAlign: 'center',
  },
  meta: {
    fontSize: 14,
    color: colors.ink,
    marginTop: 6,
    fontWeight: '600',
    textAlign: 'center',
  },
  section: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.ink,
    marginTop: 24,
    marginBottom: 12,
  },
  box: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: 16,
    borderWidth: 1.5,
    borderColor: colors.peach,
    shadowColor: '#A77C98',
    shadowOpacity: 0.06,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  ingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
    gap: 6,
  },
  ing: {
    fontSize: 15,
    fontWeight: '700',
  },
  have: {
    color: '#4F9A79',
  },
  lack: {
    color: colors.warn,
  },
  haveNote: {
    fontSize: 13,
    color: '#4F9A79',
    fontWeight: '700',
  },
  lackNote: {
    fontSize: 13,
    color: colors.warn,
    fontWeight: '700',
  },
  staple: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 4,
    lineHeight: 20,
  },
});
