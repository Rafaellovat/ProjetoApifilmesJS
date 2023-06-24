import { useContext } from "react";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import AuthContext from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function Routes(){
    
    const { logado, loading } = useContext(AuthContext)

    if(loading){
        return(
            <View style={{flex: 1, 
            alignItems: 'center',
            justifyContent: 'center'}}>
                <ActivityIndicator size={'large'} />
            </View>
        );
    }
    
    return(
        logado == true ? <AppRoutes /> : <AuthRoutes />
    ) 
}