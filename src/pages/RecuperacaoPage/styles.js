import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#53698a',
    },
    imgLogo: {
        height: '190px',
        width: '175px',   
        marginBottom: 15,     
    },
    input: {
        border: '1px solid black',
        width: '70%',
        height: 40,
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    btnLogin: {
        border: '2px solid black',
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#adbfd9'
    },
    textoLogin: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    viewLinks : {
        marginTop: 20,
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between',
    },
    textoinput: {
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default styles;