// this screen has a second API, but it is focused on the information from the pilot episode (first episode)

import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// pilot image request
const image = require('../assets/images/pilot.jpg');

export default function TabTwoScreen() {

  // declaration of const for loading and request in API name, air date and episode
  const [load, setLoad] = useState(true)
  const [data, setData] = useState<Pilot>({
    name: '',
    air_date: '',
    episode: ''
  })

  // pilot interface
  interface Pilot {
    name: string,
    air_date: string,
    episode: string
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode/1')
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch(() => (alert('Erro ao carregar')))
      .finally(() => setLoad(false))
  }, []) // API request


  return (
    <View style={styles.container}>
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
            colors={['#B2DF28', '#00B5CC']}/* gradient style */>

            <Text style={styles.title}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"> About the first episode:
            </Text>
          </LinearGradient>

      <View style={{ height: 350, width: 400, marginBottom: 10, marginTop: 20, alignItems: 'center' }}>
        { // API of the first episode with the data: name, premiere date and episode, plus a small synopsis about what happened in that episode
          load ? <ActivityIndicator /> : (
            <View>
              <View style={styles.container}>
                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}
                  lightColor="rgba(0,0,0,0.8)"
                  darkColor="rgba(255,255,255,0.8)">{data.name}
                </Text>
                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}
                  lightColor="rgba(0,0,0,0.8)"
                  darkColor="rgba(255,255,255,0.8)">{data.air_date}
                </Text>
                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}
                  lightColor="rgba(0,0,0,0.8)"
                  darkColor="rgba(255,255,255,0.8)">{data.episode}
                </Text>
                <Image
                  source={{ uri: 'https://j.gifs.com/66EVYN.gif' }}
                  style={{ width: 180, height: 100, marginTop: 20 }}
                />
                <Text style={styles.sinopsis}>Rick takes Morty on a trip to another dimension to find seeds for "mega-trees," while Jerry and Beth argue over Rick's influence on their son.</Text>
              </View>
            </View>
          )
        }
      </View>
    </View>
  );
}

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: '95%',
    height: '25%',
    marginTop: 10,
  },
  sinopsis: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20
  }
});
