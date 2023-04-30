import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseURL = "https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.7;

export default function CardFilme({ filme }){
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: baseURL + filme.poster.data.attributes.formats.small.url}}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#10385c',
        margin: 15,
        padding: 10,
        marginTop: 50,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10,
    },
    title : {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    sinopse: {
        color: 'white',
        marginBottom: 10,
    },
    button: {
        height: 35,
        backgroundColor: '#4f1620',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        fontsize: 25,
        fontWeight: 'bold',
    },
})