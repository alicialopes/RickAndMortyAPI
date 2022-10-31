// screen one that has the characters API
import { StyleSheet } from 'react-native';
import Search from '../components/Search';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';

// logo image request
const image = require('../assets/images/logo.png');

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return ( // content of screen one: character logo and api (search screen)
    <View style={styles.container}>
      <Image source={image} style={styles.logo} />
      <Search path="/screens/TabOneScreen.tsx" />
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
  logo: {
    width:'90%',
    height: '20%',
    marginTop: 10,
  },
});
