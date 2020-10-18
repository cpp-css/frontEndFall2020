import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginTop: 5,
    },
    textField: {
        marginTop: 100,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontWeight: '900',
        backgroundColor:  '#94d6a6',
        fontSize: 20,
    },
    signInButtonText: {
        // fontSize: 20,
        // color: 'red',
        // backgroundColor: 'red',
        // flex: 1,
        // width: null,
        // height: null,
        // resizeMode: 'contain'
        // backgroundColor: 'red',
        // margin: 10,
        // padding: 10,
        // width: 100,
        // height: 100,
        // aspectRatio: 5,
        // resizeMode: 'contain',
        resizeMode: 'cover', 
        width: '100%', 
        height: '100%',
    },
});

export default styles;