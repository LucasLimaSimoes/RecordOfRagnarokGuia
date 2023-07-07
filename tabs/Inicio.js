import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, ScrollView } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('../imagens/RoR_Guia_Logo.png')} style={styles.image}/>
        <Text style={styles.text}>
          Record of Ragnarok, ou Shuumatsu no Valkyrie, é um mangá escrito por Shinya Umemura e Takumi Fukui e ilustrado por Ajichika.
        </Text>
        <Text style={styles.title}>
          Sinopse
        </Text>
        <Text style={styles.text}>
          Há cada 1000 anos, deuses de todos os panteões se reunem em uma conferencia para decidir o destino da humanidade, e dessa vez eles votaram pelo exterminio.
        </Text>
        <Text style={styles.text}>
          No entanto, a Valquiria Brunhilda fez uso do Artigo 62, Paragráfo 15 da Cláusula Super Especial da Constituição de Valhalla, dando mais uma chance para a humanidade.
        </Text>
        <Text style={styles.text}>
          Agora, 13 representantes da humanidade irão enfrentar 13 representantes dos deuses em uma série de lutas 1 contra 1. Caso a humanidade vença, terá mais 1000 anos de existência, e será exterminada caso perca.
        </Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
