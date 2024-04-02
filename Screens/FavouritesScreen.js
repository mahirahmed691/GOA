import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Favorite Items</Text>
      <SafeAreaView style={styles.favoriteItemsContainer}>
        {items.map(item => (
          <TouchableOpacity key={item.id} style={styles.favoriteItem} onPress={() => toggleFavorite(item.id)}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.image}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            {item.isFavorite ? (
              <Ionicons name="heart" size={24} color="crimson" style={styles.heartIcon} />
            ) : (
              <Ionicons name="heart-outline" size={24} color="teal" style={styles.heartIcon} />
            )}
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  favoriteItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    shadowColor: 'black', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15, // Shadow opacity
    shadowRadius: 1.84, // Shadow radius
  },
  favoriteItem: {
    width: '49%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Add elevation for the raised effect
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  itemName: {
    paddingTop: 5,
    marginLeft: 0,
    marginBottom: 5,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Arial',
    padding:10,
    paddingTop:10
  },
  heartIcon: {
    position: 'absolute',
    bottom: 8,
    right: 5,
  },
});

export default FavoritesScreen;
