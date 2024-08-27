import { Stack } from 'expo-router';

import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
            animation: 'slide_from_right',
            animationDuration: 500,
          }}
        >
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="kininghts"
            options={{ title: 'Kininghts' }}
          ></Stack.Screen>
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
