import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const DeusesStack = createStackNavigator();

function DeusesStackScreen() {
  return(
    <DeusesStack.Navigator>
      <DeusesStack.Screen name='Inicio' component={Inicio}/>
      <DeusesStack.Screen name='Thor' component={Thor}/>
      <DeusesStack.Screen name='Zeus' component={Zeus}/>
      <DeusesStack.Screen name='Poseidon' component={Poseidon}/>
      <DeusesStack.Screen name='Hércules' component={Hercules}/>
      <DeusesStack.Screen name='Shiva' component={Shiva}/>
      <DeusesStack.Screen name='Zerofuku/Hajun' component={Zero}/>
      <DeusesStack.Screen name='Hades' component={Hades}/>
      <DeusesStack.Screen name='Beelzebub' component={Beelzebub}/>
    </DeusesStack.Navigator>
  )
}

function Thor() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={require('../imagens/Thor/Thor.png')} style={styles.image}/>
      <Text style={styles.title}>História</Text>
      <Text style={styles.text}>
        Thor é o Deus do Trovão da mitologia nordica, também sendo considerado uma das mais poderosas deidades nordicas.
      </Text>
      <Text style={styles.text}>
        No Ragnarok, lutou na Primeira Rodada contra o Lu Bu.
      </Text>
      <Text style={styles.title}>Proesas de Combate</Text>
      <Text style={styles.text}>
        Thor é um grande guerreiro, tendo derrotado 66 Jötunns sozinho, o que o tornou uma figura lendária até mesmo dentre os deuses nordicos.
      </Text>
      <Text style={styles.text}>
        A maioria de seus ataques envolve seu martelo Mjölnir. Suas tecnicas vão desde golpes normais até cobrir o martelo com raios ou até mesmo jogar o martelo para usar a força centrifuga nos seus ataques.
      </Text>
      <Text style={styles.text}>
        E claro, assim como seu pai, Odin, Thor também consegue fazer uso de sua aura de batalha.
      </Text>
      <Text style={styles.title}>Poderes</Text>
      <Text style={styles.text}>
        Assim como todos os outros seres divinos, Thor tem uma pseudo-imortalidade. Além de ser muito mais poderoso que qualquer humano.
      </Text>
      <Text style={styles.text}>
        Além disso, Thor também tem o poder de controlar raios e também pode ser teleportar.
      </Text>
      <Text style={styles.title}>Equipamentos</Text>
      <Text style={styles.text}>
        Seu principal equipamento é o martelo Mjölnir. É um martelo enorme e vivo que, caso o Thor esteja enfrentando um oponente difícil, irá "despertar" e aumentar seu poder.
      </Text>
      <Image source={require('../imagens/Thor/Mjolnir.png')} style={styles.image}/>
      <Text style={styles.text}>
        Além do seu martelo, Thor usa luvas chamadas de Járngreipr. O objetivo delas era para que o Thor não destruisse o Mjölnir antes do seu despertar. Ou seja, elas eram limitadores.
      </Text>
      <Text style={styles.text}>
        Lu Bu conseguiu destruir uma luva durante o combate e o Thor removeu a outra, julgando o Lu Bu um oponente digno.
      </Text>
      <Image source={require('../imagens/Thor/Jarngreipr.png')} style={styles.image}/>
      </ScrollView>
    </View>
  )
}

function Zeus() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Poseidon() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Hercules() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Shiva() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Zero() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Hades() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Beelzebub() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Inicio({navigation}) {
  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Os 13 representantes dos deuses</Text>
        <Button title='Thor' onPress={() => navigation.navigate('Thor')}/>
        <Button title='Zeus' onPress={() => navigation.navigate('Zeus')}/>
        <Button title='Poseidon' onPress={() => navigation.navigate('Poseidon')}/>
        <Button title='Hércules' onPress={() => navigation.navigate('Hércules')}/>
        <Button title='Shiva' onPress={() => navigation.navigate('Shiva')}/>
        <Button title='Zerofuku/Hajun' onPress={() => navigation.navigate('Zerofuku/Hajun')}/>
        <Button title='Hades' onPress={() => navigation.navigate('Hades')}/>
        <Button title='Beelzebub' onPress={() => navigation.navigate('Beelzebub')}/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default function Deuses() {
  return (
    <NavigationContainer independent={true}>
      <DeusesStackScreen/>
    </NavigationContainer>
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