// componentes/FormScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function FormScreen() {
  const [carro, setCarro] = useState('');
  const [cliente, setCliente] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  // Estados do Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const salvarAluguel = async () => {
    if (!carro || !cliente || !valor || !data) {
      setModalMessage('Por favor, preencha todos os campos!');
      setIsSuccess(false);
      setModalVisible(true);
      return;
    }

    try {
      await addDoc(collection(db, "alugueis"), {
        carro: carro,
        cliente: cliente,
        valor: valor,
        data: data
      });
      
      setModalMessage('Aluguel registrado com sucesso!');
      setIsSuccess(true);
      setModalVisible(true);
      
      // Limpa os campos
      setCarro(''); setCliente(''); setValor(''); setData('');
    } catch (e) {
      setModalMessage('Erro ao salvar: ' + e.message);
      setIsSuccess(false);
      setModalVisible(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registrar Novo Aluguel</Text>
      
      <TextInput style={styles.input} placeholder="Nome do carro" value={carro} onChangeText={setCarro} />
      <TextInput style={styles.input} placeholder="Nome do cliente" value={cliente} onChangeText={setCliente} />
      <TextInput style={styles.input} placeholder="Valor do aluguel (R$)" value={valor} onChangeText={setValor} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Data do aluguel (DD/MM/AAAA)" value={data} onChangeText={setData} />
      
      <Button title="Salvar Registro" onPress={salvarAluguel} />

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{isSuccess ? 'Sucesso!' : 'Atenção'}</Text>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },

  // Estilos do Modal
  modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContainer: { width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', elevation: 5 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  modalText: { fontSize: 16, marginBottom: 20, textAlign: 'center' },
  modalButton: { backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 5 },
  modalButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});