import { 
  Text, View, StyleSheet, FlatList, Image, 
  Pressable, Modal, SafeAreaView 
} from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const db = [
    {
      id:1,
      title:"LeonRe2",
      img:require('assets\IMG\RE2L.jpg'),
      dec:"Leon é um policial novato corajoso que chega a Raccoon City e enfrenta zumbis perigosos enquanto busca sobreviventes e respostas sobre o surto mortal mostrando determinação coragem inteligência e senso de justiça mesmo diante do caos e do medo constante ao seu redor durante a crise intensa na cidade devastada"
    },
    {
      id:2,
      title:"LeonRe4",
      img:require('assets\IMG\RE4L.jpg'),
      dec:"Leon é um agente experiente do governo que vai à Europa resgatar Ashley filha do presidente enfrentando cultistas infectados com Las Plagas mostrando habilidade em combate precisão com armas sangue frio coragem e inteligência tática enquanto sobrevive a perigos extremos e situações intensas constantes durante sua missão perigosa e desafiadora"
    },
    {
      id:3,
      title:"LeonRe6",
      img:require('assets\IMG\RE6L.jpg'),
     dec:"Leon é um agente veterano marcado por tragédias que enfrenta surtos biológicos globais lutando contra criaturas perigosas e conspirações enquanto protege inocentes demonstra liderança coragem experiência em combate e forte senso de dever mesmo diante de perdas difíceis e decisões complexas durante missões extremamente arriscadas ao redor do mundo"
    },
    {
      id:4,
      title:"LeonRe9",
      img:require('assets\IMG\re9L.jpg'),
      dec:"Leon S. Kennedy retorna como um veterano amadurecido e resiliente. Com o olhar marcado por décadas de horror biológico, ele combina maestria tática e reflexos implacáveis. Mais do que um sobrevivente, Leon agora é um símbolo de resistência contra o caos global da Umbrella."
    },
    {
      id:5,
      title:"AshleyGraham",
      img:require('assets\IMG\ashlley.jpg'),
      dec:"Ashley Graham é a filha do presidente, resgatada por Leon em Resident Evil 4. Inicialmente vulnerável e dependente, ela demonstra coragem ao enfrentar horrores inimagináveis na Espanha. Com seu icônico traje laranja e inteligência para resolver enigmas, Ashley evolui de uma vítima indefesa para uma aliada resiliente e determinada."
    },
    {
      id:6,
      title:"Claire",
      img:require('assets\IMG\CLAIRE.jpg'),
     dec:"Claire Redfield é a universitária destemida que chega a Raccoon City em busca de seu irmão, Chris. Em Resident Evil 2, sua empatia brilha ao proteger a jovem Sherry Birkin. Combinando instinto de sobrevivência e habilidade com armas, Claire transforma sua vulnerabilidade inicial em uma força heroica e incansável."
    },
    {
      id:7,
      title:"Jill",
      img:require('assets\IMG\JILL.png'),
      dec:"Jill Valentine é a especialista em arrombamento e membro de elite dos S.T.A.R.S. em Resident Evil 1. Inteligente e tática, ela sobrevive à mansão Spencer com astúcia e precisão. Jill equilibra uma postura profissional com uma vontade inquebrável, consolidando-se como uma das maiores heroínas do horror de sobrevivência."
    },
    {
      id:8,
      title:"CrisRe8",
      img:require('assets\IMG\CRISRE8.jpg'),
      dec:"Em Resident Evil Village (RE8), Chris Redfield surge como uma figura enigmática e endurecida. Liderando o esquadrão de elite Lobo de Caça, ele opera nas sombras, priorizando o dever sobre a diplomacia. Mais robusto e experiente, Chris carrega o peso de anos de combate, agindo como um mentor implacável e sombrio."
    },
    {
      id:9,
      title:"CrisRe5",
      img:require('assets\IMG\ChrisredfieldRE5.jpg'),
      dec:"No clássico Resident Evil 5, Chris Redfield ressurge como um agente da B.S.A.A. fisicamente formidável e determinado. Agora focado em erradicar o bioterrorismo na África, ele demonstra uma força bruta impressionante. Movido pela perda e pelo dever, Chris enfrenta seu passado com garra, consolidando-se como um herói de ação lendário."
    },
    {
      id:10,
      title:"AdaWong",
      img:require('assets\IMG\ADA.jpg'),
      dec:"Ada Wong é a espiã enigmática que transita entre as sombras em Resident Evil. Elegante e letal, ela utiliza tecnologia de ponta e astúcia para cumprir seus objetivos misteriosos. Sempre um passo à frente, Ada equilibra sua frieza profissional com uma conexão complexa e duradoura com Leon S. Kennedy."
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={db}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image source={item.img} style={styles.image} />

            <View style={{flex:1}}>
              <Text style={styles.title}>{item.title}</Text>

              <Pressable
                style={styles.button}
                onPress={() => {
                  setSelectedItem(item);
                  setModalVisible(true);
                }}
              >
                <Text style={styles.buttonText}>Mostrar mais</Text>
              </Pressable>
            </View>

          </View>
        )}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                <Image 
                  source={selectedItem.img} 
                  style={styles.modalImage} 
                />
                <Text style={styles.description}>
                  {selectedItem.dec}
                </Text>
              </>
            )}

            <Pressable
              style={[styles.button, {backgroundColor:'#333'}]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center'
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },

  description: {
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 10
  }
});