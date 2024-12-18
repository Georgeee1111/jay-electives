import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="components/LoginScreen" options={{ title: "Login" }} />
      <Stack.Screen name="components/RegisterScreen" options={{ title: "Register" }} />
    </Stack>
  );
}
