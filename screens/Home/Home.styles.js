import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  loginBtn: {
    alignItems: 'center',
    fontSize: 16,
    width: 150,
    padding: 10,
    marginTop: 100,
    marginBottom: 5,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#333',
    backgroundColor: 'green',
  },
  signUpBtn: {
    alignItems: 'center',
    fontSize: 16,
    width: 150,
    padding: 10,
    margin: 5,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#333',
    backgroundColor: 'green',
  },
  btnTxt: {
    color: '#ffe',
    textAlign: 'center',
  },
});

export default styles;
