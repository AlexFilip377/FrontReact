import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ProductListScreen } from './src/screens/ProductListScreen';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="ProductList"
          screenOptions={{
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#333',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen 
            name="ProductList" 
            component={ProductListScreen} 
            options={{ title: 'Catalog' }} 
          />
          <Stack.Screen 
            name="ProductDetail" 
            component={ProductDetailScreen} 
            options={({ route }: any) => ({ title: route.params.product.name })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}