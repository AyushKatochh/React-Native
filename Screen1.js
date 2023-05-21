import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen2');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground source={require('./award_bg.png')} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('./castingLogo.png')} style={styles.imageAbove} resizeMode="contain" />
        <Text style={styles.screenText}>Casting Call</Text>
        <Image source={require('./girlClap.png')} style={styles.image} resizeMode="contain" />
        <Image source={require('./awardPlatform.png')} style={styles.imageBelow} resizeMode="contain" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAbove: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  screenText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'yellow',
    fontStyle: 'italic',
    transform: [{ rotate: '-5deg' }],
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  imageBelow: {
    width: 400,
    height: 200,
    marginTop: 20,
  },
});

export default Screen1;
