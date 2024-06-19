/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
  Alert
} from 'react-native';
// import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../Assets/One.png'
import DiceTwo from '../Assets/Two.png'
import DiceThree from '../Assets/Three.png'
import DiceFour from '../Assets/Four.png'
import DiceFive from '../Assets/Five.png'
import DiceSix from '../Assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        Alert.alert("You Got One");
        break;
      case 2:
        setDiceImage(DiceTwo)
        Alert.alert("You Got Two");
        break;
      case 3:
        setDiceImage(DiceThree)
        Alert.alert("You Got Three");
        break;
      case 4:
        setDiceImage(DiceFour)
        Alert.alert("You Got Four");
        break;
      case 5:
        setDiceImage(DiceFive)
        Alert.alert("You Got Five");
        break;
      case 6:
        setDiceImage(DiceSix)
        Alert.alert("You Got Six");
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }

    // ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
        Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
borderColor:"black",
    fontSize: 16,
    color:"black",
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop:20,
  },
});

export default App;