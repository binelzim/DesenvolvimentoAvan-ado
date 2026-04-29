// componentes/ListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function ListScreen() {
  const [alugueis, setAlugueis] = useState([]);

  // Função para buscar os dados no Firestore
  const buscarDados = async () => {
    const querySnapshot = await getDocs(collection(db, "alugueis"));
    const lista = [];
    querySnapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() });
    });
    setAlugueis(lista);
  };

  // Executa a busca assim que a tela abre
  useEffect(() => {
    buscarDados();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemTitle}>Carro: {item.carro}</Text>
      <Text>Cliente: {item.cliente}</Text>
      <Text>Valor: R$ {item.valor}</Text>
      <Text>Data: {item.data}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aluguéis Cadastrados</Text>
      <FlatList
        data={alugueis}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onRefresh={buscarDados}
        refreshing={false} // Puxe para baixo para atualizar a lista
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  itemCard: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  itemTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 }
});