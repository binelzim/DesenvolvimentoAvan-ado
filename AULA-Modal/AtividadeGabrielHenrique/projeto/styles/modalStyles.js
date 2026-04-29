import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Container da tela (onde fica o botão)
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Estrutura do Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    overflow: 'hidden',
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
  },
  modalBody: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: 15,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
  }
});