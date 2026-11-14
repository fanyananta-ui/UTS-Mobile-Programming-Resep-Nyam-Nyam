
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';
import { getRecipeCost, formatRupiah } from '../data/prices';

// props: recipe, matched, missing, onPress
export default function RecipeCard({ recipe, matched, missing, onPress }) {
  const complete = missing.length === 0;

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.iconBubble}>
        <Text style={styles.icon}>{recipe.emoji}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>{recipe.name}</Text>

        <Text style={styles.meta}>
          ⏱ {recipe.time}   💰 ± {formatRupiah(getRecipeCost(recipe))}
        </Text>

        <View style={[styles.badge, complete ? styles.badgeOk : styles.badgeWarn]}>
          <Text style={[styles.badgeText, complete && styles.badgeTextOk]}>
            {complete ? '✅ Semua bahan ada!' : `🛒 Kurang: ${missing.join(', ')}`}
          </Text>
        </View>

        <Text style={styles.count}>
          {matched.length}/{recipe.ingredients.length} bahan cocok
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: colors.peach,
    borderBottomWidth: 4,
    borderBottomColor: '#F0C9DC',
    shadowColor: '#A77C98',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  iconBubble: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: colors.lavender,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 32,
  },
  body: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.ink,
  },
  meta: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  badgeOk: {
    backgroundColor: colors.mintSoft,
  },
  badgeWarn: {
    backgroundColor: colors.peach,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.warn,
  },
  badgeTextOk: {
    color: '#4F9A79',
  },
  count: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 6,
  },
});
