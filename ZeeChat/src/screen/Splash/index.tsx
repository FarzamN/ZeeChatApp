import { StyleSheet, Image, View, StatusBar, Dimensions } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { GlobalStyle } from '../Constants/GlobalStyle.tsx';
import { Colors } from '../utils/Colors.tsx';
import BackgroundImage from '../../components/BackgroundImage';

const { width } = Dimensions.get('screen');
const SplashScreen = () => {
    return (
        <BackgroundImage source={require('../../assets/image/Backgrounds/splash.jpg')}>
            <View style={styles.Container}>
                <StatusBar
                    backgroundColor={Colors.Non}
                    translucent
                    barStyle="dark-content"
                />
                <View style={styles.ImageBox}>
                    <Image
                        style={GlobalStyle.Image}
                        resizeMode="contain"
                        source={require('../../assets/image/Logos/logo.jpg')}
                    />
                </View>
                <LottieView
                    autoPlay
                    style={GlobalStyle.LottieView}
                    source={require('../../assets/lottie/splash_lottie.json')}
                />
            </View>
        </BackgroundImage>
    );
};
const styles = StyleSheet.create({
    Container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    ImageBox: {
        width: width / 1.7,
        borderRadius: 15,
        aspectRatio: 1 / 1,
        overflow: 'hidden',
    },
});
export default SplashScreen;
