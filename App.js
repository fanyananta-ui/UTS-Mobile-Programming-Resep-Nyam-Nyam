
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import DetailScreen from './screens/DetailScreen';
import { colors } from './theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />

        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.bg,
            },
            headerTintColor: colors.primaryDark,
            headerTitleStyle: {
              fontWeight: '800',
              color: colors.ink,
              fontSize: 18,
            },
            headerShadowVisible: false,
            headerBackTitle: 'Kembali',
            contentStyle: {
              backgroundColor: colors.bg,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{ title: '♡ Hasil Resep' }}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: '♡ Detail Resep' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
