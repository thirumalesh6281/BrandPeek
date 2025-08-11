import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./HomeScreen.styles";

export default function HomeScreen({ navigation }) {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6898cfa1ddf05523e55fe215.mockapi.io/brandpeek-api/brands/brands")
      .then((res) => {
        setBrands(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#fcb69f" />
        <Text>Loading brands...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("BrandDetails", { brand: item })}
      style={styles.card}
    >
      <View style={styles.tableRow}>
        <View style={styles.logoColumn}>
          <Image source={{ uri: item.logo }} style={styles.logo} />
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.tagline}>{item.tagline}</Text>
        </View>
        <View style={styles.detailsColumn}>
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Logo</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Brand</Text>
        <Text style={styles.headerText}>Details</Text>
      </View>
      <FlatList
        data={brands}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}