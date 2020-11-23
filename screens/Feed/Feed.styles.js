import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#00FA9A',
    },
    container: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        textAlign: 'right',
    },
    row: {
        marginTop: 20,
    },
    card: {
        width: '40%',
        marginRight: 5,
        height: 100,
    },
    searchBox: {
        margin: 20,
        borderWidth: 1,
        borderRadius: 16,
    },
    dateBetweenCards: {
        textAlign: 'center',
        color: '#111111',
        fontSize: 24,
        margin: 2.5,
    }
});

export default styles;