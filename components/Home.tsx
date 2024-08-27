import { useRouter } from 'expo-router';
import { StyleSheet, Text, Image, Button, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Home() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={styles.titleText}>
        Kninghts of the zodiac the lost canvas
      </Text>

      <Image
        style={styles.image2}
        source={{
          uri: 'https://images.justwatch.com/poster/158371934/s332/temporada-1',
        }}
      ></Image>

      <Button
        title="Start"
        onPress={() => router.navigate('./kininghts')}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'System',
  },
  image2: {
    width: 300,
    height: 400,
    borderRadius: 10,
    objectFit: 'cover',
  },
});
