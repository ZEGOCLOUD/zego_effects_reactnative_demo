import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import FloatingMinimizedView from './FloatingMinimizedView';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <FloatingMinimizedView />
    </NavigationContainer>
  );
}