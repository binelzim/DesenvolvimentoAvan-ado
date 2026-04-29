import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomModalScreen from './src/components/CustomModalScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          
          <Tab.Screen name="Slide">
            {() => <CustomModalScreen animation="slide" themeColor="#2196F3" title="Tela 1: Slide" />}
          </Tab.Screen>

          <Tab.Screen name="Fade">
            {() => <CustomModalScreen animation="fade" themeColor="#4CAF50" title="Tela 2: Fade" />}
          </Tab.Screen>

          <Tab.Screen name="None">
            {() => <CustomModalScreen animation="none" themeColor="#FF9800" title="Tela 3: None" />}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}