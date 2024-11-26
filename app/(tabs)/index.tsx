import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to System Information 4!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nama:</ThemedText>
        <ThemedText>
          Praja Sukma Malengga <ThemedText type="defaultSemiBold"></ThemedText> 
          {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
             
              
            })}
          </ThemedText>{' '}
         
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nim</ThemedText>
        <ThemedText>
         0702211027
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Alamat</ThemedText>
        <ThemedText>
         Perkebunan Perlabian, Kec Kp Rakyat, Labuhanbatu Selatan{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
