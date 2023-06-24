import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage(){

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={
               styles.imgLogo}/>
            <TextInput
            placeholder="Nome Completo" style={styles.input}/>
            <TextInput
            placeholder="email" style={styles.input}/>
            <TextInput
            placeholder="senha" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin} >
                <Text style={styles.textoLogin}>Registrar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'LoginPage'}} style={styles.textoinput} >Voltar a página de Login</Link>
            </View>
        </View>
    )
}