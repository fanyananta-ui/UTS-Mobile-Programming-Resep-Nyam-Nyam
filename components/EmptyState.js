
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';

// props: title, hint
export default function EmptyState({ title, hint }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.emoji}>🍽️</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.hint}>{hint}</Text>
      <Text style={styles.decoration}>♡  ✨  ♡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: 24,
    alignItems: 'center',
    marginTop: 40,
    borderWidth: 1.5,
    borderColor: colors.peach,
    shadowColor: '#A77C98',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  emoji: {
    fontSize: 56,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.ink,
    textAlign: 'center',
  },
  hint: {
    fontSize: 15,
    color: colors.muted,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 21,
  },
  decoration: {
    fontSize: 20,
    color: colors.primary,
    marginTop: 14,
    letterSpacing: 5,
  },
});
