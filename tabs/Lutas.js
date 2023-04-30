import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const LutasStack = createStackNavigator();

function LutasStackScreen () {
  return(
    <LutasStack.Navigator>
      <LutasStack.Screen name='Inicio' component={Inicio}/>
      <LutasStack.Screen name='Round 1' component={Round1}/>
      <LutasStack.Screen name='Round 2' component={Round2}/>
      <LutasStack.Screen name='Round 3' component={Round3}/>
      <LutasStack.Screen name='Round 4' component={Round4}/>
      <LutasStack.Screen name='Round 5' component={Round5}/>
      <LutasStack.Screen name='Round 6' component={Round6}/>
      <LutasStack.Screen name='Round 7' component={Round7}/>
      <LutasStack.Screen name='Round 8' component={Round8}/>
    </LutasStack.Navigator>
  )
}

function Round1() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Lu Bu VS Thor</Text>
        <Image source={require('../imagens/Round1.png')} style={styles.image}/>
        <Text style={styles.text}>
          Vencedor: Thor
        </Text>
        <Text style={styles.text}>
          Duração da luta: 16 minutos 28 segundos
        </Text>
        <Text style={styles.text}>
          Golpe final: Martelo de Thor Despertado
        </Text>
        <Text style={styles.text}>
          Placar: Humanos 0 - Deuses 1
        </Text>
      </ScrollView>
    </View>
  )
}

function Round2() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Adão VS Zeus</Text>
        <Image source={require('../imagens/Round2.png')} style={styles.image}/>
        <Text style={styles.text}>
          Vencedor: Zeus
        </Text>
        <Text style={styles.text}>
          Duração da luta: 7 minutos 13 segundos
        </Text>
        <Text style={styles.text}>
          Golpe final: Golpe de Punho
        </Text>
        <Text style={styles.text}>
          Placar: Humanos 0 - Deuses 2
        </Text>
      </ScrollView>
    </View>
  )
}

function Round3() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Round4() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Round5() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Round6() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Round7() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Página em desenvolvimento</Text>
      </ScrollView>
    </View>
  )
}

function Round8() {
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
        <Text style={styles.text}>As 13 lutas dp Ragnarok</Text>
        <Button title='Round 1' onPress={() => navigation.navigate('Round 1')}/>
        <Button title='Round 2' onPress={() => navigation.navigate('Round 2')}/>
        <Button title='Round 3' onPress={() => navigation.navigate('Round 3')}/>
        <Button title='Round 4' onPress={() => navigation.navigate('Round 4')}/>
        <Button title='Round 5' onPress={() => navigation.navigate('Round 5')}/>
        <Button title='Round 6' onPress={() => navigation.navigate('Round 6')}/>
        <Button title='Round 7' onPress={() => navigation.navigate('Round 7')}/>
        <Button title='Round 8' onPress={() => navigation.navigate('Round 8')}/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default function Lutas() {
  return (
    <NavigationContainer independent={true}>
      <LutasStackScreen/>
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
