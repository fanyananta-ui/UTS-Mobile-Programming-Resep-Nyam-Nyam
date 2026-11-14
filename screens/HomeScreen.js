
import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import IngredientChip from '../components/IngredientChip';
import { ingredientGroups, ingredientEmoji } from '../data/recipes';
import { colors, radius } from '../theme';

export default function HomeScreen({ navigation }) {
  // State: daftar bahan yang dipilih user
  const [selected, setSelected] = useState([]);

  const toggleIngredient = (name) =>
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );

  const canSearch = selected.length > 0;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header
          title="Resep Nyam-Nyam"
          subtitle="Bingung mau masak apa? Pilih bahan yang ada di kosanmu, kami carikan resepnya!"
        />

        <View style={styles.labelRow}>
          <Text style={styles.label}>🧺 Bahan di kosanmu</Text>

          {canSearch && (
            <Pressable onPress={() => setSelected([])}>
              <Text style={styles.reset}>Reset ↻</Text>
            </Pressable>
          )}
        </View>

        {ingredientGroups.map((group) => (
          <View key={group.title} style={styles.group}>
            <Text style={styles.groupTitle}>{group.title}</Text>

            <View style={styles.chips}>
              {group.items.map((name) => (
                <IngredientChip
                  key={name}
                  label={name}
                  emoji={ingredientEmoji[name]}
                  selected={selected.includes(name)}
                  onPress={() => toggleIngredient(name)}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          disabled={!canSearch}
          onPress={() =>
            navigation.getParent()?.navigate('Result', { selected })
          }
          style={[styles.button, !canSearch && styles.buttonOff]}
        >
          <Text style={styles.buttonText}>
            {canSearch
              ? `🍳 Masak yuk! (${selected.length} bahan)`
              : 'Pilih minimal 1 bahan dulu ya'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: 20,
    paddingBottom: 28,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.ink,
  },
  reset: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primaryDark,
  },
  group: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: radius.md,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F7E5EE',
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primaryDark,
    marginBottom: 10,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    padding: 20,
    paddingTop: 8,
    backgroundColor: colors.bg,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#F7D2E4',
    borderBottomWidth: 5,
    borderBottomColor: colors.primaryDark,
    shadowColor: '#C987A8',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  buttonOff: {
    backgroundColor: '#E8C9B8',
    borderBottomColor: '#D4B09E',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },
});
