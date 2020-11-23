import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width - 20,
        margin: 10,
        //height: height - 210,
        alignItems: 'center',
        borderRadius: 10,
        padding: "5%",
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.24,
        shadowRadius: 5,
        elevation: 3
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 5,
    },
    textContainer: {
        flexDirection: 'column',
        textAlign: "center",
        flex: 1,
        flexWrap: 'wrap',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    containerPopUp: {
        marginTop: 10,
        //flex: 1,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        backgroundColor: 'white',
        // width: width - 40,
        margin: 10,
        // height: height - 105,
        alignItems: 'center',
        borderRadius: 10,
        padding: "5%",
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.24,
        shadowRadius: 5,
        elevation: 3
    },
    titlePopUp: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    imagePopUp: {
        width: "80%",
        height: "40%",
        //margin: "5%",
        borderRadius: 10,
    },
    descPopUp: {
        fontSize: 15,
        textAlign: 'left',
        width: '100%',
        paddingVertical: '2%'
    },
    datePopUp: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnText: {
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 2
    }
});

export default styles;