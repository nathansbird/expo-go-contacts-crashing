import { Image, StyleSheet, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Fields, getContactsAsync, PermissionStatus, requestPermissionsAsync } from 'expo-contacts';

export default function ContactsScreen() {
  
  const triggerContactsFlow = async () => {
    const { status } = await requestPermissionsAsync();

    if (status === PermissionStatus.GRANTED) {
      const { data } = await getContactsAsync({
        fields: [
          Fields.Name,
          Fields.PhoneNumbers,
        ],
      });
    }
  }

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
        <ThemedText type="title">Contacts</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Press 'Trigger Contacts'</ThemedText>
        <ThemedText>
          Press <ThemedText type="defaultSemiBold">'Trigger Contacts'</ThemedText> to start the system dialog for granting permission
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Observe Crash</ThemedText>
        <ThemedText>
          Expo Go dies on me every time. This has happened to me on a 17.4 simulator, and a physical iPhone 14 Pro running iOS 18.0
        </ThemedText>
      </ThemedView>
      <Button title='Trigger Contacts' onPress={() => triggerContactsFlow()}/>
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
