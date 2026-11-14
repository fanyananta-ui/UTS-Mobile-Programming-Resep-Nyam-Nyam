
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

// props: label, emoji, selected, onPress
export default function IngredientChip({ label, emoji, selected, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, selected && styles.chipOn]}
      accessibilityRole="button"
      accessibilityState={{ selected }}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[styles.text, selected && styles.textOn]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 30,
    backgroundColor: colors.card,
    marginRight: 8,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: colors.peach,
    shadowColor: '#A77C98',
    shadowOpacity: 0.07,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  chipOn: {
    backgroundColor: colors.lavender,
    borderColor: '#C9B8E8',
  },
  emoji: {
    fontSize: 18,
    marginRight: 6,
  },
  text: {
    fontSize: 15,
    color: colors.ink,
    fontWeight: '700',
  },
  textOn: {
    color: '#69558B',
  },
});
