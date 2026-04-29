import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// 1. Importações da Prática 01
import WelcomeScreen from '../src/screens/WelcomeScreen';
import ModalsTabNavigator from '../src/navigation/ModalsTabNavigator';
import ListsTabNavigator from '../src/navigation/ListsTabNavigator'; 

// 2. Importações da Prática 02
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import FormScreen from './FormScreen';
import ListScreen from './ListScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={WelcomeScreen} options={{ title: 'Página Inicial' }} />
      <Drawer.Screen name="AreaModais" component={ModalsTabNavigator} options={{ title: 'Navegação de Modais' }} />
      <Drawer.Screen name="AreaListas" component={ListsTabNavigator} options={{ title: 'Listas com Rolagem' }} />
      
      {/* Adicionando as novas telas da Prática 02 no menu lateral para fácil acesso após o login */}
      <Drawer.Screen name="NovoAluguel" component={FormScreen} options={{ title: 'Registrar Aluguel' }} />
      <Drawer.Screen name="ListaAlugueis" component={ListScreen} options={{ title: 'Aluguéis Cadastrados' }} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Telas de Autenticação */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Criar Conta' }} />
        
        {/* Tela Principal (Seu Drawer antigo + Telas novas) */}
        <Stack.Screen name="Home" component={DrawerRoutes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}