import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BrandDetails({ route }) {
  const { brand } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={["#ffecd2", "#fcb69f"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Image source={{ uri: brand.logo }} style={styles.logo} />
      </LinearGradient>

      {/* Brand Info */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{brand.name}</Text>
        <Text style={styles.tagline}>{brand.tagline}</Text>
        <Text style={styles.description}>{brand.discription}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    backgroundColor: "#fff",
    borderRadius: 75,
    padding: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: "#666",
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    color: "#777",
    lineHeight: 22,
  },
});
