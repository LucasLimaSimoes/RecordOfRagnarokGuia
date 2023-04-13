import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const HumanosStack = createStackNavigator();

function HumanosStackScreen() {
  return (
    <HumanosStack.Navigator>
      <HumanosStack.Screen name='Inicio' component={Inicio}/>
      <HumanosStack.Screen name='Lu Bu' component={LuBu}/>
      <HumanosStack.Screen name='Adão' component={Adao}/>
      <HumanosStack.Screen name='Kojiro Sasaki' component={Kojiro}/>
      <HumanosStack.Screen name='Jack, o Estripador' component={Jack}/>
      <HumanosStack.Screen name='Raiden' component={Raiden}/>
      <HumanosStack.Screen name='Buda' component={Buda}/>
      <HumanosStack.Screen name='Qin Shi Huang' component={Qin}/>
      <HumanosStack.Screen name='Nikola Tesla' component={Tesla}/>
    </HumanosStack.Navigator>
  )
}

function LuBu() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('../imagens/LuBu/LuBu.png')} style={styles.image}/>
        <Text style={styles.title}>História</Text>
        <Text style={styles.text}>
          Lu Bu era um guerreiro da Era dos Três Reinos na China. Ele era um incrível guerreiro e era temido como Deus da Guerra no campo de batalha. Muitos o consideram como o Guerreiro Mais Poderoso da Humanidade.
        </Text>
        <Text style={styles.text}>
          No Ragnarok, lutou na Primeira Rodada contra o Thor. Sua parceira foi a Valquiria Randgriz, se tornando a alabarda chamada Perfuradora do Céu.
        </Text>
        <Image source={require('../imagens/LuBu/Randgriz.png')} style={styles.image}/>
        <Text style={styles.title}>Proesas de Combate</Text>
        <Text style={styles.text}>
          Ainda em vida, Lu Bu já era um grande guerreiro, o suficiente para ser considerado o mais poderoso da China. Suas capacidades físicas, como força, velocidade e resistência, já eram consideradas em um nível divino por aqueles que o enfrentaram.
        </Text>
        <Text style={styles.text}>
          Seu golpe mais poderoso é chamado de Devoradora de Céus. É um único golpe poderoso suficiente pra partir nuvens, mas inutilizava todas as armas do Lu Bu, a exceção da sua Arma Divina.
        </Text>
        <Image source={require('../imagens/LuBu/DevoradoradeCeus.png')} style={styles.image}/>
        <Text style={styles.text}>
          Além disso, demonstrou ter uma alta resistência a venenos, tendo sido envenenado com uma dosagem suficiente para matar um elefante, mas conseguindo resistir e sobreviver. Também demonstrou bastante resistência a dor e ao clima.
        </Text>
        <Text style={styles.text}>
          É importante também mencionar sua habilidade em combate corpo-a-corpo e também armado com uma alabarda. No caso dessa última, sua habilidade chegou a tanto que conseguiu partir os céus.
        </Text>
        <Text style={styles.text}>
          Por último, é importante mencionar sua aura de batalha. Apesar de não chegar ao nível do Odin, Lu Bu conseguiu derrubar multiplos soldados somente com sua presença.
        </Text>
        <Text style={styles.title}>Equipamentos</Text>
        <Text style={styles.text}>
          Seu principal equipamento no Ragnarok foi sua Völundr com Randgriz, a alabarda Perfuradora do Céu. Esta arma tem a habilidade de atravessar qualquer forma de defesa, sendo capaz até de destruir o Járngreipr do Thor.
        </Text>
        <Image source={require('../imagens/LuBu/PerfuradoradoCeu.png')} style={styles.image}/>
        <Text style={styles.text}>
          Pode também ser considerado como parte de seu equipamento sua montaria, a égua apelidada de Lebre Vermelha.
        </Text>
        <Image source={require('../imagens/LuBu/LebreVermelha.png')} style={styles.image}/>
      </ScrollView>
    </View>
  )
}

function Adao() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Kojiro() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Jack() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Raiden() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Buda() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Qin() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Tesla() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Os 13 representantes da humanidade, também chamados de Einherjar</Text>
        <Button title='Lu Bu' onPress={() => navigation.navigate('Lu Bu')}/>
        <Button title='Adão' onPress={() => navigation.navigate('Adão')}/>
        <Button title='Kojiro Sasaki' onPress={() => navigation.navigate('Kojiro Sasaki')}/>
        <Button title='Jack, o Estripador' onPress={() => navigation.navigate('Jack, o Estripador')}/>
        <Button title='Raiden' onPress={() => navigation.navigate('Raiden')}/>
        <Button title='Buda' onPress={() => navigation.navigate('Buda')}/>
        <Button title='Qin Shi Huang' onPress={() => navigation.navigate('Qin Shi Huang')}/>
        <Button title='Nikola Tesla' onPress={() => navigation.navigate('Nikola Tesla')}/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default function Humanos() {
  return (
    <NavigationContainer independent={true}>
      <HumanosStackScreen/>
    </NavigationContainer>
  )
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
    height: 500,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
