import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/modalStyles';

const CustomModalScreen = ({ animation, themeColor, title }) => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={[styles.screenContainer, { backgroundColor: themeColor + '15' }]}>
      <Text style={[styles.headerText, { color: themeColor }]}>{title}</Text>
      
      <TouchableOpacity 
        style={[styles.mainButton, { backgroundColor: themeColor }]} 
        onPress={() => setVisible(true)}
      >
        <Text style={styles.buttonText}>ABRIR MODAL</Text>
      </TouchableOpacity>

      <Modal animationType={animation} transparent={true} visible={visible}>
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={styles.modalCard}>
            <View style={[styles.colorIndicator, { backgroundColor: themeColor }]} />
            <Text style={styles.modalTitle}>Aviso: {animation}</Text>
            <Text style={styles.modalBody}>Conteúdo da tela de modal reutilizável.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setVisible(false)}>
              <Text>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default CustomModalScreen;