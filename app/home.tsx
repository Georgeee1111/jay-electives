// app/home.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to JJK Store</Text>
      <Button
        title="Jay Brand"
        onPress={() => router.push('/jayBrand')}
      />
      <Button
        title="Jade Brand"
        onPress={() => router.push('/jadeBrand')}
      />
      <Button
        title="Kim Brand"
        onPress={() => router.push('/kimBrand')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
