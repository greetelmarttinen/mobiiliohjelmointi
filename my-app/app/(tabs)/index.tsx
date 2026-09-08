import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Text } from '@react-navigation/elements';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/home_pic.jpg')}
          style={styles.homescreenPic}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Heyyyyy !</ThemedText>
        <HelloWave />
      </ThemedView>
      <View>
        <Text style={styles.text}>
          Welcome to explore what I have done here
        </Text>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  homescreenPic: {
    height: 270,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  text: {
    alignItems: 'center',
    justifyContent: "center",
    fontSize: 17
  }
});
