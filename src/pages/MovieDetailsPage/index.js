import { Text, View } from "react-native";

export default function MovieDetailsPage({ route }){

    const { filme } = route.params;

    return (
        <View>
            <Text>Detalhes do Filmes</Text>
            <Text>{filme.titulo}</Text>
            <Text>{filme.sinopse}</Text>
        </View>
    )
}