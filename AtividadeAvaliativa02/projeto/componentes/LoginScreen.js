// componentes/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Login com sucesso, vai para a tela principal
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert('Erro no Login', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Aluguel de Carros</Text>
      
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={fazerLogin} />
      </View>
      <Button title="Não tem conta? Cadastre-se" onPress={() => navigation.navigate('Register')} type="clear" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  buttonContainer: { marginBottom: 15 }
});