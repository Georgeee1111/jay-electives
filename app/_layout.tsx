import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="LoginScreen" options={{ title: "Login" }} />
      <Stack.Screen name="RegisterScreen" options={{ title: "Register" }} />
    </Stack>
  );
}
