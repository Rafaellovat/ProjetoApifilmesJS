import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RecuperacaoPage(){

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={
               styles.imgLogo}/>
            <TextInput
            placeholder="email" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin} >
                <Text style={styles.textoLogin}>Enviar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'LoginPage'}} style={styles.textoinput} >Voltar a página de Login</Link>
            </View>
        </View>
    )
}