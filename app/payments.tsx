import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";

interface Product {
  id: number;
  image: any;
  price: string;
  description: string;
}

export default function PaymentPage() {
  const { cart } = useLocalSearchParams();
  const parsedCart: Product[] = cart ? JSON.parse(cart as string) : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={parsedCart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>
        Total:{" "}
        {parsedCart.reduce(
          (total, item) => total + parseInt(item.price.split(" ")[0]),
          0
        )}{" "}
        pesos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 14,
    color: "#777",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
