import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function BrandCard({ brand, onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        elevation: 2
      }}
    >
      <Image 
        source={{ uri: brand.logo }} 
        style={{ width: 56, height: 56, borderRadius: 8, marginRight: 12 }} 
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{brand.name}</Text>
        <Text numberOfLines={2} style={{ color: '#666' }}>{brand.tagline}</Text>
      </View>
    </TouchableOpacity>
  );
}
