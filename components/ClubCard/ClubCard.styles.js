import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        //flex: 1,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width - 20,
        margin: 10,
        //height: height - 210,
        //alignItems: 'center',
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
    org: {
        fontWeight: 'bold',
        fontSize: 25,
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
    orgPopUp: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "center",
    },
    imagePopUp: {
        width: 200,
        height: 200,
        margin: "5%",
        borderRadius: 10,
    },
    linkPopUp: {
        textDecorationLine: 'underline',
    },
    infoPopUp: {
        margin: 5,
    },
    relatedToPopUp: {
        fontWeight: 'bold',
    }
});

export default styles;