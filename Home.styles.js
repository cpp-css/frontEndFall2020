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
  spacingLogin: {
    marginBottom: 100,
  },
  loginBtn: {
    alignItems: 'center',
    fontSize: 16,
    width: 150,
    padding: 10,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#333',
    backgroundColor: 'green',
  },
  spacingBtns: {
    margin: 0,
  },
  signUpBtn: {
    alignItems: 'center',
    fontSize: 16,
    width: 150,
    padding: 10,
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
