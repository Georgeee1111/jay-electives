import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function KimBrandPage() {
  const router = useRouter();

  const handleAddToCart = () => {
    alert('Item added to cart!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kim Brand T-Shirts</Text>
      {[...Array(5)].map((_, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your actual image URL
            style={styles.image}
          />
          <Text style={styles.price}>250 pesos</Text>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#f00',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },
});
