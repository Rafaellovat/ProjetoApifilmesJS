import { StyleSheet, View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import CardFilme from '../../components/CardFilme';

export default function MoviesPage(){

    let [filmes, setFilmes] = useState([]);

    const baseURL = "https://api.otaviolube.com/api/filmes?populate=*"
  
    useEffect(function(){
          fetch(baseURL).then(data => data.json()).then(objeto => {
            console.log(objeto);
            setFilmes(objeto.data);
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>Bem Vindo ao Cineplex!
        </View>
        { filmes.length > 0 ? <ScrollView horizontal>
          {
             filmes.map(filme =>
             <CardFilme key={filme.id} filme={filme.attributes}/>)
          }
        </ScrollView> : <ActivityIndicator size={'large'}/>}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0f12',
      justifyContent: 'center',
    },
    header: {
      color: 'white',
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
    },
  });