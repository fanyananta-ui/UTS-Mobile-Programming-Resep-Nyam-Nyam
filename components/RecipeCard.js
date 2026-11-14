
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';
import { getRecipeCost, formatRupiah } from '../data/prices';

export default function RecipeCard({
  recipe,
  matched = [],
  missing = [],
  onPress,
  isFavorite = false,
  onToggleFavorite,
  showMatch = true,
}) {
  const complete = missing.length === 0;

  return (
    <View style={styles.card}>
      <Pressable onPress={onPress} style={styles.main}>
        <View style={styles.iconBubble}>
          <Text style={styles.icon}>{recipe.emoji}</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.name}>{recipe.name}</Text>

          <Text style={styles.meta}>
            ⏱ {recipe.time}   💰 ± {formatRupiah(getRecipeCost(recipe))}
          </Text>

          {showMatch && (
            <>
              <View
                style={[
                  styles.badge,
                  complete ? styles.badgeOk : styles.badgeWarn,
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    complete && styles.badgeTextOk,
                  ]}
                >
                  {complete
                    ? '✅ Semua bahan ada!'
                    : `🛒 Kurang: ${missing.join(', ')}`}
                </Text>
              </View>

              <Text style={styles.count}>
                {matched.length}/{recipe.ingredients.length} bahan cocok
              </Text>
            </>
          )}
        </View>
      </Pressable>

      <Pressable
        onPress={onToggleFavorite}
        style={styles.favoriteButton}
        hitSlop={8}
      >
        <Text style={styles.favoriteIcon}>
          {isFavorite ? '❤️' : '🤍'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
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
  main: {
    flex: 1,
    flexDirection: 'row',
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
  favoriteButton: {
    padding: 8,
    marginLeft: 4,
    alignSelf: 'flex-start',
  },
  favoriteIcon: {
    fontSize: 23,
  },
});
