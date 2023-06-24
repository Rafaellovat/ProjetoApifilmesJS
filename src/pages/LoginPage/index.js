import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";

export default function LoginPage(){

    const { signIn } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={
               styles.imgLogo}/>
            <TextInput
            placeholder="email" style={styles.input}/>
            <TextInput
            placeholder="senha" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin} onPress={() => signIn()}>
                <Text style={styles.textoLogin}>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'RegisterPage'}} style={styles.textoinput} >Registre-se</Link>
                <Link to={{screen: 'RecuperacaoPage'}} style={styles.textoinput} >Não lembro minha senha</Link>
            </View>
        </View>
    )
}