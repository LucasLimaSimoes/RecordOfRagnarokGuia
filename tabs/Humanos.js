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
          No Ragnarok, lutou na Round 1 contra o Thor. Sua parceira foi a Valquiria Randgriz, se tornando a alabarda chamada Perfuradora do Céu.
        </Text>
        <Image source={require('../imagens/LuBu/Randgriz.png')} style={styles.image}/>
        <Text style={styles.title}>Proesas de Combate</Text>
        <Text style={styles.text}>
          Ainda em vida, Lu Bu já era um grande guerreiro, o suficiente para ser considerado o mais poderoso da China. Suas capacidades físicas, como força, velocidade e resistência, já eram consideradas em um nível divino por aqueles que o enfrentaram.
        </Text>
        <Text style={styles.text}>
          Seu golpe mais poderoso é chamado de Devoradora de Céus. É um único golpe poderoso suficiente pra partir nuvens, mas inutilizava todas as armas do Lu Bu, a exceção da sua Arma Divina.
        </Text>
        <Image source={require('../imagens/LuBu/DevoradoradeCeus.png')} style={styles.image_h}/>
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
        <Image source={require('../imagens/LuBu/PerfuradoradoCeu.png')} style={styles.image_h}/>
        <Text style={styles.text}>
          Pode também ser considerado como parte de seu equipamento sua montaria, a égua apelidada de Lebre Vermelha.
        </Text>
        <Image source={require('../imagens/LuBu/LebreVermelha.png')} style={styles.image_h}/>
      </ScrollView>
    </View>
  )
}

function Adao() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={require('../imagens/Adao/Adao.png')} style={styles.image}/>
      <Text style={styles.title}>História</Text>
      <Text style={styles.text}>
        Adão é o primeiro homem, o Pai da Humanidade. Ele e Eva viviam no Jardim do Eden até ela ser condenada por comer o fruto proíbido, mas esse crime na verdade foi falsificado pela Serpente.
      </Text>
      <Text style={styles.text}>
        Adão invadiu o local onde Eva estava sendo julgada, comendo todos os Frutos Proíbidos, e matou a Serpente. Depois, ele e Eva foram para a Terra dar início a humanidade.
      </Text>
      <Text style={styles.text}>
        No Ragnarok, lutou no Round 2. Originalmente ele devia enfrentar o Shiva, mas acabou lutando contra Zeus. Sua parceira foi a Valquiria Reginleif, se tornando uma Soqueira.
      </Text>
      <Image source={require('../imagens/Adao/Reginleif.png')} style={styles.image}/>
      <Text style={styles.title}>Proesas de Combate</Text>
      <Text style={styles.text}>
        Adão é um excelente lutador corpo-a-corpo. Até mesmo Ares adimitiu que não seria capaz de vence-lo, e Zeus também achou que Shiva não conseguiria vence-lo, por isso interviu na luta.
      </Text>
      <Text style={styles.text}>
        Também é importante dizer que o Adão é feito a imagem e semelhança das divindades. Ou seja, ele é basicamente um deus no corpo de um humano. Isso lhe garante capacidades físicas comparáveis as divindades mais poderosas, ou até superiores, visto que foi capaz de continuar lutando e até fazer Zeus ceder mesmo com seu corpo sendo destruído.
      </Text>
      <Text style={styles.text}>
        Adão é capaz de se mover muito mais rápido que a luz e é capaz de aguentar ser atingido pelos golpes mais poderosos de Zeus multiplas vezes.
      </Text>
      <Text style={styles.title}>Poderes</Text>
      <Text style={styles.text}>
        A principal habilidade do Adão é seu Reflexo Divino. Ao usar seus olhos, Adão pode copiar os poderes e habilidades de seres divinos.
      </Text>
      <Image source={require('../imagens/Adao/ReflexoDivino.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        As habilidades que se sabe que o Adão copiou foram: Soco Meteoro
      </Text>
      <Image source={require('../imagens/Adao/SocoMeteoro.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        Machado Divino
      </Text>
      <Image source={require('../imagens/Adao/MachadoDivino.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        Foi capaz até mesmo de copiar a habilidade de parar o tempo do Punho Que Ultrapssa o Tempo
      </Text>
      <Image source={require('../imagens/Adao/PunhoQueUltrapassaOTempo.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        Adão consegue até mesmo copiar e revidar os ataques Verdadeiros de Zeus
      </Text>
      <Image source={require('../imagens/Adao/VerdadeiraDireitaDeDeus.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        O Reflexo Divino permite que Adão transforme seu corpo para poder utilizar as habilidades copiadas, como visto com o caso das Garras da Serpente.
      </Text>
      <Image source={require('../imagens/Adao/GarrasDaSerpente.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        Adão também tem instintos quase que animalescos, e também parece poder se comunicar com os animais.
      </Text>
      <Text style={styles.title}>Equipamentos</Text>
      <Text style={styles.text}>
        O único equipamento que Adão utilizou foi sua Völundr, chamada simplesmente de Soqueira.
      </Text>
      <Image source={require('../imagens/Adao/Soqueira.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        No entando, mesmo enfrentando o próprio Rei dos Deuses, Adão nunca utilizou a habilidade da sua Völundr, portanto esta é desconhecida.
      </Text>
      </ScrollView>
    </View>
  )
}

function Kojiro() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={require('../imagens/Kojiro/Kojiro.png')} style={styles.image}/>
      <Text style={styles.title}>História</Text>
      <Text style={styles.text}>
        Entitulado Maior Perdedor da Humanidade, Kojiro nunca teve uma única vitória em sua vida. Dito isso, também nunca perdeu duas vezes pro mesmo oponente.
      </Text>
      <Text style={styles.text}>
        No Ragnarok, lutou no Round 3 contra Poseidon. Sua parceira foi a Valquiria Hrist, se tornando uma espada odachi chamada Monohoshizao.
      </Text>
      <Image source={require('../imagens/Kojiro/Hrist.png')} style={styles.image}/>
      <Text style={styles.title}>Proesas de Combate</Text>
      <Text style={styles.text}>
        Kojiro treinou a arte da espada durante toda sua vida. Através da concivência com animais, se tornou um guerreiro extremamente observante e adaptável.
      </Text>
      <Text style={styles.text}>
        Graças a essa habilidade de adaptação, Kojiro desenvolveu uma habilidade chamada de Senju Musō. Esta habilidade lhe permite analisar um oponente, prever seus movimentos e, até certo ponto, torna-los seus.
      </Text>
      <Image source={require('../imagens/Kojiro/SenjuMuso.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        Durante sua luta com Poseidon, essa habilidade evoluiu para Manju Musō. Agora Kojiro consegue analisar não somente seus oponentes, como também todo seu arredor, aumentando ainda mais sua habilidade de adaptação.
      </Text>
      <Text style={styles.title}>Tecnicas de Espada</Text>
      <Text style={styles.text}>
        O estilo principal de combate do Kojiro é chamado Estilo Ganryu. Com este, Kojiro demonstrou as seguintes habilidades:
      </Text>
      <Text style={styles.text}>
      Tsubame Gaeshi, considerada sua técnica mais forte enquanto em vida
      </Text>
      <Image source={require('../imagens/Kojiro/TsubameGaeshi.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        Torakiri
      </Text>
      <Image source={require('../imagens/Kojiro/Torakiri.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        Mas, na sua luta contra Poseidon, Kojiro evoluiu ao ponto de tomar para si as técnicas de todos aqueles que o haviam derrotado, criando o estilo Niten Ganryu.
      </Text>
      <Text style={styles.text}>
        Este estilo tem somente uma técnica, chamada Sōen Zanko Banjin Ryōran
      </Text>
      <Image source={require('../imagens/Kojiro/SoenZankoBanjinRyoran.png')} style={styles.image_h}/>
      <Text style={styles.title}>Equipamentos</Text>
      <Text style={styles.text}>
        Seu equipamento é sua Völundr, a odachi chamada Monohoshizao
      </Text>
      <Image source={require('../imagens/Kojiro/Monohoshizao.png')} style={styles.image_h}/>
      <Text style={styles.text}>
        A habilidade da Hrist é chamda Re Völundr, usada para reforjar a Monohoshizao após Poseidon destruí-la. Assim como Kojiro, a Monohoshizao também evoluiu e se adaptou a seu oponente, agora sendo formada por duas espadas.
      </Text>
      <Image source={require('../imagens/Kojiro/MonohoshizaoReVolundr.png')} style={styles.image_h}/>
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
  image_h: {
    width: '100%',
    height: 250,
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
