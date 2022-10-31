// info modal screen

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          height: 45,
          width: "90%",
          marginTop: 15,
          borderRadius: 5,
          justifyContent:'center',
          alignItems: 'center'
        }}

        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['#B2DF28', '#00B5CC']} /* gradient styling */>

        <Text style={styles.title}>How to use this API?</Text>
      </LinearGradient>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" /* pulls the screen that contains the text with the information *//>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
