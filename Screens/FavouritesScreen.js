import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Animated, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample JSON data for favorite items
const favoriteItems = [
  { id: 1, name: 'Nike Air Force', imageUrl: 'https://images.pexels.com/photos/1662224/pexels-photo-1662224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isFavorite: false },
  { id: 2, name: 'Puma', imageUrl: 'https://images.pexels.com/photos/6748334/pexels-photo-6748334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isFavorite: false },
  { id: 3, name: 'Toaster', imageUrl: 'https://images.pexels.com/photos/7936638/pexels-photo-7936638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isFavorite: false },
  { id: 4, name: 'Soap', imageUrl: 'https://images.pexels.com/photos/6690891/pexels-photo-6690891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isFavorite: false },
  { id: 5, name: 'Coffee', imageUrl: 'https://images.pexels.com/photos/14385408/pexels-photo-14385408.jpeg?auto=compress&cs=tinysrgb&w=1200', isFavorite: false },
  { id: 6, name: 'PS5 Controller', imageUrl: 'https://images.pexels.com/photos/2323435/pexels-photo-2323435.jpeg?auto=compress&cs=tinysrgb&w=1200', isFavorite: false },
];

const FavoritesScreen = () => {
  const [items, setItems] = useState(favoriteItems);

  const toggleFavorite = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const heartScale = new Animated.Value(1);

  const handleHeartPressIn = () => {
    Animated.spring(heartScale, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handleHeartPressOut = () => {
    Animated.spring(heartScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <SafeAreaView style={styles.favoriteItemsContainer}>
        {items.map(item => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.favoriteItem} 
            onPress={() => toggleFavorite(item.id)}
            onPressIn={handleHeartPressIn}
            onPressOut={handleHeartPressOut}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.image}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Animated.View style={[styles.heartIcon, { transform: [{ scale: heartScale }] }]}>
              {item.isFavorite ? (
                <Ionicons name="heart" size={24} color="red" />
              ) : (
                <Ionicons name="heart-outline" size={24} color="#FFF" />
              )}
            </Animated.View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with ❤️ by GOA</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  favoriteItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  favoriteItem: {
    width: '49%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#00CDBC',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  itemName: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
});

export default FavoritesScreen;