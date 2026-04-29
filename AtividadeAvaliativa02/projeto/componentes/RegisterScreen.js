// componentes/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 
import { auth, db } from './firebaseConfig';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Estados para o Modal de interação
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const registrarUsuario = async () => {
    if (!nome || !email || !senha) {
      setModalMessage('Por favor, preencha todos os campos corretamente.');
      setIsSuccess(false);
      setModalVisible(true);
      return;
    }

    try {
      // 1. Cria o usuário no Firebase Authentication 
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome: nome,
        email: email,
        dataCadastro: new Date()
      });

      setModalMessage('Usuário cadastrado com sucesso no sistema e no banco de dados!');
      setIsSuccess(true);
      setModalVisible(true);
    } catch (error) {
      let mensagemErro = 'Erro ao realizar o cadastro.';
      
      if (error.code === 'auth/email-already-in-use') {
        mensagemErro = 'Este e-mail já está sendo utilizado.';
      } else if (error.code === 'auth/weak-password') {
        mensagemErro = 'A senha deve ter no mínimo 6 caracteres.';
      }

      setModalMessage(mensagemErro);
      setIsSuccess(false);
      setModalVisible(true);
    }
  };

  const concluirAcao = () => {
    setModalVisible(false);
    if (isSuccess) {
      navigation.navigate('Login'); // Redireciona para a tela de Login após o sucesso [cite: 11]
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Nova Conta</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Nome Completo" 
        value={nome} 
        onChangeText={setNome} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        value={email} 
        onChangeText={setEmail} 
        autoCapitalize="none" 
        keyboardType="email-address" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha (mín. 6 caracteres)" 
        value={senha} 
        onChangeText={setSenha} 
        secureTextEntry 
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Finalizar Cadastro" onPress={registrarUsuario} color="#28a745" />
      </View>

      <Button 
        title="Já tem uma conta? Faça Login" 
        onPress={() => navigation.navigate('Login')} 
        color="#007bff"
      />

      {/* Modal de Interação Customizado */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: isSuccess ? '#28a745' : '#dc3545' }]}>
              {isSuccess ? 'Sucesso!' : 'Erro'}
            </Text>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={concluirAcao}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, marginBottom: 15, borderRadius: 8, fontSize: 16 },
  buttonContainer: { marginBottom: 15 },
  
  // Estilos do Modal
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: '85%', padding: 25, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', elevation: 10 },
  modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  modalText: { fontSize: 16, marginBottom: 20, textAlign: 'center', color: '#555' },
  modalButton: { backgroundColor: '#333', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 6 },
  modalButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});