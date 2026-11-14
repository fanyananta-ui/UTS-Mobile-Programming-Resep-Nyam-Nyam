
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';

// props: title, subtitle
export default function Header({ title, subtitle }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.decorationTop}>✦  ♡  ✦</Text>

      <View style={styles.toolsBox}>
        <Text style={styles.tools}>🍳  🥄  🍴  🥢  🔪</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      {subtitle ? (
        <Text style={styles.subtitle}>{subtitle}</Text>
      ) : null}

      <Text style={styles.decorationBottom}>♡  ✨  ♡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F7D2E4',
    borderBottomWidth: 5,
    borderBottomColor: colors.primaryDark,
    shadowColor: '#C987A8',
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  decorationTop: {
    color: '#FFF5FA',
    fontSize: 15,
    letterSpacing: 5,
    marginBottom: 8,
  },

  toolsBox: {
    backgroundColor: '#F9DCEB',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 7,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FCEAF2',
  },

  tools: {
    fontSize: 24,
    letterSpacing: 2,
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.2,
    textShadowColor: '#D987B1',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#FFF8FC',
    marginTop: 7,
    textAlign: 'center',
    lineHeight: 21,
  },

  decorationBottom: {
    color: '#FFF5FA',
    fontSize: 14,
    marginTop: 10,
    letterSpacing: 4,
  },
});
