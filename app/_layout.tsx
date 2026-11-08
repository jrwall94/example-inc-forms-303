import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerTransparent: false,
          headerBackButtonDisplayMode: "minimal",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="sign-in"
          options={{
            headerTitle: "Sign In",
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerTitle: "Sign Up",
          }}
        />
        <Stack.Screen
          name="time-off"
          options={{
            headerTitle: "Time Off",
          }}
        />
        <Stack.Screen
          name="logged-in"
          options={{
            headerTitle: "Profile",
          }}
        />
        <Stack.Screen
          name="employee-info"
          options={{
            headerTitle: "Employee Info",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
