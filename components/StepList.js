
import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';

// props: steps (array langkah).
// State "done" menyimpan langkah yang sudah dicentang.
export default function StepList({ steps }) {
  const [done, setDone] = useState([]);

  const toggle = (index) =>
    setDone((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );

  const finished = done.length === steps.length;

  return (
    <View>
      {steps.map((step, index) => {
        const isDone = done.includes(index);

        return (
          <Pressable
            key={index}
            onPress={() => toggle(index)}
            style={[styles.row, isDone && styles.rowDone]}
          >
            <View style={[styles.num, isDone && styles.numOn]}>
              <Text style={styles.numText}>
                {isDone ? '✓' : index + 1}
              </Text>
            </View>

            <Text style={[styles.text, isDone && styles.textDone]}>
              {step}
            </Text>
          </Pressable>
        );
      })}

      {finished && (
        <Text style={styles.yay}>🎉 Selamat makan!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    backgroundColor: colors.card,
    borderRadius: radius.sm,
    padding: 12,
    borderWidth: 1.5,
    borderColor: colors.peach,
    shadowColor: '#A77C98',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  rowDone: {
    backgroundColor: colors.mintSoft,
    borderColor: colors.mint,
  },
  num: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  numOn: {
    backgroundColor: colors.mint,
  },
  numText: {
    color: '#FFFFFF',
    fontWeight: '900',
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: colors.ink,
    lineHeight: 22,
  },
  textDone: {
    color: colors.muted,
    textDecorationLine: 'line-through',
  },
  yay: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
    marginTop: 10,
  },
});
