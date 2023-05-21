import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Screen2 = ({ navigation }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showThirdImage, setShowThirdImage] = useState(false);
  const [slideAnimation] = useState(new Animated.Value(0));
  const [timer, setTimer] = useState(20000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 20000);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleArrowPress = () => {
    if (!showSecondImage) {
      setShowSecondImage(true);
    } else if (!showThirdImage) {
      setShowThirdImage(true);
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const slideRight = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <ImageBackground source={require('./award_bg.png')} style={styles.container}>
      <Image source={require('./curtain.png')} style={[styles.curtain, styles.curtainLeft]} resizeMode="contain" />
      <Image source={require('./curtain.png')} style={[styles.curtain, styles.curtainRight]} resizeMode="contain" />
      <View style={styles.contentContainer}>
        <Image source={require('./main-heart.png')} style={styles.imageAbove} resizeMode="contain" />
        <Text style={styles.screenText}>Give U Some Love</Text>
        {showSecondImage && (
          <View style={styles.card}>
            <Image source={require('./avtar2.png')} style={styles.avtarImage} resizeMode="contain" />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>D Sally</Text>
              <Text style={styles.timerText}>{timer} likes</Text>
            </View>
          </View>
        )}
        {showThirdImage && (
          <Animated.View style={[styles.congratsContainer, { transform: [{ translateX: slideRight }] }]}>
            <Text style={styles.congratsText}>Congrats!</Text>
          </Animated.View>
        )}
        <Image source={require('./girlClap.png')} style={styles.image} resizeMode="contain" />
        {showThirdImage && (
          <Text style={styles.friendsText}>4 Friends give you some Love</Text>
        )}
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
  card: {
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
  avtarImage: {
    width: 50,
    height: 50,
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  cardText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'right',
  },
  timerText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
  congratsContainer: {
    position: 'absolute',
    top: 80,
    right: 20,
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  congratsText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  friendsText: {
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
