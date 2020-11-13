import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: '3%',
    },
    imageContainer: {
        backgroundColor: '#FAFAFA',
        margin: "2%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: '5%',
        paddingTop: '10%',
        paddingBottom: '10%',
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 2
    }
});

export default styles;