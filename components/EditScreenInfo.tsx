import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

// screen that contains information for the user

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer} /* first content */>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)" 
        >
          Rick and Morty API Information:
        </Text>      

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)" /* explanation */>
          Choose a character and find out more details about it. See information about the Pilot episode or the full animated series at the link below.
        </Text>
      </View>

      <View style={styles.helpContainer} /* this link goes to a website that explains more about the animated series */>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint} darkColor={Colors.dark.tint}>
          Learn more about the Rick and Morty animated series
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// function that directs the web link
function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://rickandmorty.fandom.com/wiki/Rick_and_Morty_(TV_series)'
  );
}

// style
const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
