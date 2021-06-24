import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 70,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
  },
  player: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 40,
    marginBottom: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 5,
    fontSize: 18,
  },
  playerInput: {
    fontSize: 18,
    flex: 1,
    fontWeight: '500',
  },
  saveButton: {
    borderWidth: 1,
    backgroundColor: 'green',
    paddingVertical: 12,
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
