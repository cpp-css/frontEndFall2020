import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        padding: "10%"
    },
    text: {
        marginLeft: 10
    },
    textInput: {
        backgroundColor: 'white',
        margin: "2%",
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 2
    },
    forgotLabelContainer: {
        alignContent: 'center'
    },
    forgotLabel: {
        color: 'gray',
        textAlign: 'center'
    }
});

export default styles;