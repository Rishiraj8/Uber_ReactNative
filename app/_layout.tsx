import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

export default function Layout() {
    SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});


  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
  );
}