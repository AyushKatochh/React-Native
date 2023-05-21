import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

const Screen3 = ({ navigation }) => {
  return (
    <ImageBackground source={require('./award_bg.png')} style={styles.container}>
      <Image source={require('./curtain.png')} style={[styles.curtain, styles.curtainLeft]} resizeMode="contain" />
      <Image source={require('./curtain.png')} style={[styles.curtain, styles.curtainRight]} resizeMode="contain" />
      <View style={styles.contentContainer}>
        <Image source={require('./main-heart.png')} style={styles.imageAbove} resizeMode="contain" />
        <Text style={styles.screenText}>Screen 3</Text>
        <Image source={require('./girlClap.png')} style={styles.image} resizeMode="contain" />
        <Image source={require('./awardPlatform.png')} style={styles.imageBelow} resizeMode="contain" />
        <Text style={styles.friendsText}>4 Friends give you some Love</Text>
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
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  screenText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'yellow',
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
  friendsText: {
    fontSize: 18,
    color: 'yellow',
    marginTop: 10,
  },
});

export default Screen3;
