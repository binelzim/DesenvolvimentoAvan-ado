import { useState } from "react"
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


const CustomModalScreen = ({ animation, themeColor }) => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView>
      <Text>
        Modo: {animation.toUpperCase()}
      </Text>
      
      <TouchableOpacity>
        <Text> TESTAR {animation.toUpperCase()}</Text>
      </TouchableOpacity>

      <Modal>
        <TouchableOpacity>
          <View>
            <View />
            
            <Text> Animação {animation}</Text>
            
            <Text>
              {animation === 'slide' && "Perceba como eu subi suavemente do fundo da tela."}
              {animation === 'fade' && "Perceba como eu surgi alterando a opacidade (transparência)."}
              {animation === 'none' && "Eu apareci instantaneamente, sem transição suave."}
            </Text>
            
            <TouchableOpacity 
              onPress={() => setVisible(false)}
            >
              <Text>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
  },
  mainButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo mais escuro para destacar o modal
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    overflow: 'hidden', // Garante que o indicador de cor respeite o arredondamento
  },
  colorIndicator: {
    width: '120%',
    height: 10,
    position: 'absolute',
    top: 0,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
  },
  modalBody: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
});

