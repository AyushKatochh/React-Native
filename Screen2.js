import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

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
      <View style={styles.contentContainer}>
        <Image source={require('./main-heart.png')} style={styles.imageAbove} resizeMode="contain" />
        <Text style={styles.screenText}>Give U Some Love</Text>
        <Animated.View style={[styles.cardContainer]}>
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
    fontStyle: 'italic',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
  },
  avtarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  avtarImage: {
    width: '100%',
    height: '100%',
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  cardText: {
    fontSize: 16,
    color: 'black',
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
