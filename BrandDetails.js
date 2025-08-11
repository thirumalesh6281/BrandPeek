import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function BrandDetails({ route }) {
  const { brand } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: brand.logo }} style={styles.logo} />
      <Text style={styles.name}>{brand.name}</Text>
      <Text style={styles.tagline}>{brand.tagline}</Text>
      <Text style={styles.description}>{brand.discription}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  logo: { width: "100%", height: 200, resizeMode: "contain", marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  tagline: { fontSize: 16, color: "#555", marginBottom: 15 },
  description: { fontSize: 14, color: "#777" },
});
