
import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import DetailScreen from './screens/DetailScreen';
import RecipesScreen from './screens/RecipesScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { FavoritesProvider } from './context/FavoritesContext';
import { colors } from './theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primaryDark,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.peach,
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
        tabBarIcon: ({ focused }) => {
          let emoji = '🏠';

          if (route.name === 'Resep') emoji = '🍳';
          if (route.name === 'Favorit') emoji = '❤️';

          return (
            <Text style={{ fontSize: 21, opacity: focused ? 1 : 0.6 }}>
              {emoji}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Resep" component={RecipesScreen} />
      <Tab.Screen name="Favorit" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <StatusBar style="dark" />

          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: colors.bg },
              headerTintColor: colors.ink,
              headerTitleStyle: { fontWeight: '800' },
              headerShadowVisible: false,
              contentStyle: { backgroundColor: colors.bg },
            }}
          >
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
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
      </FavoritesProvider>
    </SafeAreaProvider>
  );
}
