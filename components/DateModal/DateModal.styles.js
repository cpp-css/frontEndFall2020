import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    displayContainer: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    displayTimeContainer: {
        backgroundColor: '#FAFAFA',
        margin: "2%",
        borderRadius: 10,
        padding: 15,
        width: '30%',
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 2
    },
    displayDateContainer: {
        backgroundColor: '#FAFAFA',
        margin: "2%",
        borderRadius: 10,
        padding: 15,
        width: '61%',
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 2
    },
    displayTimeText: {
        textAlign: 'right'
    },
    datePickerContainer: {
        backgroundColor: '#FAFAFA',
        margin: "2%",
        borderRadius: 10,
        padding: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 2
    },
    text: {
        marginLeft: 10
    }
})

export default styles;