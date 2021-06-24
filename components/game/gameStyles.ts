import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  winner: {
    fontSize: 50,
    fontWeight: '500',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  board: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 302,
  },
  square: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  squareText: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 50,
  },
  playAgain: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: 'violet',
    marginTop: 50,
  },
  playAgainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
