import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { Acs } from 'react-native-aos';

const Screen2 = ({ navigation }) => {
  const [showThirdImage, setShowThirdImage] = useState(false);

  const handleArrowPress = () => {
    setShowThirdImage(true);
    setTimeout(() => {
      navigation.navigate('Screen3');
    }, 1000);
  };

  return (
    <ImageBackground source={require('./award_bg.png')} style={styles.container}>
      <Image source={require('./curtain.png')} style={[styles.curtain, styles.curtainLeft]} resizeMode="contain" />
      <Image source={require('./curtain.png')} style={[styles.curtain, styles.curtainRight]} resizeMode="contain" />
      <View style={styles.contentContainer}>
        <Image source={require('./main-heart.png')} style={styles.imageAbove} resizeMode="contain" />
        <Text style={styles.screenText}>Give U Some Love</Text>
        <Animated.View
          style={[styles.cardContainer, Acs.fadeIn, { transform: [{ translateY: showThirdImage ? 0 : 100 }] }]}
        >
          <View style={styles.avtarContainer}>
            <Image source={require('./avtar2.png')} style={styles.avtarImage} resizeMode="contain" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>D-Lister</Text>
            <Text style={styles.cardText}>Sally</Text>
          </View>
        </Animated.View>
        <Image source={require('./girlClap.png')} style={styles.image} resizeMode="contain" />
        {showThirdImage && <Text style={styles.congratsText}>Congrats!</Text>}
        <TouchableOpacity style={styles.arrowContainer} onPress={handleArrowPress}>
          <Image source={require('./arrow.png')} style={styles.arrow} resizeMode="contain" />
        </TouchableOpacity>
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
  curtain: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 100,
  },
  curtainLeft: {
    left: 0,
  },
  curtainRight: {
    right: 0,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAbove: {
    width: 100,
    height: 200,
    marginBottom: 20,
  },
  screenText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'yellow',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    width: 300,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  avtarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
  },
  avtarImage: {
    width: '100%',
    height: '100%',
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 18,
    color: 'purple',
    fontStyle: 'italic',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  congratsText: {
    fontSize: 18,
    color: 'yellow',
    marginTop: 10,
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 20,
  },
  arrow: {
    width: 40,
    height: 40,
  },
});

export default Screen2;
