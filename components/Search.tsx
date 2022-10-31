import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Image, Modal } from 'react-native';
import { Text, View } from './Themed';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// image request logo
const image = require('../assets/images/logo.png');

/* the Search screen is basically the whole part of the search
between the elements of the API, being able to search in more 
detail about each character*/
export default function Search({ path }: { path: string }) {

  // creating the interface for the character
  interface Character {
    name: string,
    image: string,
    status: string,
    gender: string,
    species: string,
    origin: {
      name: string
    }
  }

  // declaration of const
  const [load, setLoad] = useState(true) // to load
  const [data, setData] = useState([]) // to use the data
  const [page] = useState<string>("1,2,3,4,5,7,8,10,11,14,15,16,17,18,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,37,38,40,41,50,62,67,69") // character selection to show in API
  const [isOpen, setIsOpen] = useState<boolean>(false) // check if it's open
  const [character, setCharacter] = useState<Character>({
    name: '',
    image: '',
    status: '',
    gender: '',
    species: '',
    origin: {
      name: ''
    }
  }) // character const

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/' + page)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch(() => (alert('Erro ao carregar')))
      .finally(() => setLoad(false))
  }, []) // API request

  function openedModal(item: number) {
    setIsOpen(() => !isOpen)

    fetch(`https://rickandmortyapi.com/api/character/${item}`)
      .then((resp) => resp.json())
      .then((json) => setCharacter(json))
  } // function to open the modal

  return (
    <View>

      <Modal /* modal creation */
        animationType={'slide'}
        transparent={false}
        visible={isOpen}
      >

        <View style={styles.modalcontainer}>
          <Image source={image} style={styles.logo} />
          <LinearGradient
            style={{
              height: 45,
              width: "90%",
              marginTop: 15,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}

            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={['#B2DF28', '#00B5CC']} /* linear gradient for decoration */>

            <Text style={styles.title} /* API usage to show selected character name */
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">{character?.name}
            </Text>
          </LinearGradient>

          <View style={styles.bgcontainer}>
            <Image source={{ uri: character?.image }} style={styles.modalimg} /* API usage to show selected character image *//>

            <View style={styles.modalcard} /* cards with the most detailed information about each character */>
              <View style={styles.modalbox}>
                <MaterialCommunityIcons
                  name="heart-pulse"
                  size={30}
                  color="#25B60D"
                  style={{ alignContent: 'center', marginBottom: 10 }}
                />
                <Text style={styles.category}>Status</Text>
                <Text style={styles.answer}>{character?.status}</Text>
              </View>
              <View style={styles.modalbox}>
                <Fontisto
                  name="person"
                  size={25}
                  color="#0F0BDB"
                  style={{ alignContent: 'center', marginBottom: 10 }}
                />
                <Text style={styles.category}>Species</Text>
                <Text style={styles.answer}>{character?.species}</Text>
              </View>
            </View>

            <View style={styles.modalcard} /* cards with the most detailed information about each character */>
              <View style={styles.modalbox}>
                <Ionicons
                  name="transgender"
                  size={30}
                  color="#00B5CC"
                  style={{ alignContent: 'center', marginBottom: 10 }}
                />
                <Text style={styles.category}>Gender</Text>
                <Text style={styles.answer}>{character?.gender}</Text>
              </View>
              <View style={styles.modalbox}>
                <Ionicons
                  name="earth"
                  size={30}
                  color="#B2DF28"
                  style={{ alignContent: 'center', marginBottom: 10 }}
                />
                <Text style={styles.category}>Origin</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.answer}>{character?.origin.name}</Text>
              </View>
            </View>

              <LinearGradient 
                style={{
                  height: 45,
                  width: "20%",
                  marginTop: 30,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}

                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#B2DF28', '#00B5CC']}>

                <TouchableOpacity onPress={() => setIsOpen(() => false)} /* button to go back to the previous screen */>
                <Ionicons
                  name="arrow-back-outline"
                  size={40}
                  color="white"
                  style={{ alignContent: 'center' }}
                />
                </TouchableOpacity>
              </LinearGradient>

          </View>
        </View>
      </Modal >

      <View style={styles.getStartedContainer} /* part of the screen that contains the API with the selected characters */>

        <LinearGradient
          style={{
            height: 45,
            width: "90%",
            marginTop: 15,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}

          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#B2DF28', '#00B5CC']}>

          <Text style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"> Choose a character:
          </Text>
        </LinearGradient>

        <View style={{ height: 480, width: 400, marginBottom: 10, marginTop: 20, alignItems: 'center' }} /* API of selected characters */>
          {
            load ? <ActivityIndicator /> : (
              <FlatList /* flatlist that contains the image and name of each API character */
                data={data}
                keyExtractor={({ id }, index) => id}
                numColumns={2}
                renderItem={({ item }: { item: any }) => (
                  <TouchableOpacity onPress={() => openedModal(item.id)}>
                    <View style={styles.container}>
                      <Image source={{ uri: item.image }} style={styles.img} />
                      <View style={styles.imgcontainer}>
                        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.getStartedText}
                          lightColor="rgba(0,0,0,0.8)"
                          darkColor="rgba(255,255,255,0.8)">{item.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )
          }
        </View>

      </View>

    </View >
  );
}

// style
const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    backgroundColor: 'rgba(222,222,222,0.3)',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 5,
    borderRadius: 8,
    margin: 10,
    width: 150,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    margin: 5
  },
  imgcontainer: {
    backgroundColor: 'rgba(207,223,211,0.4)',
    width: 150,
    height: 35,
    justifyContent: 'center',
    borderRadius: 8,
    padding: 1,
  },
  modalcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '90%',
    height: 130,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bgcontainer: {
    backgroundColor: 'rgba(222,222,222,0.4)',
    marginTop: 30,
    height: '72%',
    width: '100%',
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    margin: 10
  },
  modalimg: {
    width: 150,
    height: 150,
    borderRadius: 80,
    justifyContent: 'center',
    margin: 5
  },
  modalcard: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalbox: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 120,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    borderColor: '#57E216',
    borderWidth: 1,
    padding: 10
  },
  category: {
    fontSize: 10,
    color: 'black'
  },
  answer: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black'
  },
});